import React, {Component} from 'react';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';


const MaritalstatusOptions=[
  { value: 'Single', label: 'Single' },
  { value: 'Divorced', label: 'Divorced' },
  { value: 'Widow', label: 'Widow' }
]

export default function BasicDetails() {
  return (
    <React.Fragment>
   
      <Typography variant="h6" gutterBottom>
        Basic details
      </Typography>
       <div className="container h-100 d-flex justify-content-center">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={0}>
          <TextField
            required
            id="FullName"
            name="FullName"
            label="Full name"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={0}> 
          <TextField
            required
            id="DOB"
            name="DOB"
            label="Date of Birth"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          Gender:
          <input type="radio" value="Male" name="gender"/>Male
          <input type="radio" value="Female" name="gender"/>Female
        </Grid>

        <Grid item xs={12} sm={0}>
          <TextField
            required
            id="Nationality"
            name="Nationality"
            label="Nationality"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <label>Marital Status:</label>
          <Select options={MaritalstatusOptions} placeholder="choose"/>
        </Grid>

        <Grid item xs={12} sm={0}>
          <TextField
            required
            id="Username"
            name="Username"
            label="UserName"
            fullWidth
          />
          </Grid>

          <Grid item xs={12} sm={0}>
          <TextField
            required
            id="Password"
            name="Password"
            label="Password"
            fullWidth
          />
          </Grid>
          
      </Grid>
      </div>
    </React.Fragment>
  );
}
