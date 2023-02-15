"use client";

import { Toaster } from "react-hot-toast";

// Put all client-side components in this ClientProvider Wrapper
const ClientProvider = () => {
    return (
        <>
            <Toaster position="top-center" />
        </>
    );
};

export default ClientProvider;
