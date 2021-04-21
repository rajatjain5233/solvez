import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { Chart } from "react-google-charts";
// import DatePicker from 'react-date-picker';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker } from "@material-ui/pickers";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Camera from 'react-html5-camera-photo';





const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 1,
    marginRight: 1,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


Date.prototype.subtractDays= function(d) {
    this.setDate(this.getDate() - d);
    return this;
}

class Selfiefunctionality extends React.Component {
  state={
    name1:"",
    isFullscreen:false,

  }
  componentDidMount(){
   
  }
  
  render(){

    const { classes } = this.props;

    return (
        <div id="nosense"> 
          <div onClick={this.takePhoto}>
           hhhhhh
          </div>

            
        </div> 
    );
  }
}

export default withStyles(styles)(Selfiefunctionality);
