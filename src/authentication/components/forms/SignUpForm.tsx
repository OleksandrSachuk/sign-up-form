import {SignUp} from "../common/SignUp";
import React, {ChangeEvent, FC, useCallback, useState} from "react";
import {Box, Typography} from "@mui/material";
import {Password} from "../common/Password";

/**
 * `SignUpForm` Component
 *
 * The `SignUpForm` component renders a sign-up form with fields for entering a username and password.
 * It uses Material-UI components for styling and includes custom child components (`SignUp` and `Password`).
 * The form is fully controlled, meaning it manages the state of input values internally.
 *
 * ### Features
 * - Controlled inputs for `username` and `password`
 * - State management using React's `useState` hook
 * - Efficient input handling using `useCallback`
 * - Simple form layout using Material-UI's `Box` component
 *
 * ### Props
 * The `SignUpForm` component does not accept any props directly.
 *
 * ### State
 * - `formValues`: An object with the following properties:
 *   - `username` (string): The current value of the username input.
 *   - `password` (string): The current value of the password input.
 *
 * ### Methods
 * - `onChange`: Handles changes to the input fields and updates the state.
 * - `handleSubmit`: Handles the form submission logic (to be implemented).
 *
 * ### Dependencies
 * - `SignUp` component: Renders the username input field.
 * - `Password` component: Renders the password input field.
 * - `Box`, `Typography` from MUI: Used for layout and styling.
 *
 */

interface FormValues {
    username: string;
    password: string;
}

export const SignUpForm: FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        username: "",
        password: "",
    });

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target;
        console.log('name', name)
        setFormValues((prevState)=>({...prevState, [name]: value}))
    },[]);

    const handleSubmit = useCallback(()=>{},[]);

    return <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            margin: "auto",
            mt: 4,
        }}
    >
        <Typography variant="h5" align="center">
            Sign Up
        </Typography>
        <SignUp
            username={formValues?.username}
            onChange={onChange}
        />
        <Password
            password={formValues?.password}
            onChange={onChange}
        />
    </Box>
}
