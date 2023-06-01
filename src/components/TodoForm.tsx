import { useDispatch } from "react-redux";
import CustomButton from "./CustomFormElements/CustomButton";
import Input from "./CustomFormElements/Input";
import { addTodo } from "../store/todosSlice";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledDiv, InputWrapper } from "./Styles";
import { FormData } from "../store/types";

const schema = yup.object().shape({
  textValue: yup
    .string()
    .min(2, "At least 2 characters")
    .required("This field is required"),
});

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(addTodo(data.textValue));
  };

  return (
    <StyledDiv>
      <InputWrapper>
        <Controller
          name="textValue"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label="Your task"
              variant="outlined"
              type="text"
              value={value}
              error={error?.message}
              onChange={onChange}
            />
          )}
        />
      </InputWrapper>

      <CustomButton
        variant="outlined"
        onClick={handleSubmit(onSubmit)}
        color="primary"
        type="submit"
      >
        Add
      </CustomButton>
    </StyledDiv>
  );
};

export default TodoForm;
