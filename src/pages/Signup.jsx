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
          <div className="flex gap-[20px]">
            <FormSpacer>
              <Label htmlFor="Username/Email" text="First Name" />
              <Input type="text" name="username" placeholder="eg John" />
            </FormSpacer>

            <FormSpacer>
              <Label htmlFor="Username/Email" text="Last Name" />
              <Input type="text" name="username" placeholder="eg Doe" />
            </FormSpacer>
          </div>

          <FormSpacer>
            <Label htmlFor="Username/Email" text="Username" />
            <Input
              type="text"
              name="username"
              placeholder="This is the name owners will see"
            />
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="Password" text="Email" />
            <Input
              type="email"
              name="pass"
              placeholder="eg.abcd@gmail.com"
              required
            />
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="Password" text="Password" />
            <Input type="password" name="pass" />
            <small className="text-[12px] text-gray-300">
              Minimuum length is 8 characters
            </small>
          </FormSpacer>

          <Link to={"/home"}>
            <button
              className="bg-white p-[10px] text-black font-bold mt-[30px] w-full"
              type="submit"
            >
              Sign Up
            </button>
          </Link>
          <Link to={"/signUp"}>
            <button className="mt-[20px] underline text-2xl" type="submit">
              forgot password ?
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}

export function Input({ name, type, placeholder }) {
  return (
    <input
      className="bg-gray-800 p-[10px] border border-white"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export function Label({ htmlFor, text }) {
  return (
    <label className="text-3xl font-light" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export function FormSpacer({ children }) {
  return <div className="flex flex-col gap-[5px] ">{children}</div>;
}
