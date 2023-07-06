import React from 'react';
import "./comments.css";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { genConfig } from "../../general";

function Comments({user, comment}) {
    const PF = genConfig.url.public_folder;




  return (
    <div className="cmntinddiv">
        <div className="cmntprofilediv">
            <Link to={`/profile/${user.username}`}>
            <img
                className="cmntprofileimg"
                src={
                user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
            />
            </Link>
        </div>
        <div className="cmntrightdiv">
            <div className="cmntrighttopdiv">
                <span className="cmntusername">{comment.userID}</span>
                <div className="cmntrighttoprightdiv">
                    <span className="cmnttime">2 hours ago</span>
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