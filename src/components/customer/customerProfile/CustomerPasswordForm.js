import ImageUploader from "../../ImageUploader";
import React from "react";
import {useSelector} from "react-redux";
import {useAddMemberMutation} from "../../../redux/slices/teamApiSlice";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";

function CustomerPasswordForm(){

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
            <div className="col-lg-8 mt-3 mx-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Current" onChange={(e) => change("title", e.target.value)}/>
                    <label htmlFor="floatingInput">Current Password</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="New" onChange={(e) => change("title", e.target.value)}/>
                    <label htmlFor="floatingInput">New Password</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Confirm" onChange={(e) => change("title", e.target.value)}/>
                    <label htmlFor="floatingInput">Confirm Password</label>
                </div>
                <div className="form-floating mt-3">
                    <button type="submit" className="btn-primary py-3 w-100 mb-2" onClick={(e)=> console.log(e)}>{
                        isLoading ? <BeatLoader color="#fff" size={10} /> : "Save"
                    }</button>
                </div>
            </div>
        </div>

    )
}

export default CustomerPasswordForm;