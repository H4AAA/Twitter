import React from 'react'
import Sidebar from './Sidebar';
import Widget from './Widget'
import SidebarOption from './SidebarOption';
import Feed from './Feed';
import Login from './Login';

export default function Home(props) {
    return (
        < >
            <Sidebar />
            <Feed value={props.idCard} />
            <Widget />
        </ >
    )
}
