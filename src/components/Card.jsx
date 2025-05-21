import React from "react";

const Card = ({ name, icon }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {icon}
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{name}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
