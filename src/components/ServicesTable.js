import React, {useCallback, useState} from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
} from "@nextui-org/react";
import {PlusIcon} from "./icons/PlusIcon";
import {VerticalDotsIcon} from "./icons/VerticalDotsIcon";
import {SearchIcon} from "./icons/SearchIcon";
import {ChevronDownIcon} from "./icons/ChevronDownIcon";

import {capitalize} from "./utils";
import AddService from "./AddService";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {useAddServiceMutation, useDeleteServiceMutation} from "../redux/slices/servicesApiSlice";
import {BeatLoader} from "react-spinners";
import {Dialog} from "primereact/dialog";
import { setService, clearService } from "../redux/slices/data";
import { Button as Btn } from 'primereact/button'
import EditService from "./EditService";

const columns = [
    {name: "ID", uid: "id"},
    {name: "TITLE", uid: "title", sortable: true},
    {name: "PRICE", uid: "price", sortable: true},
    {name: "DESCRIPTION", uid: "description"},
    {name: "DURATION", uid: "duration", sortable: true},
    {name: "BARBERSHOPID", uid: "barberShopId"},
    {name: "GALLERIES", uid: "galleries"},
    {name: "CREATEDAT", uid: "createdAt", sortable: true},
    {name: "ACTIONS", uid: "actions"},
];

const INITIAL_VISIBLE_COLUMNS = ["title", "price", "duration", "createdAt", "actions"];

export default function ServicesTable({services}) {

    let dispatch = useDispatch();
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    let { userInfo } = useSelector(state => state.auth);
    const [deleteService, { isLoading, isSuccess, error }] = useDeleteServiceMutation();
    let { service } = useSelector(state => state.data);
    const submitDeleteService  = async () => {
        try {
            const res = await deleteService({id: service.id, token: userInfo.token}).unwrap();
            console.log(res)
            dispatch(clearService())
            toast.success("Service Deleted Successfully!");
            window.location.reload();
        }catch (err) {
            dispatch(clearService())
            setVisibleDialog(false);
            toast.error(err?.data?.message);
            console.error(err);
        }
    }

    const footerContent = (
        <div>
            <Btn label="No" icon="pi pi-times" onClick={() => setVisibleDialog(false)} className="p-button-text" />
            <Btn icon="pi pi-check" onClick={() => submitDeleteService()} >
                {
                    isLoading ? <BeatLoader color="#fff" size={10} /> : "Yes"
                }
            </Btn>
        </div>
    );

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "createdAt",
        direction: "descending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredServices = [...services];

        if (hasSearchFilter) {
            filteredServices = filteredServices.filter((service) =>
                service.title.toLowerCase().includes(filterValue.toLowerCase()) || service.title.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        return filteredServices;
    }, [services, filterValue, statusFilter]);



    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((service, columnKey) => {
        const cellValue = service[columnKey];

        switch (columnKey) {
            case "title":
                return (
                    <User
                        avatarProps={{radius: "lg", src: service.gallery.length > 0 ? service.gallery[0].image : ''}}
                        name={cellValue}
                    >
                        {service.email}
                    </User>
                );
            case "createdAt":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize mb-0 mt-auto pt-2">{new Date(cellValue).toLocaleDateString("fr-FR")}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{`${new Date(service.createdAt).getUTCHours()}h${new Date(service.createdAt).getUTCMinutes()}`}</p>
                    </div>
                );
            case "price":
                return (
                    <p className="text-bold text-small capitalize mb-0 mt-auto pt-2" >
                        {cellValue} TND
                    </p>
                );
            case "duration":
                return (
                    <p className="text-bold text-small capitalize mb-0 mt-auto pt-2" >
                        {cellValue} minutes
                    </p>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown className="border: none;">
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem onClick={() => navigate(`/service/${service.id}`)}>View</DropdownItem>
                                <DropdownItem key={service.id} onClick={() => {dispatch(setService({...service})); setVisibleEdit(true);}}>Edit</DropdownItem>
                                <DropdownItem key={service.id} onClick={() => {dispatch(setService({...service})); setVisibleDialog(true);}}>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = useCallback(()=>{
        setFilterValue("")
        setPage(1)
    },[])

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button color="primary" onClick={() => setVisible(!visible)} endContent={<PlusIcon />}>
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {services.length} services</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onRowsPerPageChange,
        services.length,
        onSearchChange,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
              ? "All items selected"
              : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        Previous
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (
        <div className="m-5" >
            <Table
                color=""
                aria-label="Example table with custom cells, pagination and sorting"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-[382px]",
                }}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No services found"} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>

            </Table>
            <AddService onChange={visible=>setVisible(visible)} visible={visible}/>
            <EditService service={service} onChange={visibleEdit=>setVisibleEdit(visibleEdit)} visible={visibleEdit}/>
            <div className="card flex justify-content-center">

                <Dialog header="Confirmation" visible={visibleDialog} style={{ width: '30vw' }} onHide={() => setVisibleDialog(false)} footer={footerContent}>
                    <p className="m-0" style={{ color: "#fff" }}>
                        Do you want to delete this record?
                    </p>
                </Dialog>
            </div>
        </div>
    );
}
