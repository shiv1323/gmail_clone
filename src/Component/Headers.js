import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import '../component_css/Header.css';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
const Headers = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })

    }

    const src = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png";
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <a href="/"> <img src={src} alt="gmail_logo" /></a>
            </div>
            <div className="search_cont">
                <div className="header_middle">
                    <SearchIcon />
                    <input placeholder="search mail" type="text" />
                    <div className="close">
                        <CloseIcon /></div>
                    <ArrowDropDownIcon className="header_inputcaret" />

                </div>
            </div>
            <div className="header_right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.profile} />

            </div>
        </div>
    )
}

export default Headers
