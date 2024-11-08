import {SignUp} from "../common/SignUp";
import React, {ChangeEvent, FC, useCallback, useState} from "react";
import {Box, Typography} from "@mui/material";
import {Password} from "../common/Password";
import {Gender} from "../Gender";

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
