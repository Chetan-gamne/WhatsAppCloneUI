import React from 'react';
import './Sidebar.css';
// import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { DonutLarge, SearchOutlined } from '@material-ui/icons';
import MoreVerticon from '@material-ui/icons/MoreVert';
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGaVoW_-OYrFA/profile-displayphoto-shrink_800_800/0/1612155755988?e=1646870400&v=beta&t=3YPrbkpZAW_SQLFMoxM7DLyHyKSWrdVjaoa5CWoHeDs"/>
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLarge /> 
                    </IconButton>
                    <IconButton>
                        <ChatIcon /> 
                    </IconButton>
                    <IconButton>
                        <MoreVerticon /> 
                    </IconButton>
                </div>
            </div>

            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type="text" />
                </div>
            </div>

            <div className='sidebar_chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>
    )
}
