import { Grid } from '@material-ui/core';
import { FormikTextField } from 'components';
import React from 'react';

const TaskForm = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <FormikTextField
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Title"
          id="title"
          name="title"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <FormikTextField
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Description"
          id="description"
          name="description"
          multiline
          rows={3}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <FormikTextField
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Priority"
          id="priority"
          name="priority"
          required
        />
      </Grid>
    </Grid>
  );
};

export default TaskForm;
