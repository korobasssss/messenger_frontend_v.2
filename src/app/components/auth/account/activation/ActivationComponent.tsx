import '@/app/scss/global/globals.scss'
import main_message_scss from '@/app/scss/for_components/auth/main_message.module.scss'
import {Auth_path} from "@/app/paths/auth";
import {useRouter} from "next/navigation";

export const ActivationComponent = () => {
    const router = useRouter()

    return (
        <main className={main_message_scss.sections}>
            <header className={main_message_scss.header}>Активация аккаунта</header>
            <p className={main_message_scss.p}>
                Ваш аккаунт был успешно активирован! Для продолжения войдите в аккаунт
            </p>
            <button className={'button_main_color'} onClick={() => router.push(Auth_path.LOGIN)}>
                Войти
            </button>
        </main>
    )
}