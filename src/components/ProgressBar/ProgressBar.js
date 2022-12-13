/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    height: "8px",
  },
  medium: {
    height: "12px",
  },
  large: {
    height: "24px",
  },
};

if (!styles) {
  throw new Error(`Unknown size passed to ProgressBar`);
}

const ProgressBar = ({ value, size }) => {
  const appliedStyle = styles[size];
  appliedStyle["--width"] = value + "%";
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarHolder
        style={
          size === "large"
            ? { "border-radius": "8px", padding: "4px" }
            : { "border-radius": "4px" }
        }
      >
        <BarWrapper>
          <Bar style={appliedStyle} />
        </BarWrapper>
      </BarHolder>
    </div>
  );
};

const Bar = styled.div`
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const BarHolder = styled.div`
  width: 100;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  /* Need hidden here to round the right side of the progress bar as it gets very close to 100%.*/
  overflow: hidden;
`;

// Provides the rounded right side to the large bar that has padding (otherwise the right side
// stays square until it goes outside of the entire parent (including its padding))
const BarWrapper = styled.div`
  width: 100;
  border-radius: 4px;
  /* Need hidden here to round the right side of the progress bar as it gets very close to 100%.*/
  overflow: hidden;
`;

// const Bar = styled.progress`
//   background-color: ${COLORS.transparentGray15};

//   border: none;
//   ::-moz-progress-bar {
//     background-color: ${COLORS.primary};
//     border-radius: 4px 0 0 4px;
//   }
//   ::-webkit-progress-inner-element {
//     box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
//   }
// `;

export default ProgressBar;
