import React from "react";

import "./style.scss";

import { BsGoogle, BsApple, BsFacebook } from "react-icons/bs";

function Login() {
  return (
    <>
      <div className="o-loginContainer__section my-5 mx-auto w-30 text-center px-3 py-3 bgcolor-bg-primary border-50">
        <p className="m-loginHeading__text fs-xlarge fw-bold mb-1">
          Agent Login
        </p>

        <p className="m-loginSubHead__text justify-center fs-medium mb-3 px-2">
          Hey, Enter your details to get sign in to your account
        </p>

        <form className="m-loginForm__form w-100">
          <input
            className="a-formInput__input w-100 border-6 fs-small px-1 py-1 mb-1"
            type="email"
            placeholder="Enter Email/Phone No."
          />
          <input
            className="a-formInput__input w-100 border-6 fs-small px-1 py-1 mb-1"
            type="password"
            placeholder="Passcode"
          />

          <p className="m-loginTrouble__text mb-1 text-left fw-medium mb-2">
            Having trouble to sign in?
          </p>

          <button className="m-loginBtn__button bgcolor-btn-primary fs-small w-100 fw-bold px-2 py-1 mb-3 border-14">
            Sign in
          </button>
        </form>

        <p className="m-loginOption__text fw-medium mb-2">Or Sign In With</p>

        <div className="m-loginButtonOptions__section d-flex justify-space-between mb-2">
          <button className="m-loginBtn__button d-flex fs-small justify-center items-center bgcolor-transparent w-30 fw-bold px-1 py-1 border-10">
            <BsGoogle className="a-linkIcon__icon" /> Google
          </button>

          <button className="m-loginBtn__button d-flex fs-small justify-center items-center bgcolor-transparent w-30 fw-bold px-1 py-1 border-10">
            <BsApple /> Apple ID
          </button>

          <button className="m-loginBtn__button d-flex fs-small justify-center items-center bgcolor-transparent w-30 fw-bold px-1 py-1 border-10">
            <BsFacebook /> Facebook
          </button>
        </div>

        <p className="m-signup__text">
          Don't have an account? &nbsp;
          <a className="color-text-primary fw-medium" href="google">
            Request now
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;
