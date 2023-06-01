import styled from "@emotion/styled/macro";
import { Menu, MenuItem, IconButton, Button, TextField } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { CustomButtonProps } from "./CustomFormElements/types";
import { StyledLabelProps } from "./types";

export const TodoListContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const StyledLi = styled(ListItem)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(243, 243, 243, 1);

    & .icon-button {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const StyledMenu = styled(Menu)`
  /* Add your Menu styles here */
  border-radius: 4px;
  padding: 8px;
`;

export const StyledMenuItem = styled(MenuItem)`
  /* Add your MenuItem styles here */
  color: #333;
  font-weight: bold;
  &:hover {
    background-color: rgba(243, 243, 243, 1);
  }
`;

export const StyledIconButton = styled(IconButton)`
  /* Add your IconButton styles here */
  color: #333;
  padding: 8px;
  visibility: hidden;
  margin-left: auto;

  ${StyledLi}:hover & {
    visibility: visible;
  }
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  flex: 1;
  margin-left: 8px;
  ${(props) => props.completed && "text-decoration: line-through;"}
`;

export const StyledDiv = styled.form`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: flex-start;
`;

export const InputWrapperSearchBar = styled.div`
  flex: 1;
  min-width: 355px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: flex-start;
`;

export const InputWrapper = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const StyledButton = styled(Button)(
  ({ variant, buttonColor, buttonText }: CustomButtonProps) => ({
    border: `1px solid ${buttonColor}`,
    backgroundColor: variant === "outlined" ? "transparent" : buttonColor,
    color: variant === "outlined" ? buttonColor : "white",
    "& svg": {
      color: variant === "contained" ? "white" : buttonColor,
    },
    padding: "14.5px 47.5px",
    fontSize: "14px",
    boxShadow: "none",
    transition: "background-color 0.3s, color 0.3s",
    textTransform: "capitalize",
    display: "flex",
    gap: "4px",
    "&:hover": {
      backgroundColor: buttonColor,
      color: "white",
      boxShadow: "none",

      border: `1px solid ${buttonColor}`,
      "& svg": {
        color: "white",
      },
    },
  })
);

export const StyledInput = styled(TextField)`
  margin-bottom: 10px;
  width: 100%;
  background-color: white;
`;
