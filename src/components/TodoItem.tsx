import { useState } from "react";
import {
  Checkbox,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  StyledLi,
  StyledLabel,
  StyledIconButton,
  StyledMenu,
  StyledMenuItem,
} from "./Styles";
import { TodoItemProps } from "../store/types";

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleToggleComplete,
  handleRemoveTodo,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = () => {
    setShowConfirmDialog(true);
    handleClose();
  };

  const handleConfirmDelete = () => {
    handleRemoveTodo(todo.id);
    setShowConfirmDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <StyledLi>
      <Checkbox
        checked={todo.isComplete}
        onChange={() => handleToggleComplete(todo.id)}
      />
      <StyledLabel completed={todo.isComplete}>{todo.text}</StyledLabel>
      <StyledIconButton onClick={handleClick}>
        <MoreVertIcon />
      </StyledIconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleRemove}>
          <DeleteIcon sx={{ marginRight: 1 }} />
          Remove
        </StyledMenuItem>
      </StyledMenu>
      <Dialog open={showConfirmDialog} onClose={handleCancelDelete}>
        <DialogTitle>Are you sure you want to delete it?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </StyledLi>
  );
};

export default TodoItem;
