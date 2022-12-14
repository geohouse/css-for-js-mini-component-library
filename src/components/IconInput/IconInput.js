import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--size": size === "small" ? "1px" : "2px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon
        id={icon}
        style={{ position: "absolute" }}
        size={size === "small" ? 16 : 24}
      ></Icon>
      <TextInput
        placeholder={placeholder}
        style={{
          "--size": size === "small" ? "14px" : "18px",
          "--width": width + "px",
        }}
      ></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border: none;
  border-bottom: var(--size) solid ${COLORS.black};
  width: var(--width);
  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline: 5px auto Highlight;
    /* Not currently working */
    outline-offset: 2px;
  }
`;

const TextInput = styled.input.attrs((props) => ({
  type: "text",
  id: "input-text",
  placeholder: props.placeholder,
}))`
  border: none;
  font-size: var(--size);
  width: var(--width);
  padding-left: calc(var(--size) + 12px);
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  color: ${COLORS.gray700};
  font-weight: 700;
  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
