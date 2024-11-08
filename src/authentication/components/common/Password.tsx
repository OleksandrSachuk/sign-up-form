import {TextField} from "@mui/material";
import React, {FC, ChangeEvent} from "react";

interface PasswordProps {
    password: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Password: FC<PasswordProps> = ({ password, onChange }) =>
    <TextField
        label="Password"
        name="password"
        value={password}
        onChange={onChange}
        required
        variant="outlined"
        color="secondary"
        type="password"
        fullWidth
 />
