import React, { useState } from 'react';
import './TweetBox.css';
import ImgAva from '../src/Images/Avatar.jpg';
import Fire from './Firebase';
import { Avatar, Button } from '@material-ui/core';
import { idCard } from './Login'
function TweetBox(props) {

    const [fullName, setFullName] = useState({
        tweet: "",
        file: [],
        fileName: "",
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setFullName((preValue) => {
            // console.log(preValue);
            return {
                ...preValue,
                [name]: value,
            };
        })
    }

    const onFileChange = (e) => {
        const file = e.target.files;
        fullName.fileName = e.target.files[0].name;
       
    };


    const submit = (event, tweet, file, fileName) => {
        event.preventDefault();

        // var id = Fire.auth().currentUser.uid;
        // var id = idCard;
        // var id = props.idCard;

        var id = '1WmziAJGqHUePC1cXtj6fsYdk5D2';
        var namo = fullName.fileName;
        //  alert(namo)
         // alert(id)
         
         const UPD = Fire.storage().ref('Post/' + id + namo).put(fullName.file[0]).then(data => {
            data.ref.getDownloadURL().then(url => {
                // alert(url)
                Fire.database().ref('User/' + id + '/Posts/' ).push({
                    Link: url,
                    tweet: fullName.tweet,
                });
                // alert("Image added successfully");
            })
        })

        // Fire.database().ref('User/' + id + '/Posts/' ).push({
        //     tweet: fullName.tweet,
        // });

    };


    return (
        <div className="tweetBox">
            <form >
                <div className="tweetBox_input">
                    <Avatar src={ImgAva} />
                    <input name="tweet" onChange={inputEvent} value={fullName.tweet} placeholder="Whats happening" type="text" />

                </div>
                <input className="onchanger" type="file" onChange={onFileChange} name="filename" />

                <Button onClick={submit} className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
