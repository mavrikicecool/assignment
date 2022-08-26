import React from "react";
import { PERIOD, STRING_CONSTANTS } from "../../../common/constants";
import "./periodSelector.css";

function PeriodSelector({ onChange, value }) {
  return (
    <div className="period-container">
      <div className="period-selector">
        <div
          onClick={() => onChange(PERIOD.THREE_MONTHS)}
          className={`period-item ${
            value === PERIOD.THREE_MONTHS ? "selected" : ""
          }`}
        >
          {STRING_CONSTANTS.LAST_3_MONTHS}
        </div>
        <div
          onClick={() => onChange(PERIOD.ALL)}
          className={`period-item ${value === PERIOD.ALL ? "selected" : ""}`}
        >
          {STRING_CONSTANTS.ALL}
        </div>
      </div>
    </div>
  );
}

export default PeriodSelector;
