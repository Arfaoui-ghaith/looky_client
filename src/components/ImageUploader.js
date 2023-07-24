import React from "react";
import "./styles/imageUploader.css"
function ImageUploader() {

    let [image, setImage] = React.useState("https://i.ibb.co/jVxWHz3/hairstyle.png");

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImage(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log(reader.result);
    };

    return (
        <React.Fragment>
            <div className="avatar-upload">
                <div className="avatar-edit">
                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(e)=>imageHandler(e)}/>
                    <label htmlFor="imageUpload"></label>
                </div>
                <div className="avatar-preview">
                    <div id="imagePreview" style={{backgroundImage: `url(${image})`}}>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ImageUploader;