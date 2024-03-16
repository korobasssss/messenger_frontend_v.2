import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";
import '@/app/scss/global/globals.scss'
import {useRouter} from "next/navigation";

import delete_account_scss from '@/app/scss/for_components/blog_pages/settings/delete_account.module.scss'
import {Settings_path} from "@/app/paths/settings";
import {Auth_path} from "@/app/paths/auth";

export const DeleteAccountComponent = () => {
    const router = useRouter()

    return (
        <section  className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => router.push(Settings_path.SETTINGS)}></section>
            <section className={delete_account_scss.route}>
                <header className={delete_account_scss.header}>
                    Удаление аккаунта
                </header>
                <p>Вы уверены, что хотите удалить аккаунт? Восстановить его можно будет в течении 3 месяцев</p>
                <footer className={delete_account_scss.footer}>
                    <button className={delete_account_scss.button_cancel}
                            onClick={() => router.push(Settings_path.SETTINGS)}>
                        Отмена
                    </button>
                    <button className={delete_account_scss.button_delete}
                            onClick={() => router.push(Auth_path.LOGIN)}>
                        Удалить
                    </button>
                </footer>
            </section>
        </section>
    )
}