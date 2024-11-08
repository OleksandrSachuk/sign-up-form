import {TextField} from "@mui/material";
import React, {FC, ChangeEvent} from "react";

/**
 * `Password` Component
 *
 * This component renders a password input field using Material-UI's `TextField`. It is a controlled
 * component, meaning its value is controlled by the parent component through the `password` prop.
 *
 * Props:
 * - `password`: The current value of the password input field.
 * - `onChange`: Callback function to handle changes in the input value.
 *
 * @component
 * @param {string} password - The current value of the password input field.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} onChange - Callback function to handle input changes.
 * @returns {React.ReactElement} A Material-UI TextField component for password input.
 */

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
