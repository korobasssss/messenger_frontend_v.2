'use client'
import axios from "axios";

import Cookies from "js-cookie";

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
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
    }
});

export const instanceFile = axios.create({
    baseURL: Paths.BASE,
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'
    }
});

