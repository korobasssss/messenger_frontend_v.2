import '@/app/scss/global/globals.scss'
import {ActivationInterface} from "@/app/interfaces/auth/authInterface";
import {useEffect} from "react";
import {ActivationComponent} from "@/app/components/auth/account/activation_activation/ActivationComponent";
import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";

export const Activation = (props: ActivationInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.activation_method()
    }, [])

    const toLogin = () => {
        props.clearMessage()
        router.push(Auth_path.LOGIN)
    }

    return <ActivationComponent message={props.message}
                                title={'Активация аккаунта'} // todo
                                toLogin={toLogin}/>
}