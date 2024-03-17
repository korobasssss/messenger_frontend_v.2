import '@/app/scss/global/globals.scss'
import main_message_scss from '@/app/scss/for_components/auth/main_message.module.scss'
import {Auth_path} from "@/app/paths/auth";
import {useRouter} from "next/navigation";
import {ActivationInterface} from "@/app/interfaces/auth/authInterface";
import {useEffect} from "react";
import {ActivationComponent} from "@/app/components/auth/account/activation/ActivationComponent";

export const Activation = (props: ActivationInterface) => {
    const router = useRouter()

    const goToLogin = () => {
        router.push(Auth_path.LOGIN)
    }

    useEffect(() => {
        props.activation_account()
    })

    return <ActivationComponent message={props.message}/>
}