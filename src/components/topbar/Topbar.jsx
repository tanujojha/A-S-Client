import "./topbar.css";
import { Search, Person, Chat, Notifications, } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useHistory  } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import axios from "axios";
import { useParams } from "react-router";
// import SearchUser from "../searchuser/Profile"


export default function Topbar() {

  const history = useHistory();

  const search = useRef();

  const { user, dispatch } = useContext(AuthContext);

  const [foundUser, setFoundUser] = useState({});
  const username = useParams().username;
  const [usertobefound, setusertobefound] = useState("")


  function handelLogout(){
      localStorage.removeItem("user");
      logoutCall(dispatch)
      history.push("/login")
      // console.log(user);
  };


  useEffect(() => {
    console.log("hello")
    const fetchUser = async () => {
      console.log("running")
      const res = await axios.get(`/users?username=${usertobefound}`);
      setFoundUser(res.data);
    };
    // fetchUser();
    // <SearchUser user = {foundUser}/>
    console.log(foundUser)
  }, [usertobefound]);


  function handelSearch(e){
    if(e.key === "Enter"){
      const un = search.current.value;
      setusertobefound(un)
      // const fetchUser = async () => {
      //     const res = await axios.get(`/users/?username=${un}`);
      //     setFoundUser(res.data);
      //   };
      console.log("ulalal" + foundUser)

    // console.log(search.current.value)
    // const res = await axios.get(`/?username=${username}`)
    // console.log(res)
    }
  }

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer navbar-dark bg-dark">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ArtSocials</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            ref = {search}
            onKeyDown = {handelSearch}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to ="/" style={{ textDecoration: "none", color: "white" }}><HomeIcon className = "topbarLink"/></Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        <ExitToAppIcon className = "logout" onClick = {handelLogout}/>
      </div>
    </div>
  );
}
