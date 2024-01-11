import React from "react";
import "../styles/Photos.css";

const Photos = (props) => {
  if (props.photos) {
    return (
      <section className="photos-container">
        <div className="">
          {props.photos.map((photo, index) => (
            <div className="col-4" key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={photo.photographer}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Photos;
