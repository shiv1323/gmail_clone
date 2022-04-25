import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../component_css/EmailRow.css";
import { selectMail } from '../features/mailSlice';
function EmailRow({ title, subject, description, id, time }) {
    const history = useHistory();
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch(selectMail({
            title, subject, description, id, time
        }));
        history.push("/mail")
    }
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow_title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow_message">
                <h4>{subject}{" "}
                    <span className="emailRow_description">-
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow_time">{time}</p>
        </div>
    )
}

export default EmailRow
