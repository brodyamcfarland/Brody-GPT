"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="bg-[#1d1d1d] h-screen flex flex-col items-center justify-center">
            <h2 className="mb-20 text-2xl text-white z-20">BRODY-GPT</h2>
            <div className="relative select-none">
                <div className="bg-emerald-400 h-72 w-72 rounded-full blur-2xl animate-pulse absolute z-10" />
                <Image
                    src="/OpenAILogo.png"
                    width={300}
                    height={300}
                    alt="Chat GPT Logo"
                    className="rounded-full relative z-20"
                />
            </div>
            <button
                onClick={() => signIn("google")}
                className="sidebarRows mt-20 flex"
            >
                <FcGoogle size={22} />
                Google Sign In
            </button>
            <p className="text-xs text-gray-500 pt-1">
                *Authenticate with Google to use Brody-GPT
            </p>
        </div>
    );
};

export default Login;
