import "./topbar.css";
import { Search, Person, Chat, Notifications, } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useHistory } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import axios from "axios";
import { genConfig } from "../../general";
// import SearchUser from "../searchuser/Profile";


export default function Topbar() {

  const history = useHistory();
  const search = useRef();

  const { user, dispatch } = useContext(AuthContext);

  const [foundUser, setFoundUser] = useState({});   // holds searched user data from DB

  // Handel Logout
  function handelLogout(){
      localStorage.removeItem("user");
      logoutCall(dispatch)
      history.push("/login")
      // console.log(user);
  };

  // Handel user searching
  const handelSearch = async(e)=>{
    if(e.key === "Enter"){
      const searchedUsername = search.current.value;
      
      try {
        const res = await axios.get(`${genConfig.url.server_url}/api/users/?username=${searchedUsername}`);
        // console.log(res);
        setFoundUser(res.data);
        search.current.value = ""
      } catch (error) {
        console.log(error);
        alert(`can not find user: ${searchedUsername}`)
      }
      
    }
  };

  // display search result component
  const DisplaySearchResult = ({foundUser})=>{

    // if()


    return (
      
      <div className="topbarsrindiv">
        <Link to={`/profile/${foundUser.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            } 
            alt=""
            className="topbarsrprofileimg"
          />
        </Link>
        <span className="topbarsrprofilename">{foundUser.username}</span>
      </div>
    )
  }

  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PF = genConfig.url.public_folder;

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
        {foundUser.username ? <div className="topbarsrmain bg-dark">
          <DisplaySearchResult foundUser={foundUser}/>
        </div> : null}
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
