import React from "react";
import "../styles/Photos.css";

const Photos = (props) => {
  if (props.photos) {
    return (
      <section className="photos-container">
          {props.photos.map((photo, index) => (
            <div className="photo-content" key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  className="photo-example"
                  alt={photo.photographer}
                />
              </a>
            </div>
          ))}
      </section>
    );
  } else {
    return null;
  }
};

export default Photos;
