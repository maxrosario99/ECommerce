import React from 'react'
function FormInput({ name, label, required }) {
    const { control } = useFormContext();
    const isError = false;
  
    return (
      <Grid item xs={12} sm={6}>
        <Controller
          as={TextField}
          name={name}
          control={control}
          label={label}
          fullWidth
          required={required}
          error={isError}
        />
      </Grid>
    );
  }

export default FormInput