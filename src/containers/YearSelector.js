import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useFormControlStyle = makeStyles({
  root: {
    minWidth: 120
  }
});

function YearSelector({ year, setYear }) {
  const formControlStyle = useFormControlStyle();
  const setYearOnChangeSelect = event => {
    setYear(event.target.value);
  };
  return (
    <FormControl classes={formControlStyle}>
      <InputLabel shrink id="year-label">
        Year
      </InputLabel>
      <Select
        labelId="year-label"
        value={year}
        onChange={setYearOnChangeSelect}
        label="Year"
      >
        <MenuItem value="all">ALL</MenuItem>
        <MenuItem value={2019}>2019</MenuItem>
        <MenuItem value={2018}>2018</MenuItem>
      </Select>
    </FormControl>
  );
}

YearSelector.propTypes = {};
YearSelector.defaultProps = {};

export default YearSelector;
