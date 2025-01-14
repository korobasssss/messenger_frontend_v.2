"use client"

import {usePathname, useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";
import {Login} from "@/app/components/auth/login_registration/login/Login";
import {Registration} from "@/app/components/auth/login_registration/registration/Registration";
import Image from "next/image";
import auth_icon from '@/assets/common/auth.png'

import auth_main from '@/app/scss/for_components/auth/auth_main.module.scss'
import {RecoveryComponent} from "@/app/components/auth/account/recovery/RecoveryComponent";
import {RestoreComponent} from "@/app/components/auth/account/restore/RestoreComponent";
import {Main_authInterface} from "@/app/interfaces/auth/authInterface";

import settings_scss from '@/app/scss/for_components/blog_pages/settings/settings.module.scss'
import {Recovery} from "@/app/components/auth/account/recovery/Recovery";

export const Main_AuthComponent = (props: Main_authInterface) => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <section className={auth_main.root}>
            <section className={auth_main.mainBLock}>
                <Image src={auth_icon} className={auth_main.img} alt={'just rotating pic'}/>
                <main className={auth_main.authForm}>
                    <section className={auth_main.section}>
                        <button className={auth_main.header} onClick={() => {
                            props.clearMessage()
                            router.push(Auth_path.LOGIN)
                        }}>
                            SimOn
                        </button>
                       {pathname === Auth_path.LOGIN ? <Login authorization={props.authorization}
                                                              clearMessage={props.clearMessage}/> :
                        pathname === Auth_path.REGISTRATION ? <Registration registration={props.registration}/> :
                        pathname === Auth_path.FORGOT_PASSWORD ? <Recovery recovery={props.recovery}/> :
                        pathname === Auth_path.RESTORE ? <RestoreComponent/>: null}
                        <p className={settings_scss.message}>{props.message}</p>
                    </section>
                </main>
            </section>
        </section>
    )
}