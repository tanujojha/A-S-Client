import {Link} from "react-router-dom"


export default function Footer(){
  return
    (
    <div className = "container">
    <footer id="footer">
      <Link to="#"><i className="footer-icon fab fa-twitter"></i></Link>
      <i className="footer-icon fab fa-facebook-f"></i>
      <i className="footer-icon fab fa-instagram"></i>
      <i className="footer-icon fas fa-envelope"></i>
      <p className="para-footer">© Copyright 2022 ArHub</p>

    </footer>
    </div>
)
}
