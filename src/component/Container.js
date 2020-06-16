// will take in json data, map instance of, and return component
// import React from "react";
import React from 'react';
import assignments from "./homework.json"

class Container extends React.Component {
    state = {
        classAssignments: assignments,
    }

    render() {
        return (
            <>
               
            </>
        )
        
    }

}

export default Container;