/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    height: "10px",
  },
  medium: {
    height: "20px",
  },
  large: {
    height: "40px",
  },
};

const ProgressBar = ({ value, size }) => {
  const appliedStyle = styles[size];
  return (
    <>
      <VisuallyHidden for="progress-bar">Label</VisuallyHidden>
      <Bar id="progress-bar" value="0" style={appliedStyle}></Bar>
    </>
  );
};

const Bar = styled.progress`
  background-color: red;
`;

export default ProgressBar;
