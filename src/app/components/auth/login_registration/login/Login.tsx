"use client"

import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";

import '@/app/scss/global/globals.scss'
import {LoginComponent} from "@/app/components/auth/login_registration/login/LoginComponent";
import {LoginInterface} from "@/app/interfaces/auth/authInterface";
import {useEffect, useState} from "react";

export const Login = (props: LoginInterface) => {
    const router = useRouter()

    const [input_login, setInput_login] = useState('')
    const [input_password, setInput_password] = useState('')
    const [isEnterPressed, setEnterPressed] = useState(false)

    useEffect(() => {
        if (isEnterPressed && input_login.length !== 0 && input_password.length !== 0) {
            if (input_login.split('').includes('@')) {
                props.authorization(input_login, '', input_password, router)
            } else {
                props.authorization('', input_login, input_password, router)
            }
        }
        setEnterPressed(false)
    }, [isEnterPressed])

    const registration = () => {
        router.push(Auth_path.REGISTRATION)
    }

    const recovery = () => {
        router.push(Auth_path.FORGOT_PASSWORD)
    }

    return <LoginComponent registration={registration}
                           recovery={recovery}
                           input_login={input_login}
                           input_password={input_password}
                           setEnterPressed={setEnterPressed}
                           setInput_login={setInput_login}
                           setInput_password={setInput_password}/>
}