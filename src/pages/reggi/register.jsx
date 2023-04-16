import Animation from "../../components/animation/animation"
import Prenavbar from '../../components/prenavbar/prenavbar';
import axios from "axios";
import { useRef } from "react";
import {Link, useHistory} from "react-router-dom"



export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
      console.log("perror");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log("user created");
      try {
        await axios.post("/auth/register", user);
        console.log("posting to reg");
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
    <Prenavbar/>
    <div className = "row">
    <Animation/>
    <div class=" content col-md-6">


          <main class="form-signin">
            <form class="" onSubmit = {handleClick}>
              <h1 class="h3 mb-3 fw-bold">Please sign in</h1>

              <div class="form-floating">
                <input ref = {username} name="username" type="text" class="form-control" id="floatingInput" required autocomplete="off"/>
                <label for="floatingInput">Username</label>
              </div>

              <div class="form-floating">
                <input ref = {email} name="email" type="email" class="form-control" id="floatingInput" required autocomplete="off"/>
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating">
                <input ref = {password} name="password" type="password" class="form-control my-1" id="floatingPassword" minlength="0" required autocomplete="off" />
                <button class="showbtn" type="button" name="button">show</button>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating">
                <input ref = {passwordAgain} name="passwordagain" type="password" class="form-control my-1" id="floatingPassword" minlength="0" required autocomplete="off" />
                <button class="showbtn" type="button" name="button">show</button>
                <label for="floatingPassword">Password Again</label>
              </div>

              <button value = "signinbtn" name="signupbtn" class="w-10 btn btn-lg bg-info mt-4" type="submit">Sign Up</button>
                </form>

              <div class="mt-3 mb-3">
                  <a class="fpa" href="/forgotpassword">Forgot Password?</a>
              </div>

              <a href="login"><p class="caa mt-5 mb-3 ">Log In</p></a>

          </main>

        </div>
        </div>
        </>
  );
}
