// ImageUpload.js
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./ImageUpload.css"; // You can style it later

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (acceptedFiles) => {
    // Assuming only one image is selected, you can modify this for multiple images
    const selectedImage = acceptedFiles[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    
    <div className="image-upload-container">
      <h2>Profile Picture</h2>
      <div className="image-preview">
        {image ? (
          <img src={image} alt="Profile" />
        ) : (
          <p>No image selected</p>
        )}
      </div>
      <Dropzone
        onDrop={handleImageUpload}
        accept="image/*"
        multiple={false}
        maxFiles={1}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag & drop a profile picture or click to select one</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ImageUpload;
