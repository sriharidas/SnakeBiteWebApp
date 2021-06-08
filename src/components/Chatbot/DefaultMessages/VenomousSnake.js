import React from "react";
import { venomousSnake } from "./../../../Items";
export default function VenomousSnake() {
  return (
    <div>
      {venomousSnake.map((data) => (
        <div>
          <img
            src={data.img}
            style={{ width: "100px", height: "100px" }}
            alt="indian cobra"
          />
          <p>{data.Desc}</p>
        </div>
      ))}
    </div>
  );
}
