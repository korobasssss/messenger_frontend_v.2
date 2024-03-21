'use client'
import axios from "axios";

import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const Paths= {
    BASE: 'http://localhost:8080',
    AUTH: '/auth',
    SOCIAL: '/social',
    BLOG: '/blog',
    FILE: '/file'
}
export const instanceAuth = axios.create({
    baseURL: Paths.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const instance = axios.create({
    baseURL: Paths.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const instanceFile = axios.create({
    baseURL: Paths.BASE,
    headers: {
        'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'
    }
});

export const setToken = (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    instanceFile.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

