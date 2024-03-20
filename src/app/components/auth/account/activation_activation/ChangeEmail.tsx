import '@/app/scss/global/globals.scss'
import main_message_scss from '@/app/scss/for_components/auth/main_message.module.scss'
import {Auth_path} from "@/app/paths/auth";
import {useRouter} from "next/navigation";
import {ActivationInterface, ChangeEmailInterface} from "@/app/interfaces/auth/authInterface";
import {useEffect} from "react";
import {ActivationComponent} from "@/app/components/auth/account/activation_activation/ActivationComponent";

export const ChangeEmail = (props: ChangeEmailInterface) => {

    useEffect(() => {
        props.change_email()
    })

    return <ActivationComponent message={props.message}
                                title={'Изменение почты'}/>
}