import { CustomButtonProps } from "./types";
import { StyledButton } from "../Styles";

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  buttonColor = "rgba(93, 203, 66, 1)",
  children,
  buttonTextColor,
  onClick,
  buttonText,
}) => {
  return (
    <StyledButton
      sx={{ borderRadius: "5px" }}
      variant={variant}
      buttonColor={buttonColor}
      onClick={onClick}
      buttonText={buttonText}
      buttonTextColor={buttonTextColor}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
