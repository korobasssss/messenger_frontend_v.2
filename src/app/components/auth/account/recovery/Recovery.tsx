import '@/app/scss/global/globals.scss'
import recovery_scss from '@/app/scss/for_components/auth/recovery.module.scss'
import {RecoveryInterface} from "@/app/interfaces/auth/authInterface";

export const Recovery = (props: RecoveryInterface) => {

    const recovery = (input_email: string) => {
        props.recovery(input_email)
    }

    return
}