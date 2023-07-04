import "./closeFriend.css";
import {public_folder_local} from "../../general"

export default function CloseFriend({user}) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PF = public_folder_local;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
