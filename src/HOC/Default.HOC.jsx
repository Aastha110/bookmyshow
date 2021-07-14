import React from "react";
import { Route } from "react-router-dom";

//layout
import DeafaultLayout from "../Layouts/Default.layout";

const DeafaultHOC = ({ component: Component, ...rest }) => {
  
    return <>
      <Route 
        {...rest} 
        component={(props) => (
          <DeafaultLayout>
           <component {...props} />
        </DeafaultLayout>
         )} 
    /> 
    </>;
};

export default DeafaultHOC;