"use client"

import { useEffect } from "react";

export default function InstallBootstrap(){
    useEffect(() => {
        //@ts-ignore
import("bootstrap/dist/js/bootstrap.bundle.js");
}, []);
useEffect(() => {
    //@ts-ignore
import("jquery/dist/jquery.min.js");
}, []);
useEffect(() => {
typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, []);
return <></>;
}