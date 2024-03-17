import authReg from '@/app/scss/for_components/auth/auth_reg.module.scss'
import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";

import '@/app/scss/global/globals.scss'
import {Profile_path} from "@/app/paths/profile";
import {LoginComponent} from "@/app/components/auth/login_registration/login/LoginComponent";
import {LoginInterface} from "@/app/interfaces/auth/authInterface";

export const Login = (props: LoginInterface) => {
    const router = useRouter()

    const enter = (input_login: string, input_password: string) => {

    }

    const registration = () => {
        router.push(Auth_path.REGISTRATION)
    }

    const recovery = () => {
        router.push(Auth_path.FORGOT_PASSWORD)
    }

    return <LoginComponent enter={enter}
                           registration={registration}
                           recovery={recovery}/>
}