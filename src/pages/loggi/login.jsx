import Animation from "../../components/animation/animation"
import { useContext, useRef } from "react";
import Prenavbar from '../../components/prenavbar/prenavbar';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function Login() {

  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };


  return (
    <>
    <Prenavbar/>

    <div className = "row">
    <Animation/>
    <div className=" content col-md-6">


          <main className="form-signin">
            <form className="" action="/signup" method="post">
              <h1 className="h3 mb-3 fw-bold">Please sign in</h1>

              <div className="form-floating">
                <input ref = {email} name="email" type="email" className="form-control" id="floatingInput" required autocomplete="off"/>
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating">
                <input ref = {password} name="password" type="password" className="form-control" id="floatingPassword" minlength="0" required autocomplete="off" />
                <button className="showbtn" type="button" name="button">show</button>
                <label for="floatingPassword">Password</label>
              </div>
              <button onClick = {handleClick} value = "signinbtn" name="signinbtn" className="w-10 btn btn-lg bg-info mt-4" type="submit">Sign in</button>

            </form>

              <div className="mt-3 mb-3">
                  <Link className="fpa" to="/forgotpassword">Forgot Password?</Link>
              </div>

              <Link to="register"><p className="caa mt-5 mb-3 ">Create Account</p></Link>

          </main>

        </div>
        </div>
        </>
  );
}
