import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import {Button} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                 <TwitterIcon className="sidebar_twitterIcon" />
                <SidebarOption Icon={HomeIcon}   text="Home"/>
                <SidebarOption Icon={SearchIcon}  text="Search"/>
                <SidebarOption Icon={NotificationsNoneIcon}  text="Notification"/>
                <SidebarOption Icon={PermIdentityIcon}  text="Profile"/>
                
                 

               <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
            </div>
        </>
    );
};

export default Sidebar;