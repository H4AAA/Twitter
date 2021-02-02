import React,{useState} from 'react'
import './Feed.css'
import './TweetBox'
import TweetBox from './TweetBox';
import Post from './Post'
import ImgAva from '../src/Images/Avatar.jpg';
function Feed() {
    const [posts,setPosts] = useState([]);
    return (
        <>
            <div className="feed">
                {/* Header */}
                <div className="feed_header">
                    <h2>Home</h2>
                </div>
                {/* Tweet box*/}
                <TweetBox />


                {/* Post */}
                <Post
                    displayName="Abdullah Attahir"
                    userName="AAAttahir"
                    verified={true}
    // timestamp,
                    avatar={ImgAva}
                    text="Your are on verge of success."
                    image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" />
                 
            </div>
        </>
    )
}

export default Feed
