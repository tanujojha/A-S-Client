import { Link, useLocation } from "react-router-dom";

export default function Prenavbar (){

  const location = useLocation();

  return(
      <>

  <div className="container-fluid" >
  <div className="row justify-content-around">

    <div className="col-auto ">
      <a href="index.html" className="navbar-brand"><img src="assets/pics/artsocial-logo.PNG" alt="ArHub logo" className="logo-img"/></a>
    </div>

    <div className="$col col-md-auto ">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ulstyle navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${location.pathname==="/about"? "active": ""}`} href="about">About</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${location.pathname==="/login"? "active": ""}`} href="/login">Sign-In</a>
          </li>
          </ul>

        </div>


      </nav>
    </div>

  </div>

</div>
</>
)
}
