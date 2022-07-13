import React from "react";

export const Tile = ({ countDownSeconds }) => {

  return (
    <div className="tile">
      <div className='timer'>0</div>
      <div className="progress-bar__container">
        <div className='progress-bar' />
      </div>
      <div>Lorem Ipsum</div>
    </div>
  );
};
