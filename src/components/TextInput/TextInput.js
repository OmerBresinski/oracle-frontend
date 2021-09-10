import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import * as C from "constant";

const TextInput = ({
  rows,
  type,
  label,
  isDirty,
  isValid,
  required,
  disabled,
  onChange,
  multiline,
  fieldName,
  value = "",
  placeholder,
  autoFocus = false,
  variant = C.VARIANT.standard,
  size = C.SIZE.small,
}) => {
  useEffect(() => {
    onChange({ fieldName, value: value, isValid: validate(value) });
  }, []);

  const validate = (value) => {
    return value?.length > 0;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = validate(value);
    onChange({ fieldName, value, isValid });
  };

  return (
    <TextField
      style={{ fontSize: "8px !important", fontFamily: "Cabin, Arial !important" }}
      fullWidth
      type={type}
      size={size}
      rows={rows}
      label={label}
      value={value}
      variant={variant}
      required={required}
      disabled={disabled}
      autoFocus={autoFocus}
      multiline={multiline}
      onChange={handleChange}
      placeholder={placeholder}
      error={!disabled && isDirty && !isValid}
    />
  );
};

export default TextInput;
