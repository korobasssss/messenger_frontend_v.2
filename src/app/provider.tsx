'use client';
import { Provider } from "react-redux";
import React from "react";
import {reduxStore} from "@/redux/redux";

export function Providers({ children } : { children: React.ReactNode }) {
    return <Provider store={reduxStore}>{children}</Provider>;
}