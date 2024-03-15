"use client"

import {usePathname} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";
import {LoginComponent} from "@/app/components/auth/login_registration/login/LoginComponent";
import {RegistrationComponent} from "@/app/components/auth/login_registration/registration/RegistrationComponent";

export const Main_AuthComponent = () => {
    const pathname = usePathname()
    return (
        <main>
            {pathname === Auth_path.LOGIN ? <LoginComponent/> :
                pathname === Auth_path.REGISTRATION ? <RegistrationComponent/> : null}
        </main>
    )
}