import React from 'react'
import { IconButton } from '@material-ui/core'
import '../component_css/Mail.css';
import { useHistory } from 'react-router-dom';
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectMailOpen } from '../features/mailSlice';
function Mail() {
    const history = useHistory()
    const selectedMail = useSelector(selectMailOpen);
    return (
        <div className="mail">
            <div className="mails__tools">
                <div className="mail__toolsleft">
                    <IconButton onClick={() => history.push("/")}><ArrowBack /></IconButton>
                    <IconButton><MoveToInbox /></IconButton>
                    <IconButton><Error /></IconButton>
                    <IconButton><Delete /></IconButton>
                    <IconButton><Email /></IconButton>
                    <IconButton><WatchLater /></IconButton>
                    <IconButton><CheckCircle /></IconButton>
                    <IconButton><LabelImportant /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>
                <div className="mail__toolsright">
                    <IconButton><UnfoldMore /></IconButton>
                    <IconButton><Print /></IconButton>
                    <IconButton><ExitToApp /></IconButton>
                </div>
            </div>
            <div className="mail_body">
                <div className="mail_bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail_important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail_time ">{selectedMail?.time}</p>
                </div>
                <div className="mail_message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
