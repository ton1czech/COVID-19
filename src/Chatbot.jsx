import React from 'react';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import './css/Chatbot.css';

const Chatbot = () => {
    return (
        <div className="chatbot">
            <div className="icon_face">
                <FaceRoundedIcon style={{ fontSize: 55, color: 663399}} />
            </div>
        </div>
    )
}

export default Chatbot;