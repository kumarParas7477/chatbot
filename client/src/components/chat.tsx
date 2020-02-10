import * as React from "react";
import { RouteComponentProps } from "react-router";
import ProjectService from "./../services/projectService";
import { Grid, Modal, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { throwStatement } from "@babel/types";
interface IChatState {
  message: any;
  newMessage: any;
  sentMessages:Array<String>;
  receivedMessages:Array<String>;
}
class ChatComponent extends React.Component<RouteComponentProps, IChatState> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      newMessage: "",
      sentMessages:[],
      receivedMessages:[]
    };
  }

  componentDidMount() {
    ProjectService.initiate();
  }
  handleChange = (e: any) => {
    this.setState({ message: e.target.value });
    this.state.sentMessages.push(this.state.message);
  };
  send = () => {

    
    this.setState({
     
      receivedMessages: this.state.receivedMessages.push(ProjectService.sendMessage(this.state.message))
      
    });
    
  };

  render() {
    return (
      
      <Paper variant="outlined" style={{height:'500px',width:'400px',alignContent:'center'}} >
          { 
              <div style={{marginLeft:0}}>{this.state.receivedMessages[this.state.receivedMessages.length-1]}</div>  
          }
          { 
             <div style={{marginRight:0}}>{this.state.sentMessages[this.state.sentMessages.length-1]}</div>
          }
             <div></div>
               <div style={{marginTop:'400px'}} >
               <Paper variant="outlined"style={{height:'70px',width:'380px'}} >
               <Grid container direction="row" alignItems="center">
               <Grid item xs={7}>
              <TextField id="standard-basic" label="Standard"  
            style={{height:30,width:100}}
            onChange={e => this.handleChange(e)}
          ></TextField>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>

         <Button variant="contained" color="primary"  onClick={e => this.send()} >
Send
</Button> 
</Grid>
</Grid>
</Paper>
</div>

          
        </Paper>
     
 
    );
  }
}
export default ChatComponent;
