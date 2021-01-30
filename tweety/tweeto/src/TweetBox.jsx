import React from 'react';
import './TweetBox.css';
import ImgAva from '../src/Images/Avatar.jpg';
import { Avatar, Button } from '@material-ui/core';
function TweetBox() {
    return (
        <div className="tweetBox">
            <form >
                <div className="tweetBox_input">
                    <Avatar src={ImgAva} />
                    <input placeholder="Whats happening" type="text" />

                </div>
                <input className="tweetBox_inputImage" placeholder="Enter Image Url" type="text" />

                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
