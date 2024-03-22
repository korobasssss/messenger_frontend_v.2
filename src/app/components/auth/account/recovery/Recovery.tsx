import '@/app/scss/global/globals.scss'
import {RecoveryInterface} from "@/app/interfaces/auth/authInterface";
import {RecoveryComponent} from "@/app/components/auth/account/recovery/RecoveryComponent";
import {useRouter} from "next/navigation";

export const Recovery = (props: RecoveryInterface) => {

    const router = useRouter()

    const recovery = (input_email: string) => {
        props.recovery(input_email, router)
    }

    return <RecoveryComponent recovery={recovery}/>
}