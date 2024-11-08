import React, {ChangeEvent, FC} from "react";
import { TextField, MenuItem, Box } from "@mui/material";

/**
 * Gender Component
 *
 * This is a reusable React functional component that renders a gender selection
 * using MUI's `TextField` component. It allows users to select their gender from a dropdown list.
 * The component is controlled, meaning it relies on external state management
 * for the value and onChange handler.
 *
 * Props:
 * - `value`: The current value of the gender field.
 * - `onChange`: Callback function to handle changes in the field value.
 *
 * @component
 * @param {GenderProps} props - The props for the `Gender` component.
 * @param {string} props.value - The current value of the gender field.
 * @param {(event: ChangeEvent<HTMLInputElement>) => void} props.onChange - Handler function for field changes.
 */

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