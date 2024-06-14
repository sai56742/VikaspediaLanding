import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";

import SelectDropdown from "@/components/SelectDropdown";
import { mergedOptions, placeholderText } from "@/utils/constant";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { changeUrl } from "@/utils/helper";
import { object, string } from "yup";

const validationSchema = object().shape({
  search: string()
    .matches(
      /^[^/`~'.[~!@#$%^&*()_+{}|:;"<>?^/]*$/,
      "Special characters are not allowed"
    )
    .max(100)
    .required("Search field is required"),
});

export default function NewSearch() {
  const [selectedOption, setSelectedOption] = useState(mergedOptions[0].value);
  const [search, setSearch] = useState("");
  const [searchTitle, setSearchTitle] = useState("Click here to search");
  const [searchPlaceHolder, setSearchPlaceHolder] = useState(
    "Enter text to search"
  );

  const handleOptionChange = async (event) => {
    setSelectedOption(event.target.value);
    setSearch("");
    const short = mergedOptions.find(
      (option) => option.value === event.target.value
    ).ShortName;

    setSearchPlaceHolder(placeholderText?.[`${short}`]);
  };

  const handleSearch = () => {
    changeUrl(search, selectedOption);
  };

  const fetchData = async (inputValue, language) => {
    try {
      const apiUrl = `https://inputtools.google.com/request?text=${inputValue}&itc=${language}-t-i0-und&num=13&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;
      const apiResponse = await axios.get(apiUrl);

      const isRequestSuccessful =
        Array.isArray(apiResponse.data) &&
        apiResponse.data[0] === "SUCCESS" &&
        apiResponse.data[1]?.[0]?.[1]?.[0] !== "" &&
        apiResponse.data[1]?.[0]?.[1]?.[0] !== null;

      if (isRequestSuccessful) {
        return apiResponse.data[1][0][1][0];
      } else {
        return inputValue;
      }
    } catch (error) {
      console.error("Error calling API:", error);
      return inputValue;
    }
  };

  const [errors, setErrors] = useState({});

  const handleChangeSearch = (event) => {
    const { name, value } = event.target;
    setSearch(value);
    validationSchema
      .validateAt(name, { search: value })
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      })
      .catch((err) => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      });
  };

  const handleBlur = () => {
    validationSchema
      .validate({ search })
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, search: "" }));
      })
      .catch((err) => {
        setErrors((prevErrors) => ({ ...prevErrors, search: err.errors[0] }));
      });
  };

  const finalSearch = async (input) => {
    if (input) {
      let result;
      if (selectedOption) {
        const short = mergedOptions.find(
          (option) => option.value === selectedOption
        ).ShortName;
        result = await fetchData(input, short);
        setSearch(result);
      } else {
        result = await fetchData(input, "en");
        setSearch(result);
      }
    }
  };

  return (
    <Grid container justifyContent="flex-end">
      <Grid item xs={12} md={8}>
        <Paper
          elevation={3}
          component="form"
          sx={{
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <SelectDropdown
              required
              name="language"
              id="language"
              title={"Select Language"}
              value={selectedOption}
              onChange={handleOptionChange}
              options={mergedOptions}
              variant="outlined"
              size="small"
              helperText={null}
              aria-label="Select Language"
            />
          </Box>{" "}
          <Divider
            color="error"
            sx={{ height: 30, m: 0.5 }}
            orientation="vertical"
          />
          <InputBase
            sx={{ ml: 1, flex: 2 }}
            placeholder={searchPlaceHolder}
            inputlabelprops={{ "aria-label": "search vikaspedia content" }}
            label={"Search"}
            title="Search"
            name="search"
            value={search}
            onChange={handleChangeSearch}
            onBlur={handleBlur}
            autoComplete={"off"}
            size="small"
            onKeyUp={(e) => {
              if (!Boolean(errors.search)) {
                if (
                  e.code === "Space" ||
                  e.key === " " ||
                  e.target.value.endsWith(" ")
                ) {
                  if (e.code !== "Backspace" || e.code !== "Delete") {
                    finalSearch(e.target.value);
                  }
                }
                if (e.key === "Enter") {
                  handleSearch(selectedOption);
                }
              }
            }}
            fullWidth
            aria-label="search vikaspedia content"
            error={Boolean(errors.search)}
          />
          <Divider
            color="error"
            sx={{ height: 30, m: 0.5 }}
            orientation="vertical"
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            color="info"
            onClick={() => {
              handleSearch(selectedOption);
            }}
            disabled={Boolean(errors.search)}
            title={searchTitle}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {search && search.length > 0 && errors.search && (
          <Typography color={"error"} align="center">
            {errors.search}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
