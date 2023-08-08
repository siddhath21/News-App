import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageurl, newsurl,author,date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'91%',zIndex:'1'}}>{source}
      </span>

          <img src={imageurl?imageurl:"https://content.api.news/v3/images/bin/bfdd99638cc12c6172fe6118f1243946"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small> </p>

            <a rel="noreferrer" 
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems;
