import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ width: width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} style={{ display: "inline-block" }}></Icon>
      <TextInput placeholder={placeholder}></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: none;
  border-bottom: 1px solid ${COLORS.black};
`;

const TextInput = styled.input.attrs((props) => ({
  type: "text",
  id: "input-text",
  placeholder: props.placeholder,
}))`
  border: none;
`;

export default IconInput;
