import { useEffect } from "react"
import "./moreIconSection.css"

export const PostMoreSection = ({postDeleteHandler, currentUser, user, setClickedMore})=>{

  useEffect(()=>{
    
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setClickedMore(false)
     }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setClickedMore])

   
    return (
      <div className="postmoremaindiv">
        <ul className="postmoreul">
          { currentUser._id === user._id ? <li onClick={postDeleteHandler} className="text-danger">Delete</li> : null}
          <li className="text-danger">Report</li>
          <li className="text-danger">Unfollow</li>
          <li>Add to Fav</li>
          <li>Copy link</li>
          <li>Share</li>
          <li onClick={()=> setClickedMore(false)}>Cancel</li>
        </ul>
        
      </div>
    )
  }