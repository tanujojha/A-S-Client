import Animation from "../../components/animation/animation"
import { useContext, useRef } from "react";
import Prenavbar from '../../components/prenavbar/prenavbar';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";



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
    <div class=" content col-md-6">


          <main class="form-signin">
            <form class="" action="/signup" method="post">
              <h1 class="h3 mb-3 fw-bold">Please sign in</h1>

              <div class="form-floating">
                <input ref = {email} name="email" type="email" class="form-control" id="floatingInput" required autocomplete="off"/>
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating">
                <input ref = {password} name="password" type="password" class="form-control" id="floatingPassword" minlength="0" required autocomplete="off" />
                <button class="showbtn" type="button" name="button">show</button>
                <label for="floatingPassword">Password</label>
              </div>
              <button onClick = {handleClick} value = "signinbtn" name="signinbtn" class="w-10 btn btn-lg bg-info mt-4" type="submit">Sign in</button>

            </form>

              <div class="mt-3 mb-3">
                  <a class="fpa" href="/forgotpassword">Forgot Password?</a>
              </div>

              <a href="register"><p class="caa mt-5 mb-3 ">Create Account</p></a>

          </main>

        </div>
        </div>
        </>
  );
}
