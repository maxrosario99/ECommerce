import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller} from "react-hook-form"


function FormInput({ name, label, required }) {
    const { control, register } = useFormContext();
    const isError = false;
  
    return (
      <Grid item xs={12} sm={6}>
        <Controller
          control={control}
          name={name}
          render={() => (
            <TextField
              fullWidth
              label={label}
              required={required}
              {...register(name)}
            />
          )}
          error={isError}
        />
      </Grid>
    );
  }

export default FormInput