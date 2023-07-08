import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { genConfig } from "../../general";
import Comments from "../comments/comments";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  // const [updatedPost, setUpdatedPost] = useState(post);    // contains initially post(prop.post) and updated post after adding comment
  const [clickedComments, setClickedComments] = useState(false);  // check if user clicked comments button
  const [comment, setComment] = useState(""); // store a comment
  const [allComments, setAllComments] = useState([]);   // stores all the comments of the post

  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PF = genConfig.url.public_folder;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${genConfig.url.server_url}/api/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);


  useEffect(()=>{
    const getAllComments = async()=>{
      try {

        const res = await axios.get(`${genConfig.url.server_url}/api/posts/${post._id}/getallcomments`);
        // console.log(res.data.comments);
        if(res.status === 200){
          setAllComments(res.data.comments)
        }
        
      } catch (err) {
        console.log(err);
      }
    };

    clickedComments && getAllComments();  // call only when user clickes on comment button ie. commentClicked === true


  }, [clickedComments])

  
  // Like Handler
  const likeHandler = () => {
    try {
      axios.put(`${genConfig.url.server_url}/api/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // Comments Handler
  const commentHandler = async ()=>{
    setComment("");
    try {
      const res = await axios.put(`${genConfig.url.server_url}/api/posts/${post._id}/addcomment`, {userId: currentUser._id, userName: currentUser.username, comment: comment});
      // console.log(res.data.comments);
      if(res.status === 200){
        setAllComments(res.data.comments)
      }
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
              style={{background: isLiked ? "red" : null}}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span onClick={()=> setClickedComments(!clickedComments)} className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
        <div className="cmntSection">
          
          {
            clickedComments 
            ? (
                <>
                  <div className="cmntinpdiv input-group mb-3 mt-3">
                    <input onChange={(e)=> setComment(e.target.value)} value={comment} type="text" className="form-control" placeholder="Add a comment" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={commentHandler} className="btn btn-outline-secondary" type="button" id="button-addon2">Post</button>
                  </div>
                  <div className="cmntlistdiv">
                    {
                      allComments.map((comment)=> <Comments key={comment._id} comment={comment} />)
                    }
                  </div>
                </>
              )
            : null
          }

        </div>
      </div>
    </div>
  );
}
