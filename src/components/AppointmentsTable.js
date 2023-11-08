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
import {VerticalDotsIcon} from "./icons/VerticalDotsIcon";
import {SearchIcon} from "./icons/SearchIcon";
import {ChevronDownIcon} from "./icons/ChevronDownIcon";
import {capitalize} from "./utils";
import {setAppointment} from "../redux/slices/data";
import {useDispatch, useSelector} from "react-redux";
import {Dialog} from "primereact/dialog";
import {Button as Btn} from "primereact/button";
import {BeatLoader} from "react-spinners";
import {Mention} from "primereact/mention";

const statusColorMap = {
    confirmed: "success",
    refused: "danger",
    waiting: "warning",
};

const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "NAME", uid: "name", sortable: true},
    {name: "DATE", uid: "date", sortable: true},
    {name: "SERVICE", uid: "service", sortable: true},
    {name: "PRICE", uid: "price", sortable: true},
    {name: "EMAIL", uid: "email"},
    {name: "STATUS", uid: "status", sortable: true},
    {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
    {name: "confirmed", uid: "confirmed"},
    {name: "refused", uid: "refused"},
    {name: "waiting", uid: "waiting"},
];

const INITIAL_VISIBLE_COLUMNS = ["name", "date", "service", "price", "status", "actions"];

export default function AppointmentsTable({isLoading, appointments}) {
    let dispatch = useDispatch();
    let { appointment } = useSelector(state => state.data);
    const [visibleConfirmDialog, setVisibleConfirmDialog] = useState(false);
    const [visibleCancelDialog, setVisibleCancelDialog] = useState(false);
    const [data, setData] = React.useState({});




    const change = (index,value) => {
        if(value === "" || value === null || value === undefined){
            let form = data;
            delete form[index];
            setData(form);
        }else {
            let form = {...data};
            form[index] = value;
            setData(form);
        }
    }


    const footerConfirmContent = (
        <div>
            <Btn label="No" icon="pi pi-times" onClick={() => setVisibleConfirmDialog(false)} className="p-button-text" />
            <Btn icon="pi pi-check" onClick={() => console.log()} >
                {
                    isLoading ? <BeatLoader color="#fff" size={10} /> : "Yes"
                }
            </Btn>
        </div>
    );

    const footerCancelContent = (
        <div>
            <Btn label="No" icon="pi pi-times" onClick={() => setVisibleCancelDialog(false)} className="p-button-text" />
            <Btn icon="pi pi-check" onClick={() => console.log()} >
                {
                    isLoading ? <BeatLoader color="#fff" size={10} /> : "Yes"
                }
            </Btn>
        </div>
    );





    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "date",
        direction: "descending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredAppointments = [...appointments];

        if (hasSearchFilter) {
            filteredAppointments = filteredAppointments.filter((appointment) =>
                appointment.name.toLowerCase().includes(filterValue.toLowerCase()) || appointment.email.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredAppointments = filteredAppointments.filter((appointment) =>
                Array.from(statusFilter).includes(appointment.status),
            );
        }

        return filteredAppointments;
    }, [appointments, filterValue, hasSearchFilter, statusFilter]);



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

    const renderCell = React.useCallback((appointment, columnKey) => {
        const cellValue = appointment[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{radius: "lg", src: appointment.avatar}}
                        description={appointment.email}
                        name={cellValue}
                    >
                        {appointment.email}
                    </User>
                );
            case "date":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize mb-0 mt-auto pt-2">{cellValue.toLocaleDateString("fr-FR")}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{`${appointment.date.getUTCHours()}h${appointment.date.getUTCMinutes()}`}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[appointment.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
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
                                <DropdownItem key={appointment.id+"edit"} onClick={() => {dispatch(setAppointment({...appointment})); setVisibleConfirmDialog(true);}}>Confirm</DropdownItem>
                                <DropdownItem key={appointment.id+"edit"} onClick={() => {dispatch(setAppointment({...appointment})); setVisibleCancelDialog(true);}}>Cancel</DropdownItem>
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
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
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
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {appointments.length} appointments</span>
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
    }, [filterValue, onSearchChange, statusFilter, visibleColumns, appointments.length, onRowsPerPageChange, onClear]);

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
    }, [selectedKeys, filteredItems.length, page, pages, onPreviousPage, onNextPage]);

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
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSortChange={setSortDescriptor}
            isLoading={isLoading}
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
            <TableBody emptyContent={"No appointments found"} items={sortedItems}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>

            <div className="card flex justify-content-center">
                <Dialog header="Confirm Appointment" visible={visibleConfirmDialog} style={{ width: '30vw' }} onHide={() => setVisibleConfirmDialog(false)} footer={footerConfirmContent}>
                    <p className="m-0" style={{ color: "#fff" }}>
                        Do you want to <strong style={{color: "green"}}>confirm</strong> this appointment ?
                    </p>

                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Customer</strong> : {appointment?.name}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Email</strong> : {appointment?.email}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Service</strong> : {appointment?.service}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Price</strong> : {appointment?.price}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Date</strong> : {(new Date(appointment?.date)).toLocaleDateString("fr-FR")}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Time</strong> : {(new Date(appointment?.date)).getUTCHours()}h{(new Date(appointment?.date)).getUTCMinutes()}
                    </p>
                </Dialog>
            </div>

            <div className="card flex justify-content-center">
                <Dialog header="Cancel Appointment" visible={visibleCancelDialog} style={{ width: '30vw' }} onHide={() => setVisibleCancelDialog(false)} footer={footerCancelContent}>
                    <p className="m-0" style={{ color: "#fff" }}>
                        Do you want to <strong style={{color: "#EB1616"}}>cancel</strong> this appointment ?
                    </p>

                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Customer</strong> : {appointment?.name}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Email</strong> : {appointment?.email}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Service</strong> : {appointment?.service}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Price</strong> : {appointment?.price}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Date</strong> : {(new Date(appointment?.date)).toLocaleDateString("fr-FR")}
                    </p>
                    <p className="m-2" style={{ color: "#fff" }}>
                        <strong className="mx-auto" style={{color: "#EB1616"}}>Time</strong> : {(new Date(appointment?.date)).getUTCHours()}h{(new Date(appointment?.date)).getUTCMinutes()}
                    </p>
                </Dialog>
            </div>

        </div>
    );
}
