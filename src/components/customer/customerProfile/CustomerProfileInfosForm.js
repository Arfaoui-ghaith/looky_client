import ImageUploader from "../../ImageUploader";
import React from "react";
import {useSelector} from "react-redux";
import {useAddMemberMutation} from "../../../redux/slices/teamApiSlice";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";

function CustomerProfileInfosForm({customer}){

    const [data, setData] = React.useState({});
    const [file, setFile] = React.useState(new FormData());

    let { userInfo } = useSelector(state => state.auth);
    const [addMember, { isLoading }] = useAddMemberMutation();

    const submitAddMember  = async (e) => {
        e.preventDefault();
        try {
            let form = new FormData();
            for(let key of Object.keys(data)){
                form.append(key,data[key])
            }
            form.append("image", file.get('image'));
            console.log(form)
            const res = await addMember({body: form, token: userInfo.token}).unwrap();
            console.log(res)
            toast.success("Service Added Successfully!");
        }catch (err) {
            toast.error(err?.data?.message);
            console.error(err);
        }
    }


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

    return(
        <div className="row">
            <div className="col-lg-4">
                <ImageUploader f={customer.image} onChange={file => setFile(file)}/>
            </div>
            <div className="col-lg-8 mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingText" defaultValue={customer.firstName} placeholder="jhondoe" onChange={(e) => change("firstName", e.target.value)}/>
                            <label htmlFor="floatingText">First Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingText" placeholder="jhondoe" defaultValue={customer.lastName} onChange={(e) => change("lastName", e.target.value)}/>
                            <label htmlFor="floatingText">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Email" defaultValue={customer.email} onChange={(e) => change("email", e.target.value)}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Phone" defaultValue={customer.phone !== null ? customer.phone : ''} onChange={(e) => change("phone", e.target.value)}/>
                    <label htmlFor="floatingInput">Phone</label>
                </div>
            </div>
            <div className="form-floating mt-3">
                <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={(e)=> console.log(e)}>{
                    isLoading ? <BeatLoader color="#fff" size={10} /> : "Save"
                }</button>
            </div>
        </div>

    )
}

export default CustomerProfileInfosForm;