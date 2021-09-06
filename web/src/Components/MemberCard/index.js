import React from 'react';
import "./style.css"

function MemberCard({ imgsrc, name}) {
    return (
        <div class='memberCard'>
            <img src={imgsrc} alt={name + " profile icon"} width="184px" height="184px"/>
            <h5 className="memberCardName">{name}</h5>
        </div>
    );
}

export default MemberCard;