import axios from "axios";

export const Paths= {
    BASE: 'http://localhost:8080',
    AUTH: '/auth',
    SOCIAL: '/social',
    BLOG: '/blog',
    FILE: '/file'
}

export const instance = axios.create({
    baseURL: Paths.BASE,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // todo redo
        'Content-Type': 'application/json'
    }
});

export const instanceFile = axios.create({
    baseURL: Paths.BASE,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,// todo redo
        'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'
    }
});

