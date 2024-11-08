import {SignUp} from "../common/SignUp";
import React, {ChangeEvent, FC, useCallback, useState} from "react";
import {Box, Typography} from "@mui/material";
import {Password} from "../common/Password";

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
