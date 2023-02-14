import React from "react";
import { BiTestTube } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { RiAlarmWarningLine } from "react-icons/ri";

const HomePage = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center text-white px-2">
            <h1 className=" text-3xl font-bold mb-20 select-none">Brody-GPT</h1>
            <div className="flex space-x-2 text-center">
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <div className="flex flex-col items-center justify-center">
                            <BiTestTube size={30} fill="green" />
                            <h2 className="uppercase text-sm text-emerald-200 tracking-widest pt-2">
                                Examples
                            </h2>
                        </div>
                    </div>
                    <div className="space-y-2 text-emerald-300">
                        <p className="exampleText">"Explain _______ to me."</p>
                        <p className="exampleText">
                            "What is the difference between _______ and
                            _______?"
                        </p>
                        <p className="exampleText">
                            "Write me a React Component in Typescript that
                            returns an account sign up form using arrow function
                            syntax."
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <div className="flex flex-col items-center justify-center">
                            <BsGear size={30} fill="green" />
                            <h2 className="uppercase text-sm text-emerald-200 tracking-widest pt-2">
                                Capabilities
                            </h2>
                        </div>
                    </div>
                    <div className="space-y-2 text-emerald-300">
                        <p className="exampleText">
                            Change the version of ChatGPT.
                        </p>
                        <p className="exampleText">
                            Pulls data from ChatGPT API and stores the results
                            in a Firestore instance.
                        </p>
                        <p className="exampleText">Next Authentication.</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <div className="flex flex-col items-center justify-center">
                            <RiAlarmWarningLine size={30} fill="green" />
                            <h2 className="uppercase text-sm text-emerald-200 tracking-widest pt-2">
                                Limitations
                            </h2>
                        </div>
                    </div>
                    <div className="space-y-2 text-emerald-300">
                        <p className="exampleText">
                            Occasionally generates incorrect information.
                        </p>
                        <p className="exampleText">
                            Occasionally produces biased content or harmful
                            instructions.
                        </p>
                        <p className="exampleText">
                            Limited knowledge of events and technology after
                            2021.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
