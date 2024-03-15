"use client"

import {usePathname, useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";
import {LoginComponent} from "@/app/components/auth/login_registration/login/LoginComponent";
import {RegistrationComponent} from "@/app/components/auth/login_registration/registration/RegistrationComponent";
import Image from "next/image";
import auth_icon from '@/assets/common/auth.png'

import auth_main from '@/app/scss/for_components/auth/auth_main.module.scss'
import {RecoveryComponent} from "@/app/components/auth/account/recovery/RecoveryComponent";
import {RestoreComponent} from "@/app/components/auth/account/restore/RestoreComponent";

export const Main_AuthComponent = () => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <section className={auth_main.root}>
            <section className={auth_main.mainBLock}>
                <Image src={auth_icon} className={auth_main.img} alt={'just rotating pic'}/>
                <main className={auth_main.authForm}>
                    <section className={auth_main.section}>
                        <button className={auth_main.header} onClick={() => router.push(Auth_path.LOGIN)}>
                            SimOn
                        </button>
                       {pathname === Auth_path.LOGIN ? <LoginComponent/> :
                        pathname === Auth_path.REGISTRATION ? <RegistrationComponent/> :
                        pathname === Auth_path.FORGOT_PASSWORD ? <RecoveryComponent/> :
                        pathname === Auth_path.RESTORE ? <RestoreComponent/>: null}
                    </section>
                </main>
            </section>
        </section>
    )
}