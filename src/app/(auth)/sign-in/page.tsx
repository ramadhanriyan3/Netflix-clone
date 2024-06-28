"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Spinner from "@/components/spinner";

const SignIn = () => {
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(true);

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
      alert(err);
      console.log(err);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const formData = {
      email: target.email.value.toString(),
      password: target.password.value.toString(),
    };

    login(formData.email, formData.password);
    setIsLoading(false);
  };

  return (
    <div
      className="bg-black bg-opacity-75 my-5
     p-10 md:p-20 rounded-sm flex flex-col justify-center items-center w-full md:max-w-[500px] max-w-[300px]"
    >
      <h2 className="text-white font-bold text-3xl self-start mb-8">Sign in</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-7"
        action=""
        method="post"
      >
        <div className="relative w-full">
          <input
            id="email"
            type="text"
            placeholder=" "
            name="email"
            required
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
            <AiOutlineEye color="white" onClick={() => setVisible(!visible)} />
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
          {isLoading ? <Spinner size={25} /> : "Sign In"}
        </button>
      </form>
      <h3 className="text-white py-8 text-xl font-thin font-sans ">
        Or Login Sign in with
      </h3>
      <div
        className="w-fit p-1 rounded-full bg-white mb-4 hover:opacity-80 transition cursor-pointer"
        onClick={() => signIn("google", { callbackUrl: "/profile" })}
      >
        <FcGoogle size={40} enableBackground={"white"} />
      </div>
      <div className="flex flex-col w-full gap-5 justify-center bg-transparent">
        <Link
          href={"#"}
          className="text-white text-center hover:underline hover:text-neutral-400"
        >
          Forgot password?
        </Link>
        <h3 className="text-neutral-400 text-center">
          New to Netflix?{" "}
          <Link href={"/"} className="text-white font-semibold hover:underline">
            Sign up Now.
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
