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




// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
import * as d3 from "d3";


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

class Languagescount extends React.Component {
  state={
    name1:"",
    data_array:[],
    fromdate:new Date().subtractDays(365),
    todate:new Date(),
    pagesize:10,
    page:"",
    nodata:true
  }
  componentDidMount(){
      this.getLanguagesData();
      // this.drawChart();
  }
  getLanguagesData = () => {
      
      let url=`https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow`;
      if(this.state.fromdate){
         let start_date_time=Math.floor(this.state.fromdate.getTime()/1000);
         url=url+`&fromdate=`+start_date_time;
      }
      if(this.state.todate){
         let todate=Math.floor(this.state.todate.getTime()/1000);
         url=url+`&todate=`+todate;
      }
      if(this.state.pagesize){
         let pagesize=this.state.pagesize;
         url=url+`&pagesize=`+pagesize;
      }
      if(this.state.page){
         let page=this.state.page;
         url=url+`&page=`+page;
      }
      
      fetch(url)
        .then(response => response.json())
        .then((response)=>{
            if(response&&response.items&&response.items.length>0){
                let data_array=[];
                data_array.push(["Languages","Count"]);
                for(let i=0;i<response.items.length;i++){
                    let name=response.items[i].name;
                    let count=response.items[i].count;
                    let arr_indi=[];
                    arr_indi.push(name);
                    arr_indi.push(count);
                    data_array.push(arr_indi);
                }
                this.setState({data_array:data_array});
            }else{
              this.setState({nodata:false});
            }
      });

  }
  handleChange=(e,value) =>{
    // debugger
    // console.log("some description");
    let id=e.target.id;
    let state_obj={};
    state_obj[id]=e.target.value;
    // let value=value;
    this.setState(state_obj);

  }
  handleDateChange=(selected_date)=> {
    // debugger
    // console.log("le");
    this.setState({fromdate:selected_date});
  }
  render(){
    const { classes } = this.props;

    return (
        <div id="nosense"> 
          <div style={{"text:align":"center"}}> 
           
            {this.state.nodata?(<div>
              <Chart
                width={'1200px'}
                height={'600px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={this.state.data_array}
                options={{
                  // Material design options
                  chart: {
                    title: 'Performance of languages Over time',
                    subtitle: 'Their Count and their Name',
                  },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
              />
              <div>
                Customize Your results
              </div>
              <div>
                  
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                         style={{ width: "20%", marginLeft: "0%" }}
                         disableToolbar
                         fullWidth
                         variant="inline"
                         format="MM/dd/yyyy"
                         margin="normal"
                         id="date-picker-inline"
                         value={this.state.fromdate}
                         label="From Date"
                         helperText="Please Select Your For Date"
                         onChange={this.handleDateChange}
                         KeyboardButtonProps = {{
                           'aria-label': 'change date',
                         }}
                       />
                  </MuiPickersUtilsProvider>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                         style={{ width: "20%", marginLeft: "0%" }}
                         disableToolbar
                         fullWidth
                         variant="inline"
                         format="MM/dd/yyyy"
                         margin="normal"
                         id="date-picker-inline"
                         value={this.state.todate}
                         label="To Date"
                         helperText="Please Select Your To Date"
                         onChange={this.handleDateChange}
                         KeyboardButtonProps = {{
                           'aria-label': 'change date',
                         }}
                       />
                  </MuiPickersUtilsProvider>
                  <TextField
                      id="pagesize"
                      label="Pagesize"
                      value={this.state.pagesize}
                      onChange={(e) =>
                                    this.handleChange(e,"pagesize")
                                  }
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
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
              </div>
              <Button 
                variant="contained"
                color="primary"
                onClick={
                  this.getLanguagesData
                }
              >
              Customize
              </Button>
            </div>):
            (<div>No Data</div>)
            }  
          </div>  
        </div> 
    );
  }
}

export default withStyles(styles)(Languagescount);
