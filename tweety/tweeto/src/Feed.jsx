import React, { useState, useEffect } from 'react'
import './Feed.css'
import './TweetBox'
import TweetBox from './TweetBox';
import Post from './Post'
import Fire from './Firebase';
import ImgAva from '../src/Images/Avatar.jpg';
function Feed(props) {
    const [posts, setPosts] = useState([]);


    // useEffect(() => {
    //     var id = '1WmziAJGqHUePC1cXtj6fsYdk5D2';
    //     Fire.database().ref('User'+id + '/Posts').onSnapshot((snapshot) =>
    //         setPosts(snapshot.Posts.map((post) => post.data()))
    //     );
    // }, []);

    return (
        <>
            <div className="feed">
                {/* Header */}
                <div className="feed_header">
                    <h2>Home</h2>
                </div>
                {/* Tweet box*/}
                <TweetBox idCard={props.idCard} />


                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}


                {/* Post */}
                {/* <Post
                    displayName="Abdullah Attahir"
                    userName="AAAttahir"

                    // timestamp,
                    avatar={ImgAva}
                    text="Your are on verge of success."
                    image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" /> */}

            </div>
        </>
    )
}

export default Feed
