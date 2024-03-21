import '@/app/scss/global/globals.scss'
import restore_scss from '@/app/scss/for_components/auth/restore.module.scss'
import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";

export const RestoreComponent = () => {
    const router = useRouter()

    return (
        <main className={restore_scss.route}>
            <div className={restore_scss.important_part}>Восстановить аккаунт?</div>
            <p>Ваш аккаунт заблокирован. Вы хотите восстановить его?</p>
            <footer className={restore_scss.buttons_section}>
                <button className={'button_main_color'} onClick={() => router.push(Auth_path.ACTIVATION)}>
                    Восстановить
                </button>
                <button className={'button_cancel'} onClick={() => router.push(Auth_path.LOGIN)}>
                    Отменить
                </button>
            </footer>
        </main>
    )
}