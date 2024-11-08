import React, {ChangeEvent, FC} from "react";
import { TextField, MenuItem, Box } from "@mui/material";

interface GenderProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Gender: FC<GenderProps> = ({value, onChange }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: 400,
            margin: "auto",
            mt: 2
        }}>
            <TextField
                label="Gender"
                select
                value={value}
                onChange={onChange}
                variant="outlined"
                color="secondary"
                fullWidth
                required
            >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="preferNotToSay">Prefer not to say</MenuItem>
            </TextField>
        </Box>
    );
};