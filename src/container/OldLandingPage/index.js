"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BASE_URL_SEARCH,
  KEY_ACCESS_TOKEN,
  landingPageText,
  vikaspediaNames,
} from "@/utils/constant";
import { santhaliText } from "@/app/font";
import FooterGeneral from "@/components/Footer/FooterGeneral";
import { object, string } from "yup";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { red, blue, green, amber } from "@mui/material/colors";
import SelectDropdown from "@/components/SelectDropdown";

import useTruncatedAccessToken from "@/customhooks/useTruncatedAccessToken";

const validationSchema = object().shape({
  search: string()
    .matches(
      /^[^/`~'.[~!@#$%^&*()_+{}|:;"<>=?^/]*$/,
      "Special characters are not allowed"
    )
    .max(100)
    .required("Search field is required"),
});

export default function OldLandingPage() {
  const [currentName, setCurrentName] = useState(0);
  const [currentColor, setCurrentColor] = useState(red[500]);
  const [selectedOption, setSelectedOption] = useState(
    landingPageText[0].value
  );
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState(landingPageText[0]);
  const [errors, setErrors] = useState({});
  const truncatedAccessToken = useTruncatedAccessToken();

  const finalSearch = async (input) => {
    let result;
    if (input) {
      if (selectedOption) {
        const short = landingPageText.find(
          (option) => option.value === selectedOption
        ).languageShortName;
        result = await fetchData(input, short);
        if (result) {
          setSearch(result);
        }
      } else {
        result = await fetchData(input, "en");
        setSearch(result);
      }
    }
    return result || input;
  };

  const changeUrl = async (input, lang) => {
    const option = landingPageText.find((option) => option.value === lang);
    const langInput = await finalSearch(input);
    if (option) {
      const url = `${BASE_URL_SEARCH}?query=${langInput.trim()}&lang=${
        option?.languageShortName
      }`;
      const { urlSearch } = option;
      const sendUrl = urlSearch + input;

      if (urlSearch && input) {
        window.open(url, "_blank").focus();
        return;
      }
    }

    return null;
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

  const handleOptionChange = async (event) => {
    setSelectedOption(event.target.value);
    setSearch("");
    const languageObj = landingPageText.find(
      (option) => option.value === event.target.value
    );
    setSelectedLang(languageObj);
  };

  const handleSearch = () => {
    changeUrl(search, selectedOption);
  };

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

  useEffect(() => {
    const colors = [red[500], blue[500], amber[500], green[900]];

    let intervalId = null;

    const updateState = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const nextName = (currentName + 1) % vikaspediaNames.length;
      setCurrentColor(randomColor);
      setCurrentName(nextName);
    };

    intervalId = setInterval(updateState, Math.min(500, 800));
    return () => clearInterval(intervalId);
  }, [currentColor, currentName]);

  const handleIDN_URL = async (url) => {
    let final_url = url;
    if (typeof window !== "undefined") {
      if (localStorage.getItem(KEY_ACCESS_TOKEN)) {
        const newToken = localStorage.getItem(KEY_ACCESS_TOKEN).trim();
        if (
          typeof newToken !== undefined &&
          newToken !== "undefined" &&
          newToken !== "null" &&
          newToken !== null &&
          newToken !== ""
        ) {
          final_url = final_url + `?ref=${newToken}`;
          window.open(final_url, "_blank").focus();
        } else {
          window.open(final_url, "_blank").focus();
        }
      } else {
        window.open(final_url, "_blank").focus();
      }
      return final_url;
    }
  };

  return (
    <Box>
      <Box m={1}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={12} sm={4} md={3}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ margin: "auto" }}
                  >
                    <img
                      srcSet={"/appstore/vikaspedialogos/newLogo.png"}
                      src={"/appstore/vikaspedialogos/newLogo.png"}
                      alt={selectedLang?.vikaspediaLogoText}
                      title={selectedLang?.vikaspediaLogoText}
                      style={{
                        width: "var(--l-width)",
                        maxWidth: "100px",
                        minWidth: "40px",
                        height: "auto",
                      }}
                    />
                  </Box>
                  <Typography color={currentColor} align="center" variant="h6">
                    <strong>{vikaspediaNames[currentName]}</strong>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
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
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <SelectDropdown
                            required
                            name="language"
                            id="language"
                            title={selectedLang?.selectLanguageText}
                            value={selectedOption}
                            onChange={handleOptionChange}
                            options={landingPageText}
                            variant="outlined"
                            size="small"
                            helperText={null}
                            aria-label={selectedLang?.selectLanguageText}
                          />
                        </Box>{" "}
                        <Divider
                          color="error"
                          sx={{ height: 30, m: 0.5 }}
                          orientation="vertical"
                        />
                        <InputBase
                          sx={{ ml: 1, flex: 2 }}
                          placeholder={selectedLang?.searchPlaceholderText}
                          inputlabelprops={{
                            "aria-label": selectedLang?.searchText,
                          }}
                          label={"Search"}
                          title={selectedLang?.searchText}
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
                                if (
                                  e.code !== "Backspace" ||
                                  e.code !== "Delete"
                                ) {
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
                          title={selectedLang?.searchButton}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Paper>
                      {search && search.length > 0 && errors.search && (
                        <Typography color={"error"} align="center" mt={1}>
                          {selectedLang?.searchErrorText || errors.search}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography align={"center"} variant="h6" mt={1} component={"h1"}>
                {selectedLang?.label !== "Select language" &&
                  selectedLang?.aboutPortal1Text}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  maxWidth: "100%",
                }}
              >
                <video
                  width="100%"
                  height="300"
                  controls="controls"
                  poster="/appstore/vikaspedialogos/vikaspediaLogo.png"
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src="https://static.vikaspedia.in/mediastorage/video/landingPage.mp4"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              container
              spacing={0.5}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Grid item xs={12}>
                <Typography align="center">
                  {selectedLang?.vikaspediaOfferedIn || "Vikaspedia offered in"}
                </Typography>
              </Grid>
              {landingPageText.map((data, index) => {
                if (index > 0) {
                  return (
                    <Grid item xs={3} sm md lg key={`langidns-${index}`}>
                      <Button
                        align="center"
                        title={data?.label}
                        variant="contained"
                        color={
                          selectedLang?.languageShortName ===
                          data.languageShortName
                            ? selectedLang?.label !== "Select language"
                              ? "primary"
                              : "success"
                            : "success"
                        }
                        size="large"
                        disableElevation
                        focusRipple
                        fullWidth
                        className={index === 18 ? santhaliText.className : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          handleIDN_URL(data?.urlIdn);
                        }}
                        sx={{ textTransform: "none" }}
                      >
                        {data.label}
                      </Button>
                    </Grid>
                  );
                }
              })}
              <Grid item xs={12}>
                <Divider>
                  <Typography align="center" mt={1}>
                    {selectedLang?.sectorsText || "Sectors"}
                  </Typography>
                </Divider>
              </Grid>
              <Grid
                item
                xs={12}
                container
                spacing={0.5}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
              >
                {selectedLang?.sectors.map((data, index) => {
                  return (
                    <Grid item xs={3} sm md lg key={`langidns-${index}`}>
                      <Button
                        align="center"
                        title={data?.label}
                        variant="contained"
                        color="primary"
                        size="large"
                        focusRipple
                        className={index === 18 ? santhaliText.className : ""}
                        component={Link}
                        href={data?.url}
                        underline="none"
                        target="_blank"
                        sx={{ textTransform: "none" }}
                      >
                        <data.icon />
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <FooterGeneral selectedLang={selectedLang} />
    </Box>
  );
}
