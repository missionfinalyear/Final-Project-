import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
//import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';


export default class UploadDocuments extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        loaded:0  
      }
  }

  onChangeHandler=event=>{
    console.log(event.target.files[0])
}

  onChangeHandler=event=>{
    this.setState({
    selectedFile: event.target.files[0],
    loaded:0
 })
}


  onClickHandler = () => {
    const data = new FormData() 
      data.append('file', this.state.selectedFile)
    axios.post("http://localhost:8000/upload", data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
      })
  },
        })
        .then(res => { // then print response status
          console.log(res.statusText)
       })
      }
      render() {
        return (
         <React.Fragment>
    
         <Typography variant="h6" gutterBottom>
           Upload Documents
         </Typography>
         <div className="container h-100 d-flex justify-content-center">
          <Grid container spacing={5}>
           <Grid item xs={12} sm={0}>
                <b><label>Upload any Government ID :</label></b> {"\n"}
                <input type="file"  onChange={this.onChangeHandler} style={{width: "370px"}}/>
           </Grid>

           <Grid item xs={12} sm={0}>
                <b><label>Upload Divorced Certificate (If Applicable) :</label></b> {"\n"}
                <input type="file"  onChange={this.onChangeHandler} style={{width: "370px"}}/>
           </Grid>

           <Grid item xs={12} sm={0}>
                <b><label>Upload Ex-Partners Death Certificate (If Applicable) :</label></b>{"\n"}
                <input type="file"  onChange={this.onChangeHandler} style={{width: "370px"}}/>
           </Grid>

           <Grid item xs={12} sm={0}>
                <b><label>Upload Other Required Document(If Applicable) :</label></b> {"\n"}
                <input type="file"  onChange={this.onChangeHandler} style={{width: "370px"}}/>
           </Grid>
           <div class="form-group">
                <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
          </div>

           <Grid item xs={12} sm={0}>
                <button type="button"  onClick={this.onClickHandler}>Upload</button>
           </Grid>

          </Grid>
        </div>

           </React.Fragment>
       );
       }

}
  
    // export default function UploadDocuments() {
      // render() {
      //  return (
        
      //   <React.Fragment>
   
      //   <Typography variant="h6" gutterBottom>
      //     Basic details
      //   </Typography>
      //    <div className="container h-100 d-flex justify-content-center">
      //   <Grid container spacing={3}>
      //     <Grid item xs={12} sm={6}>
      //     <label>Upload Your File </label>
      //             <input type="file"  onChange={this.onChangeHandler}/>
                
      //           <button type="button"  onClick={this.onClickHandler}>Upload</button>
      //     </Grid>
      //     </Grid>
      //     </div>
      //     </React.Fragment>
      // );
      // }
  // }
  


