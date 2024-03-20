import '@/app/scss/global/globals.scss'
import {ActivationInterface} from "@/app/interfaces/auth/authInterface";
import {useEffect} from "react";
import {ActivationComponent} from "@/app/components/auth/account/activation_activation/ActivationComponent";

export const Activation = (props: ActivationInterface) => {

    useEffect(() => {
        props.activation_account()
    }, [])

    return <ActivationComponent message={props.message}
                                title={'Активация аккаунта'}/> // todo
}