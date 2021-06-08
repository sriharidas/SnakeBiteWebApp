import React from "react";
import { SnakeBiteSymptoms } from "./../../../Items";

export default function Symptoms() {
  return (
    <div>
      <ul style={{ margin: "8px 0" }}>
        {SnakeBiteSymptoms.map((symptom) => (
          <li style={{ margin: "8px 0" }} key={symptom}>
            {symptom}
          </li>
        ))}
      </ul>
    </div>
  );
}
