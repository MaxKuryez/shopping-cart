import styled from "@emotion/styled";
import { Select, SelectProps } from "@mui/material";
import { ComponentType } from "react";

export const Container = styled("div")({
  display: "flex",
  height: "100vh",
  marginTop: 50,
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "20px",
});

export const SelectCategory = styled(Select)({
  marginLeft: 25,
  width: 174
}) as ComponentType<SelectProps<string>>;
