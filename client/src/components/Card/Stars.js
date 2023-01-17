import React from 'react';
import Star from "@material-ui/icons/Star";

function Stars(props){
    const {stars} = props;
    switch (stars) {
        case 1:
            return (<Star/>);
        case 2:
            return (<div><Star/><Star/></div>);
        case 3:
            return (<div><Star/><Star/><Star/></div>);
        case 4:
            return (<div><Star/><Star/><Star/><Star/></div>);
        case 5:
            return (<div><Star/><Star/><Star/><Star/><Star/></div>);
        default: 
            return (<div><Star/><Star/><Star/></div>);
    }
}

export default Stars;