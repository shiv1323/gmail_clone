import { IconButton } from '@material-ui/core'
import React from 'react'
import '../component_css/Sidebarright.css'
import AddIcon from '@material-ui/icons/Add';
const Sidebarright = () => {
    return (
        <div className="sidebar_right">
            <div className="calender" />
            <div className="keep" />
            <div className="task" />
            <div className="contact" />
            <div className="icon">
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
        </div>)
}

export default Sidebarright
