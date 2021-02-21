import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ImgAva from '../src/Images/Avatar.jpg';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
function Post({
    displayName,
    userName,
    verified,
    // timestamp,
    avatar,
    text,
    image,
}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">

                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                        {displayName}  
                            <span className="post_headerSpecial">
                               {/* {verified && <VerifiedUserIcon className="post_badge"  />} */}
                                @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className="header_description">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img src={image} alt=" " />
                <div className="post_footer">
                    <ChatBubbleIcon />
                    <RepeatIcon/>
                    <FavoriteBorderIcon/>
                    <PublishIcon/>

                </div>
            </div>
        </div>
    )
}

export default Post
