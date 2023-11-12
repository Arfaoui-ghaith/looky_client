import React from "react";
import "./styles/imageUploader.css";
function ImageUploader({
  f = "https://i.ibb.co/jVxWHz3/hairstyle.png",
  onChange,
}) {
  let [image, setImage] = React.useState(f);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    const file = new FormData();
    file.append("image", e.target.files[0]);
    onChange(file);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <React.Fragment>
      <div className="avatar-upload">
        <div className="avatar-edit">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => imageHandler(e)}
          />
          <label htmlFor="imageUpload">
            <i
              className="fa fa-pen"
              style={{
                fontFamily: "Font Awesome 5 Free",
                color: "#EB1616",
                position: "absolute",
                top: "10px",
                left: "0",
                right: "0",
                textAlign: "center",
                margin: "auto",
              }}
            />
          </label>
        </div>
        <div className="avatar-preview">
          <div id="imagePreview" style={{ backgroundImage: `url(${image})` }} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ImageUploader;
