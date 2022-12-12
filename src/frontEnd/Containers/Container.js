import React from "react";
import { Five, Four, One, Three, Two } from "../components";
import { Transitions } from "../shared/Transitions";

const Container = () => {
  return (
    <Transitions>
      <div className="d-flex flex-column align-items-center">
        <h3 className="my-5" style={{ color: "green" }}>
          Hello World...!
        </h3>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center mx-5">
            <One />
            <hr className="my-5" />
            <Two />
            <hr className="my-5" />
            <Three />
          </div>
          <div className="d-flex flex-column align-items-center mx-5">
            <Four />
            <hr className="my-5" />
            <Five />
            <hr className="my-5" />
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default Container;
