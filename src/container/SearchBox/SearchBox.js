"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";

import { SearchSuggestionData } from "./SearchSuggestionData";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tab,
  Tabs,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Person3Icon from "@mui/icons-material/Person3";

import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SearchBox = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSettingOpen = () => {
    setOpenSetting(true);
  };

  const handleSettingClose = () => {
    setOpenSetting(false);
  };
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event, newValue) => {
    setSearchValue(newValue);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleLanguageClick = (language) => {
    setSelectedLanguages((prevSelectedLanguages) => [
      ...prevSelectedLanguages,
      language,
    ]);
    setLanguages((prevLanguages) =>
      prevLanguages.filter((lang) => lang.id !== language.id)
    );
  };

  const handleDeleteChip = (language) => {
    setSelectedLanguages((prevSelectedLanguages) =>
      prevSelectedLanguages.filter((lang) => lang.id !== language.id)
    );
    setLanguages((prevLanguages) => [...prevLanguages, language]);
  };

  const [languages, setLanguages] = useState([
    { id: 1, name: "অসমীয়া" },
    { id: 2, name: "বাংলা" },
    { id: 3, name: "बोडो" },
    { id: 4, name: "डोगरी" },
    { id: 5, name: "English" },
    { id: 6, name: "ગુજરાતી" },
    { id: 7, name: "हिन्दी" },
    { id: 8, name: "ಕನ್ನಡ" },
    { id: 9, name: "كأشُر" },
    { id: 10, name: "कोंकणी" },
    { id: 11, name: "मैथिली" },
    { id: 12, name: "മലയാളം" },
    { id: 13, name: "মনিপুরি" },
    { id: 14, name: "मराठी" },
    { id: 15, name: "नेपाली" },
    { id: 16, name: "ଓଡିଆ" },
    { id: 17, name: "ਪੰਜਾਬੀ" },
    { id: 18, name: "संस्कृतम्" },
    { id: 19, name: "ᱥᱟᱱᱛᱟᱞᱤ" },
    { id: 20, name: "सिंधी" },
    { id: 21, name: "தமிழ்" },
    { id: 22, name: "తెలుగు" },
    { id: 23, name: "اردو" },
  ]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [sectors, setSectors] = useState([
    { id: 1, name: "Agriculture" },
    { id: 2, name: "Aspirational District" },
    { id: 3, name: "e-Governance" },
    { id: 4, name: "Education" },
    { id: 5, name: "Energy" },
    { id: 6, name: "Health" },
    { id: 7, name: "Schemes" },
    { id: 8, name: "Social Welfare" },
  ]);

  const handleSectorClick = (sector) => {
    setSelectedSectors((prevSelectedSectors) => [
      ...prevSelectedSectors,
      sector,
    ]);
    setSectors((prevSectors) => prevSectors.filter((s) => s.id !== sector.id));
  };

  const handleDeleteSectorChip = (sectorToDelete) => {
    setSelectedSectors((prevSelectedSectors) =>
      prevSelectedSectors.filter((sector) => sector.id !== sectorToDelete.id)
    );
    setSectors((prevSectors) => [...prevSectors, sectorToDelete]);
  };

  const [selectedMicrosites, setSelectedMicrosites] = useState([]);
  const [microsites, setMicrosites] = useState([
    { id: 1, name: "Cdac" },
    { id: 2, name: "Test1" },
    { id: 3, name: "Test2" },
    { id: 4, name: "Test3" },
    { id: 5, name: "Test4" },
    { id: 6, name: "Test5" },
    { id: 7, name: "Test6" },
    { id: 8, name: "Test7" },
  ]);
  const handleMicrositeClick = (microsite) => {
    setSelectedMicrosites((prevSelectedMicrosites) => [
      ...prevSelectedMicrosites,
      microsite,
    ]);
    setMicrosites((prevMicrosites) =>
      prevMicrosites.filter((m) => m.id !== microsite.id)
    );
  };

  // Function to handle removing a microsite from the selected list
  const handleDeleteMicrositeChip = (micrositeToDelete) => {
    setSelectedMicrosites((prevSelectedMicrosites) =>
      prevSelectedMicrosites.filter((m) => m.id !== micrositeToDelete.id)
    );
    setMicrosites((prevMicrosites) => [...prevMicrosites, micrositeToDelete]);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems={"center"}
      spacing={2}
      p={2}
    >
      <Grid item xs={12} sm={2} md={2} textAlign="center">
        {" "}
        <img
          style={{
            width: "var(--l-width)",
            maxWidth: "100px",
            minWidth: "40px",
            height: "auto",
          }}
          src="./appstore/vikaspedialogos/newLogo.png"
          alt="Logo"
        />
      </Grid>
      <Grid item xs={12} sm={7} md={6}>
        <Autocomplete
          freeSolo
          value={searchValue}
          onChange={handleSearchChange}
          options={SearchSuggestionData.flatMap((section) => section.data)}
          groupBy={(option) => {
            const section = SearchSuggestionData.find((section) =>
              section.data.includes(option)
            );
            return section ? section.category : "";
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              variant="outlined"
              fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    <SearchIcon sx={{ marginRight: 1 }} />
                    <IconButton onClick={handleDialogOpen}>
                      <FilterListIcon />
                    </IconButton>
                  </>
                ),
                sx: { borderRadius: "30px" },
              }}
            />
          )}
        />

        {/* <Grid container mt={0.2} spacing={2} justifyContent="center">
          <Grid item xs={2}>
            <Typography variant="subtitle2">Languages :</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle2">hello</Typography>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Tooltip title="Login">
            <IconButton>
              <Person3Icon sx={{ fontSize: 35 }} />
            </IconButton>
          </Tooltip>

          <IconButton onClick={handleSettingOpen} size="large">
            <SettingsIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <IconButton size="large">
            <Badge badgeContent={10} color="primary">
              <NotificationsActiveIcon sx={{ fontSize: 35 }} />
            </Badge>
          </IconButton>
        </Box>
      </Grid>

      <Dialog
        fullScreen={fullScreen}
        open={openSetting}
        onClose={handleSettingClose}
        aria-labelledby="settings"
      >
        <DialogTitle id="settings ">{"My Preferences"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSettingClose}>
            Disagree
          </Button>
          <Button onClick={handleSettingClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        // onClose={handleDialogClose}
        aria-labelledby="searchFilter"
      >
        <DialogTitle
          id="searchFilter"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {"Search Filter"}
          <IconButton
            onClick={handleDialogClose}
            sx={{ ml: "auto", color: "red" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} md={3}>
                <Tabs
                  // orientation="vertical"
                  orientation={isSmallScreen ? "horizontal" : "vertical"}
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  // sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  <Tab label="Languages" {...a11yProps(0)} />
                  <Tab label="Sectors" {...a11yProps(1)} />
                  <Tab label="Microsites" {...a11yProps(2)} />
                </Tabs>
              </Grid>
              <Grid item xs={12} sm={9} md={9}>
                <TabPanel value={value} index={0}>
                  <Grid container spacing={2}>
                    {selectedLanguages.length > 0 && (
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          Selected Languages:
                        </Typography>
                        {selectedLanguages.map((language) => (
                          <Chip
                            key={language.id}
                            label={language.name}
                            onDelete={() => handleDeleteChip(language)}
                            sx={{ mr: 1, mt: 1 }}
                          />
                        ))}
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Typography variant="body2">Languages:</Typography>
                      <Grid container spacing={1}>
                        {languages.map((language) => (
                          <Grid
                            item
                            xs={isSmallScreen ? 6 : 4}
                            key={language.id}
                          >
                            <Chip
                              sx={{
                                backgroundColor: "#e0f2f1",
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                              onClick={() => handleLanguageClick(language)}
                              icon={
                                <span
                                  style={{
                                    backgroundColor: "#80cbc4",
                                    color: "#004d40",
                                    // fontSize: "15px",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  {language.name.charAt(0).toUpperCase()}
                                </span>
                              }
                              label={<Typography>{language.name}</Typography>}
                            />
                            {/* <Chip
                              sx={{
                                backgroundColor: "#e0f2f1",
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                              onClick={() => handleLanguageClick(language)}
                              avatar={
                                <Avatar
                                  style={{
                                    backgroundColor: "#80cbc4",
                                    color: "#fff",
                                  }}
                                >
                                  <Typography>
                                    {language.name.charAt(0).toUpperCase()}
                                  </Typography>
                                </Avatar>
                              }
                              label={<Typography>{language.name}</Typography>}
                            /> */}
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid
                    container
                    spacing={2}
                    // sx={{ maxHeight: 300, overflowY: "auto" }}
                  >
                    {selectedSectors.length > 0 && (
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          Selected Sectors:
                        </Typography>
                        {selectedSectors.map((sector) => (
                          <Chip
                            key={sector.id}
                            label={sector.name}
                            onDelete={() => handleDeleteSectorChip(sector)}
                            sx={{ mr: 1, mt: 1 }}
                          />
                        ))}
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Typography variant="body2">Sectors:</Typography>
                      <Grid container spacing={2}>
                        {sectors.map((sector) => (
                          <Grid item xs={4} key={sector.id}>
                            <Chip
                              label={sector.name}
                              onClick={() => handleSectorClick(sector)}
                              sx={{ width: "100%" }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid container spacing={2}>
                    {selectedMicrosites.length > 0 && (
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          Selected Microsites:
                        </Typography>
                        {selectedMicrosites.map((microsite) => (
                          <Chip
                            key={microsite.id}
                            label={microsite.name}
                            onDelete={() =>
                              handleDeleteMicrositeChip(microsite)
                            }
                            sx={{ mr: 1, mt: 1 }}
                          />
                        ))}
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Typography variant="body2">Microsites:</Typography>
                      <Grid container spacing={2}>
                        {microsites.map((microsite) => (
                          <Grid item xs={4} key={microsite.id}>
                            <Chip
                              label={microsite.name}
                              onClick={() => handleMicrositeClick(microsite)}
                              sx={{ width: "100%" }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default SearchBox;
