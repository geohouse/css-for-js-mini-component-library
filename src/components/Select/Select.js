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
    <Wrapper>
      <DefaultSelect value={value} onChange={onChange}>
        {children}
      </DefaultSelect>
      <CustomSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </CustomSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  bottom: 0px;
  margin: auto;
  width: 24px;
  height: 24px;
  z-index: -1;
  /* This can be used instead of setting z index to make this element transparent to any click events, instead
  transmitting them to the underlying layer, which is the (transparent) select menu element.*/
  /* pointer-events: none; */
`;

const DefaultSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  appearance: none;
`;

const CustomSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  ${DefaultSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
    outline: 5px auto Highlight;
  }

  ${DefaultSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
