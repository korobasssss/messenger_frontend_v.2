"use client"

import main_message_scss from '@/app/scss/for_components/auth/main_message.module.scss'
import {usePathname} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";
import {SuccessfulComponent} from "@/app/components/auth/account/successful/SuccessfulComponent";
import {ActivationInterface} from "@/app/interfaces/auth/authInterface";
import {Activation} from "@/app/components/auth/account/activation/Activation";
export const Main_message = (props: ActivationInterface) => {
    const pathname = usePathname()

    return (
        <section className={main_message_scss.page}>
            <main className={main_message_scss.route}>
               {pathname === Auth_path.ACTIVATION ?
                   <Activation activation_account={props.activation_account} message={props.message}/> :
               pathname === Auth_path.SUCCESSFUL_REGISTRATION ?
                   <SuccessfulComponent/> : null}
            </main>
        </section>
    )
}