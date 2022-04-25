import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import '../component_css/Sendmail.css';
import { closeSendMessage } from '../features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        db.collection('emails').add(
            {
                to: data.to,
                subject: data.subject,
                message: data.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        );
        dispatch(closeSendMessage());
    }
    console.log(errors);
    const dispatch = useDispatch()
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Mesaage</h3>
                <Close className="sendMail_close"
                    onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    {...register("to", {
                        required: "Required",
                    })}
                />
                {errors.to && <p className="sendMail_error">To is required</p>}
                <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    {...register("subject", {
                        required: "Required",
                    })}
                />
                {errors.subject && <p className="sendMail_error">subject is required</p>}

                <input
                    placeholder="Message.."
                    className="sendMail_message"
                    type="text"
                    name="message"
                    {...register("message", {
                        required: "Required",
                    })}
                />
                {errors.message && <p className="sendMail_error">Message is required</p>}

                <div className="sendMail_option">
                    <Button className="sendMail_send"
                        variant="contained"
                        color="primary"
                        type="submit">Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
