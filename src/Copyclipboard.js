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

class Copyclipboard extends React.Component {
  state={
    page:""
  }
  componentDidMount(){
      // this.getLanguagesData();
      // this.drawChart();
  }
  handleChange=(e,value)=>{
    console.log("hhhhh");
    let id=e.target.id;
    let state_obj={};
    state_obj[id]=e.target.value;
    // let value=value;
    navigator.clipboard.writeText(e.target.value);
    this.setState(state_obj);
    // this.setState({page:})  
  }
  copytoclipboard=()=>{
    navigator.clipboard.writeText(this.state.page);
  }
  
  
  render(){
    const { classes } = this.props;

    return (
        <div id="nosense"> 
            <TextField
              id="page"
              label="Page"
              value={this.state.page}
              onChange={(e) =>
                            this.handleChange(e,"page")
                          }
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <br/>
            <Button 
              variant="contained"
              color="primary"
              onClick={
                this.copytoclipboard
              }
            >
            copy
            </Button>
        </div> 
    );
  }
}

export default withStyles(styles)(Copyclipboard);
