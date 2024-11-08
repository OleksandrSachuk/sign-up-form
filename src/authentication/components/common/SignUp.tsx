import {TextField} from "@mui/material";
import React, {FC, ChangeEvent} from "react";

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
