import React from 'react';
import "./comments.css";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { genConfig } from "../../general";

function Comments({comment}) {
    const PF = genConfig.url.public_folder;

    // const {comment, userID} = comment

    const timeAgo = (date)=>{
        const cmntDate = new Date(date).getTime();
        const crntDate = new Date().getTime();

        const timeDiff = crntDate - cmntDate;

        const seconds = Math.floor(timeDiff / 1000); // Convert milliseconds to seconds
        const minutes = Math.floor(seconds / 60); // Convert seconds to minutes
        const hours = Math.floor(minutes / 60); // Convert minutes to hours
        const days = Math.floor(hours / 24); // Convert hours to days
        
        if (days > 0) {
            return `${days}d`;
        } else if (hours > 0) {
            return `${hours}h`;
        } else if (minutes > 0) {
            return `${minutes}m`;
        } else {
            return `${seconds}s`;
        }
    }
    
    
  return (
    <div className="cmntinddiv">
        <div className="cmntprofilediv">
            <Link to={`/profile/${comment.userID.username}`}>
            <img
                className="cmntprofileimg"
                src={
                comment.userID.profilePicture
                    ? PF + comment.userID.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
            />
            </Link>
        </div>
        <div className="cmntrightdiv">
            <div className="cmntrighttopdiv">
                <span className="cmntusername">{comment.userID.username}</span>
                <div className="cmntrighttoprightdiv">
                    <span className="cmnttime">{timeAgo(comment.date)} ago</span>
                    <MoreVert />
                </div>
            </div>
            <div className="cmntmaindiv">
                <span className="cmntdisc">{comment.comment}</span>
            </div>
        </div>
    </div>

  )
}

export default Comments