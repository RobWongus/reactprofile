// will take in json data, map instance of, and return component
// import React from "react";
import React, { Component } from 'react';

import assignments from "./components/homework.json"

class Work extends React.Component {

    state = {
        classAssignments: assignments,
      }

render() {
    return (
        <div className= 'Homework'>
            
        </div>
        )
    
    }

}

export default Work;