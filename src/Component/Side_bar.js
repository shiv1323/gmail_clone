import { Button } from '@material-ui/core';
import React from 'react';
import '../component_css/Sidebar.css';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SidebarOptionleft from './SidebarOptionleft';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <div className="sidebar">
                <Button
                    className="sidebar_compose"
                    onClick={() => dispatch(openSendMessage())}>
                    Compose
                </Button>
                <SidebarOptionleft Icon={InboxIcon} title={"Inbox"} number={99} />
                <SidebarOptionleft Icon={StarIcon} title={"Starred"} number={5} />
                <SidebarOptionleft Icon={WatchLaterIcon} title={"Snoozed"} number={99} />
                <SidebarOptionleft Icon={SendIcon} title={"Sent"} number={99} />
                <SidebarOptionleft Icon={InsertDriveFileIcon} title={"Draft"} number={14} />
                <SidebarOptionleft Icon={ExpandMoreIcon} title={"More"} />
            </div>
            <MeetWrapper>
                {/* googlemeet */}
            </MeetWrapper>
            <HangoutsWrapper>
                {/* HangoutsWrapper */}
            </HangoutsWrapper>
            <BottomIconsWrapper>
                {/* bottom icon  */}
            </BottomIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar
const Wrapper = styled.div`
border-right:1px solid whitesmoke;
height:100vh;`
const MeetWrapper = styled.div``
const HangoutsWrapper = styled.div``
const BottomIconsWrapper = styled.div``
