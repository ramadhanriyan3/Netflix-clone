"use client";

import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import {
  AiOutlineArrowRight,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { faq } from "../lib/constant";
import { SignUpEmailContext } from "@/context/context";

interface AcordionState {
  index: number | null;
  value: boolean;
}

export default function Homepage() {
  const { signUpDispatch } = useContext(SignUpEmailContext);

  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState<AcordionState>({
    index: null,
    value: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    signUpDispatch({ type: "UPDATE", payload: target.email.value });
    navigate.push("/sign-up");
  };

  const handleAcordion = (index: number) => {
    if (index === isOpen.index) {
      const open = !isOpen.value;
      setIsOpen({
        index,
        value: open,
      });
    } else {
      setIsOpen({
        index,
        value: true,
      });
    }
    console.log(isOpen);
  };

  return (
    <main>
      {/* section 1 */}
      <section className=" bg-[url('/hero.png')] w-full min-h-full bg-center bg-cover relative ">
        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0)] via-60% to-[rgba(0,0,0,0.8)] to-100% p-5">
          <Navbar atHomepage />
          <div className="mx-auto flex flex-col items-center justify-center gap-5 px-5 md:py-52 py-16 max-w-fit ">
            <h1 className="font-bold lg:text-5xl text-4xl  text-white text-center">
              Unlimited movies, TV show, and more
            </h1>
            <h3 className="text-lg md:text-2xl text-white text-center">
              Watch anywhere. Cancel anytime
            </h3>
            <p className="text-lg md:text-2xl text-white text-wrap text-center">
              Ready to watch? Enter your email or mobile number to create or
              restart your membership
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex md:flex-row flex-col md:gap-2 gap-4 justify-center items-center w-full max-w-xl"
            >
              <div className="relative w-full">
                <input
                  required
                  id="email"
                  type="email"
                  placeholder=" "
                  name="email"
                  className="block px-6 pt-6 pb-1 w-full text-white outline-none bg-neutral-800 opacity-75 border rounded-md  border-neutral-200 appearance-none focus:outline-none focus:ring-0 peer"
                />
                <label
                  htmlFor="email"
                  className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Email
                </label>
              </div>
              <button
                type="submit"
                className="font-semibold py-2 md:py-4 px-4 w-fit rounded-sm bg- bg-[#db0000] hover:bg-[#db0000c5] text-white flex justify-center items-center gap-1 flex-nowrap text-nowrap"
              >
                <p>Get Started</p> <AiOutlineArrowRight color="white" />
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-black py-10 md:py-20 px-5 flex flex-col lg:flex-row gap-10 lg:px-20 justify-center items-center">
        <div className="flex flex-col gap-5 w-full lg:max-w-[50%] justify-center items-center lg:items-start ">
          <h3 className="text-white font-bold lg:text-5xl text-4xl text-center md:text-left">
            Enjoy on your TV
          </h3>
          <h4 className="text-white lg:text-xl text-lg text-center md:text-left">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h4>
        </div>
        <Image src={"/feature-1.png"} width={640} height={480} alt="feat-1" />
      </section>
      {/* section 3 */}
      <section className="bg-black py-10 md:py-20 px-5 flex flex-col-reverse lg:flex-row gap-10 lg:px-20 justify-center items-center">
        <Image src={"/feature-2.png"} width={640} height={480} alt="feat-1" />
        <div className="flex flex-col gap-5 w-full lg:max-w-[50%] justify-center items-center lg:items-start ">
          <h3 className="text-white font-bold lg:text-5xl text-4xl text-center md:text-left">
            Download your shows to watch offline
          </h3>
          <h4 className="text-white lg:text-xl text-lg text-center md:text-left">
            Save your favorites easly and always have something to watch.
          </h4>
        </div>
      </section>
      {/* section 4 */}
      <section className="bg-black py-10 md:py-20 px-5 flex flex-col lg:flex-row gap-10 lg:px-20 justify-center items-center">
        <div className="flex flex-col gap-5 w-full lg:max-w-[50%] justify-center items-center lg:items-start ">
          <h3 className="text-white font-bold lg:text-5xl text-4xl text-center md:text-left">
            Watch eveerywhere
          </h3>
          <h4 className="text-white lg:text-xl text-lg text-center md:text-left">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            or TV.
          </h4>
        </div>
        <Image src={"/feature-3.png"} width={640} height={480} alt="feat-1" />
      </section>
      {/* section 5 */}
      <section className="bg-black py-10 md:py-20 px-5 flex flex-col-reverse lg:flex-row gap-10 lg:px-20 justify-center items-center">
        <Image src={"/feature-4.png"} width={640} height={480} alt="feat-1" />
        <div className="flex flex-col gap-5 w-full lg:max-w-[50%] justify-center items-center lg:items-start ">
          <h3 className="text-white font-bold lg:text-5xl text-4xl text-center md:text-left">
            Create profile for kids
          </h3>
          <h4 className="text-white lg:text-xl text-lg text-center md:text-left">
            Send kids on adventures with their favorite character in a space
            made jus for them-free with your membership.
          </h4>
        </div>
      </section>
      {/* section 6 */}

      <section className="bg-black flex flex-col gap-10 justify-center items-center md:py-20 py-10 px-5">
        <h3 className="text-white md:text-5xl text-4xl font-bold">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-col gap-2  max-w-screen-xl mx-auto w-full">
          {faq.map((item, index) => (
            <div key={item.questions} className="flex flex-col gap-1 w-full">
              <div
                onClick={() => handleAcordion(index)}
                className="flex justify-between px-3 md:px-4 py-5 bg-neutral-800 items-center w-full"
              >
                <h3 className=" text-white md:text-3xl text-2xl w-full">
                  {item.questions}
                </h3>
                {isOpen.value && isOpen.index === index ? (
                  <AiFillCaretUp color="white" size={25} />
                ) : (
                  <AiFillCaretDown color="white" size={25} />
                )}
              </div>
              <div
                className={`px-3 md:px-4 py-5 bg-neutral-800 md:text-xl text-lg text-white ${
                  isOpen.value && isOpen.index === index ? "" : "hidden"
                } `}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-center text-white text-xl ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex md:flex-row flex-col md:gap-2 gap-4 justify-center items-center w-full max-w-xl"
          >
            <div className="relative w-full">
              <input
                required
                id="email"
                type="email"
                placeholder=" "
                name="email"
                className="block px-6 pt-6 pb-1 w-full text-white outline-none bg-neutral-800 opacity-75 border rounded-md  border-neutral-200 appearance-none focus:outline-none focus:ring-0 peer"
              />
              <label
                htmlFor="email"
                className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Email
              </label>
            </div>
            <button
              type="submit"
              className="font-semibold py-2 md:py-4 px-4 w-fit rounded-sm bg- bg-[#db0000] hover:bg-[#db0000c5] text-white flex justify-center items-center gap-1 flex-nowrap text-nowrap"
            >
              <p>Get Started</p> <AiOutlineArrowRight color="white" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
