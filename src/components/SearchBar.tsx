import { useDispatch } from "react-redux";
import { setSearchQuery, setFilter } from "../store/todosSlice";
import CustomButton from "./CustomFormElements/CustomButton";
import Input from "./CustomFormElements/Input";
import { useSelector } from "react-redux";
import { RootState } from "../store/types";
import { SearchBarContainer, InputWrapperSearchBar } from "./Styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { FILTER_VARIANTS } from "./types";

const SearchBar: React.FC = () => {
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchQuery = event.target.value;
    dispatch(setSearchQuery(searchQuery));
  };

  const handleAllClick = () => {
    dispatch(setFilter("All"));
  };

  const handleDoneClick = () => {
    dispatch(setFilter("Done"));
  };

  return (
    <SearchBarContainer>
      <InputWrapperSearchBar>
        <Input
          label="Search by text..."
          variant="outlined"
          name="search"
          type="text"
          onChange={handleSearchInputChange}
        />
      </InputWrapperSearchBar>

      <CustomButton
        variant={filter === FILTER_VARIANTS.ALL ? "contained" : "outlined"}
        color="primary"
        onClick={handleAllClick}
      >
        All
      </CustomButton>
      <CustomButton
        variant={filter === FILTER_VARIANTS.DONE ? "contained" : "outlined"}
        color="primary"
        buttonTextColor="black"
        buttonText={FILTER_VARIANTS.DONE}
        onClick={handleDoneClick}
      >
        <CheckCircleOutlineIcon />
        Done
      </CustomButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
