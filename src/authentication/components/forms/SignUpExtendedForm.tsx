import {SignUp} from "../common/SignUp";
import React, {ChangeEvent, FC, useCallback, useState} from "react";
import {Box, Typography} from "@mui/material";
import {Password} from "../common/Password";
import {Gender} from "../Gender";

/**
* `SignUpExtendedForm` Component
*
* The `SignUpExtendedForm` component renders an extended sign-up form with fields for entering a username, password, and gender selection.
* It uses Material-UI components for styling and includes custom child components (`SignUp`, `Password`, and `Gender`).
* The form is fully controlled, meaning it manages the state of input values internally.
*
* ### Features
* - Controlled inputs for `username`, `password`, and `gender`
* - State management using React's `useState` hook
* - Efficient input handling using `useCallback` for optimized performance
* - Simple and responsive form layout using Material-UI's `Box` component
*
* ### State
* - `formValues`: An object with the following properties:
 *  - `username` (string): The current value of the username input.
*   - `password` (string): The current value of the password input.
*   - `gender` (string): The current selected value of the gender input.
*
* ### Methods
 * - `onChange`: Handles changes to the input fields and updates the state.
 * - `handleSubmit`: Handles the form submission logic (to be implemented).
*
* ### Dependencies
* - `SignUp` component: Renders the username input field.
* - `Password` component: Renders the password input field.
* - `Gender` component: Renders the gender selection input field.
* - `Box`, `Typography` from MUI: Used for layout and styling.
*
*/

interface FormValues {
    username: string;
    password: string;
    gender: string;
}

export const SignUpExtendedForm: FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        username: "",
        password: "",
        gender: "",
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
            Sign Up Extended
        </Typography>
        <SignUp
            username={formValues?.username}
            onChange={onChange}
        />
        <Password
            password={formValues?.password}
            onChange={onChange}
        />
        <Gender
            value={formValues?.gender}
            onChange={onChange}
        />
    </Box>
}
