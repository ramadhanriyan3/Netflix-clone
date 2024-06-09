"use client";

import { SignUpEmailContext, emailReducer } from "@/context/context";
import { ReactNode, useReducer } from "react";

const ContextWraper = ({ children }: { children: ReactNode }) => {
  const [emailState, signUpDispatch] = useReducer(emailReducer, "");

  return (
    <SignUpEmailContext.Provider value={{ emailState, signUpDispatch }}>
      {children}
    </SignUpEmailContext.Provider>
  );
};

export default ContextWraper;
