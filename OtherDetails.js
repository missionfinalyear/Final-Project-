import React, { Component } from 'react';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import AsyncSelect from 'react-select/async';


const ReligionOptions = [
  { value: 'Hindu', label: 'Hindu' },
  { value: 'Muslim', label: 'Muslim' },
  { value: 'Sikh', label: 'Sikh' },
  { value: 'Baudh', label: 'Baudh' },
  { value: 'Others', label: 'Others'}
]
 
const ExperienceOpt = [
  { value: '01', label: '01' },
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '05', label: '05' },
  { value: '06', label: '06' },
  { value: '07', label: '07' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
  { value: '10', label: '10' }
]

const EatingHabitsOpt = [

  { value: 'Vegan', label: 'Vegan' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Non-Vegetarian', label: 'Non-Vegetarian' }

]

const countryList = [

  { id: 'Af', label: 'Afghanistan'},
  { id: 'Ab', label: 'Albania'},
  { id: 'Au', label: "Australia" },
  { id: 'Br', label: "Brazil" },
  { id: 'Ch', label: "China" },
  { id: 'Dn', label: "Denmark" },
  { id: 'Eq', label: "Egypt" },
  { id: 'Fn', label: "Finland" },
  { id: 'Gh', label: "Ghana" },
  { id: 'Hu', label: "Hungary" },
  { id: 'In', label: "India" },
  { id: 'Jn', label: "Japan" }

]

export default function OtherDetails(){
  return(
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Other Details
    </Typography>
    <div className="container h-100 d-flex justify-content-center">
      <Grid container spacing={3}>
      <Grid item xs={6} sm={0}>
          <label>Country of Residence:</label>
          <Select options={countryList} placeholder="choose"/>
        </Grid>

        <Grid item xs={6} sm={0}>
          <label>Religion:</label>
          <Select options={ReligionOptions} placeholder="choose"/>
        </Grid>

        <Grid item xs={12} sm={0}>
          <TextField
            required
            id="Work"
            name="Working Profession"
            label="Working Profession"
            fullWidth
          />
        </Grid>

        <Grid item xs={6} sm={0}> 
        <label>Working Experience in Years :</label>
        <Select options={ExperienceOpt} placeholder="choose"/>
        </Grid>

        <Grid item xs={12}>
        <TextField
            required
            id="Height"
            name="Height"
            label="Height"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="Weight"
            name="Weight"
            label="Weight"
            fullWidth
          />
        </Grid>

        <Grid item xs={6} sm={0}> 
        <label>Eating Habits :</label>
        <Select options={EatingHabitsOpt} placeholder="choose"/>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="AddInfo"
            name="Additional Information"
            label="Additional Information"
            fullWidth
          />
        </Grid>

        </Grid>
        </div>
    {/*<label>Country of Residence: </label>
    <Select options={countryOptions} placeholder="choose"/>
    <label>Religion: </label>
    <Select options={options} placeholder="choose"/>*/}
</React.Fragment>
  );
}




