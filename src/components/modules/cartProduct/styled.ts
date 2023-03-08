import {
  Avatar,
  Select,
  Typography,
  Button,
  SelectProps
} from "@mui/material";
import { styled } from "@mui/system";
import { ComponentType } from "react";

export const MediumAvatar = styled(Avatar)({
  width: 200,
  height: 190,
  borderRadius: 0,
  marginLeft: 90
});

export const MediumTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "20px",
  marginBottom: "10px",
  marginLeft: "25px"
});

export const MediumPrice = styled(Typography)({
  fontSize: "20px",
  marginBottom: "10px",
  marginLeft: "25px",
  display: "inline-flex"
});

export const StyledSelect = styled(Select)({
  marginLeft: "30px",
  marginRight: "10px"
}) as ComponentType<SelectProps<number>>;

export const StyledButton = styled(Button)({
  marginLeft: "120px",
  marginRight: "80px",
  display: "inline-flex"
});
