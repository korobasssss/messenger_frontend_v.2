import main_message_scss from "@/app/scss/for_components/auth/main_message.module.scss";
import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";

export const SuccessfulComponent = () => {
    const router = useRouter()

    return (
        <main>
            <main className={main_message_scss.sections}>
                <header className={main_message_scss.header}>Аккаунт</header>
                <p className={main_message_scss.p}>
                    На Вашу почту было отправлено письмо. Для продолжения перейдите по ссылке, указанной в письме
                </p>
                <button className={'button_main_color'} onClick={() => router.push(Auth_path.LOGIN)}>
                    Назад
                </button>
            </main>
        </main>
    )
}