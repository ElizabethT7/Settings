import { Switch } from "@esfront/react";
import { FormControlLabel } from "@mui/material";
import { ChangeEvent } from "react";

export const SettingsControl = ({
  onChange,
  checked,
  name,
  label,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  name: string;
  label: string;
}) => {
  return (
    <FormControlLabel
      control={<Switch name={name} checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};
