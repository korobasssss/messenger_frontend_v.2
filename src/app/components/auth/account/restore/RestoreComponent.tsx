import Image from "next/image";
import '@/app/scss/global/globals.scss'
import default_avatar from '@/assets/common/default_avatar.svg'
import restore_scss from '@/app/scss/for_components/auth/restore.module.scss'
import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";
import {RestoreInterfaceComponent} from "@/app/interfaces/auth/authInterface";

export const RestoreComponent = () => {
    const router = useRouter()

    return (
        <main className={restore_scss.route}>
            <div className={restore_scss.important_part}>Восстановить аккаунт?</div>
            <p>Откройте письмо на вашей почте и перейдите по ссылке</p>
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