import {TextField} from "@mui/material";
import React, {FC, ChangeEvent} from "react";

/**
 * `SignUp` Component
 *
 * A reusable input field component for capturing a username. This component uses
 * MUI's `TextField` and supports controlled input, allowing the parent component
 * to manage the value and handle changes.
 *
 * Props:
 * - `password`: The current value of the password input field.
 * - `onChange`: Callback function to handle changes in the input value.
 *
 * @component
 * @param {SignUpProps} props - The props for the `SignUp` component.
 * @param {string} props.username - The current value of the username input.
 * @param {(event: ChangeEvent<HTMLInputElement>) => void} props.onChange - Handler function for input changes.
 */

interface SignUpProps {
    username: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SignUp: FC<SignUpProps> = ({ username, onChange }) =>
    <TextField
        label="Username"
        name="username"
        value={username}
        onChange={onChange}
        required
        variant="outlined"
        color="secondary"
        type="text"
        fullWidth
 />
