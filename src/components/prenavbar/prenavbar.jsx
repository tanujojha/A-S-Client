import { Link, useLocation } from "react-router-dom";

export default function Prenavbar (){

  const location = useLocation();

  return(
      <>

  <div className="container-fluid" >
  <div className="row justify-content-around">

    <div className="col-auto ">
      <Link to="/" className="navbar-brand"><img src="assets/pics/artsocial-logo.PNG" alt="ArHub logo" className="logo-img"/></Link>
    </div>

    <div className="$col col-md-auto ">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ulstyle navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/login"? "active": ""}`} to="/login">Sign-In</Link>
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
