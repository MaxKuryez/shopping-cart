import styled from "@emotion/styled";
import {
  DialogContent,
  FormControl,
  MenuItem,
  Typography,
  Rating,
} from "@mui/material";
import { Magnifier } from "react-image-magnifiers";

export const StyledDialogContent = styled(DialogContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "400px",
  minHeight: "200px",
});

export const StyledTypography = styled(Typography)({
  marginTop: "10px",
});

export const StyledFormControl = styled(FormControl)({
  width: "100px",
  marginLeft: "50px",
  marginTop: "10px",
});

export const FlexContainer = styled("div")({
  display: "flex"
});

export const RatingStyled = styled(Rating)({
  display: "inherit",
  marginTop: "15px"
});

export const MenuItemStyled = styled(MenuItem)({
  justifyContent: "center"
});

export const MagnifierStyled = styled(Magnifier)`
width: 300px;
height: 300px;
object-fit: contain;
cursor: zoom-in;
div {
  width: 300px;
  height: 300px;
  object-fit: contain;
  img {
    object-fit: contain;
    height: 300px;
  }
  div {
    img {
      height: auto;
    }
  }
}
`;
