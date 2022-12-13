import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(value);
  console.log(children);
  console.log(displayedValue);
  return (
    <>
      <CustomSelect>
        <DefaultSelect value={value} onChange={onChange}>
          {children}
        </DefaultSelect>
        {displayedValue}
        <Icon
          id="chevron-down"
          style={{ display: "inline-block", padding: "18px 16px" }}
        />
      </CustomSelect>
    </>
  );
};

const DefaultSelect = styled.select`
  /* opacity: 0; */
  position: absolute;
  top: 0;
  left: 0;
`;

const CustomSelect = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 16px 12px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
`;

export default Select;
