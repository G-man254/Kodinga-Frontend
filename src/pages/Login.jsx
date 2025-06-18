import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="text-white">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url('/pexels-franco-monsalvo-252430633-16242030.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      >
        <form
          className="p-[100px] w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100
"
          action=""
        >
          <FormSpacer>
            <Label htmlFor="Username/Email" text="Username" />
            <Input type="text" name="username" />
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="Password" text="Password" />
            <Input type="password" name="pass" />
          </FormSpacer>
          <Link to={"/home"}>
            <button
              className="bg-white p-[10px] text-black font-light mt-[30px] w-full"
              type="submit"
            >
              Proceed
            </button>
          </Link>
          <Link to={"/signUp"}>
            <button className="mt-[20px] underline text-2xl" type="submit">
              Dont have an account ? Sign up !
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}

export function Input({ name, type }) {
  return (
    <input
      className="bg-gray-800 p-[10px] border border-white w-[400px]"
      type={type}
      name={name}
    />
  );
}

export function Label({ htmlFor, text }) {
  return (
    <label className="text-3xl" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export function FormSpacer({ children }) {
  return <div className="flex flex-col gap-[5px] ">{children}</div>;
}
