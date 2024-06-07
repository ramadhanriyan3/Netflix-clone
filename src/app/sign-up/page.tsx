"use client";

import Navbar from "@/components/navbar";
import axios from "axios";
import { FormEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "../../components/spinner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useRouter();

  const login = async (email: string, password: string) => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      navigate.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      userName: { value: string };
    };

    const formData = {
      email: target.email.value,
      password: target.password.value,
      name: target.userName.value,
    };

    try {
      const respond = await axios.post("/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      login(formData.email, formData.password);
      setIsLoading(false);
    } catch (err) {
      alert("Your email has been registered");
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <main className="bg-black min-h-screen">
        <Navbar atHomepage />
        <div className="flex flex-col gap-5 justify-center items-center p-5 max-w-lg self-center mx-auto md:mt-24 mt-10">
          <h3 className="text-start text-white text-3xl font-semibold">
            Create a username and password to start
          </h3>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7"
            action=""
            method="post"
          >
            <div className="relative w-full">
              <input
                required
                id="userName"
                type="text"
                placeholder=" "
                name="userName"
                className="block rounded-md px-6 pt-6 pb-1 wfull text-md text-white bg-neutral-900 appearance-none focus:outline-none focus:ring-0 peer w-full"
              />
              <label
                htmlFor="userName"
                className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Username
              </label>
            </div>
            <div className="relative w-full">
              <input
                required
                id="email"
                type="text"
                placeholder=" "
                name="email"
                className="block rounded-md px-6 pt-6 pb-1 wfull text-md text-white bg-neutral-900 appearance-none focus:outline-none focus:ring-0 peer w-full"
              />
              <label
                htmlFor="email"
                className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Email
              </label>
            </div>
            <div className="flex justify-between items-center pr-2 rounded-sm  bg-neutral-900 ">
              <div className="relative w-full">
                <input
                  required
                  id="password"
                  type={visible ? "password" : "text"}
                  placeholder=" "
                  name="password"
                  minLength={8}
                  className="block rounded-md px-6 pt-6 pb-1 text-md text-white bg-neutral-900 appearance-none focus:outline-none focus:ring-0 peer w-full"
                />
                <label
                  htmlFor="password"
                  className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Password
                </label>
              </div>
              {visible ? (
                <AiOutlineEye
                  color="white"
                  onClick={() => setVisible(!visible)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  color="white"
                  onClick={() => setVisible(!visible)}
                />
              )}
            </div>
            <button
              type="submit"
              className="text-white font-semibold bg-[#db0000] hover:bg-[#db0000c5]  py-3 px-6 rounded-sm "
            >
              {isLoading ? <Spinner size={25} /> : "Sign Up"}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
