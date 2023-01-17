import React from 'react';

import Badge from "../../components/Badge/Badge.js";

function Badges(props){
    const wholeBadge = <Badge color="info">Whole Song</Badge>; 
    const soloBadge = <Badge color="primary">Solo</Badge>; 
    const riffBadge = <Badge color="rose">Riff</Badge>; 

    return (
        <div>
            {props.whole === true && wholeBadge}
            {props.solo === true && soloBadge}
            {props.riff === true && riffBadge}
        </div>
    )
}

export default Badges;