import React from 'react'
import './Widget.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
export default function Widget() {
    return (
        <div className="widgets">
            <div className="widget_input">
                <SearchOutlinedIcon className="widget_searchIcon" />
                <input placeholder="Search twitter" type="text"/>
            </div>
            <div className="widget_widgetContainer">
<h2>Whats happening!</h2>
            </div>
        </div>
    )
}
