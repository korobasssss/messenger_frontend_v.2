"use client"

import main_message_scss from '@/app/scss/for_components/auth/main_message.module.scss'
import {usePathname} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";
import {ActivationComponent} from "@/app/components/auth/account/activation/ActivationComponent";
import {SuccessfulComponent} from "@/app/components/auth/account/successful/SuccessfulComponent";
export const Main_message = () => {
    const pathname = usePathname()

    return (
        <section className={main_message_scss.page}>
            <main className={main_message_scss.route}>
               {pathname === Auth_path.ACTIVATION ? <ActivationComponent/> :
                pathname === Auth_path.SUCCESSFUL_REGISTRATION ? <SuccessfulComponent/> : null}
            </main>
        </section>
    )
}