import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";

const SelectDropdown = (props) => {
  const {
    options,
    infotext,
    handlechange,
    label,
    value,
    variant,
    name,
    error,
    helperText,
    id,
    required,
    disabled,
  } = props;

  return (
    <Box>
      <TextField
        select
        id={id || name}
        name={name}
        label={label}
        variant={variant}
        fullWidth
        value={value || ""}
        onChange={handlechange}
        InputProps={{
          endAdornment: infotext ? (
            <Box mr={3}>
              <Tooltip title={infotext}>
                <InfoIcon color="inherit" />
              </Tooltip>
            </Box>
          ) : null,
        }}
        error={error || false}
        required={required || false}
        disabled={disabled || false}
        {...props}
      >
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ maxWidth: 400 }}
              title={option?.label}
            >
              <Typography p={0.5} noWrap>
                {option.label}
              </Typography>
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
};

export default SelectDropdown;
