import * as React from "react";
import { RouteComponentProps } from "react-router";
import ProjectService from "./../services/projectService";

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
interface IChatState {
  message: any;
  newMessage: any;
}
class ChatComponent extends React.Component<RouteComponentProps, IChatState> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      newMessage: ""
    };
  }
  componentDidMount() {
    ProjectService.initiate();
  }
  handleChange = (e: any) => {
    this.setState({ message: e.target.value });
  };
  send = () => {
    this.setState({
      newMessage: ProjectService.sendMessage(this.state.message)
    });
  };

  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-4">
       <div  style={{"border":"solid 9px","borderRadius":"20px"}}>
               <body >
               <div  >
              <TextField id="outlined-basic" label="Outlined" variant="outlined" 
            style={{height:"10px"}}
            onChange={e => this.handleChange(e)}
          ></TextField>
         <Button variant="contained" color="primary" href="#contained-buttons" onClick={e => this.send()}>
Send
</Button> 
<div> {this.state.newMessage}</div>
          </div>
        </body></div>
     </div>
 
    );
  }
}
export default ChatComponent;
