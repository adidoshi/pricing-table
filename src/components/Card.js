import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.subscription}
          </h5>
          <h6 className="card-price text-center">
            {props.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.includes.map((element, key) => {
              return (
                <li key={key} className = {(element.flag ? "" : "text-muted")} style={{fontWeight: element.dark}}>
                  <span className="fa-li">
                    <i
                      className={
                        "fa " + (element.flag ? "fa-check" : "fa-times")
                      }
                    ></i>
                  </span>
                  {element.include}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>
    </>
  );
}
