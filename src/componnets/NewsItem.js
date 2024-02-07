import React from "react";

const NewsItem =(props)=>{
    let { title, description, imageUrl, newsUrl, publishedAt, author ,Key} =props;
    return (
      <div className="mt-3" key ={Key}>
        <div className="card" >
          <img
            src={!imageUrl ? "blank-image.png" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="/" className="btn btn-sn btn-dark">
              Read More
            </a>
          </div>
          <div className="card-footer text-body-secondary d-flex flex-column justify-content-center">
            <div className="p-1">{new Date(publishedAt).toGMTString()}</div>
            <div className="p-1">Source- {!author ? "Unkown" : author}</div>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
