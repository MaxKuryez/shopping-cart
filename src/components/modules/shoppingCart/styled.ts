import {
  Typography,
  Button
} from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)({
  marginLeft: "120px",
  marginRight: "80px",
  display: "inline-flex"
});

export const TotalPrice = styled(Typography)({
  margin: "30px 0 30px 110px",
  display: "inline-flex"
}) as typeof Typography;
