import React from "react";

import "./App.css";

 import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
 const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
  
      Height: "100%"
    }
 
    
  })
);
const App: React.FC = (props: any) => {
   const classes = useStyles(); 
  return (
    <div className="App" >
    <div >
      <div >{props.children}</div>
      </div>
    </div>
  );
};

export default App;
