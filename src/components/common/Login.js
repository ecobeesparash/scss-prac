import React from "react";
import "./style.scss";

function Login() {
  return (
    <>
      <div className="o-loginContainer__section my-5 mx-auto w-400 text-center px-3 py-4 bgcolor-btn-primary border-14">
        <p className="m-loginHeading__text fs-large fw-bold pb-1">
          Agent Login
        </p>
        <p className="m-loginSubHead__text ">
          Hey Enter your details to get sign in to your account
        </p>

        <form className="m-loginForm__form">
          <input className="a-formInput__input" type="email" />
        </form>
      </div>
    </>
  );
}

export default Login;
