import authReg from '@/app/scss/for_components/auth/auth_reg.module.scss'
import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";

import '@/app/scss/global/globals.scss'

export const LoginComponent = () => {
    const router = useRouter()
    return (
        <main>
            <section className={authReg.form}>
                <section className={authReg.inputs}>
                    <input placeholder={'Электронный адрес или никнейм'}/>
                    <input placeholder={'Пароль'}/>
                </section>
                <button className={'button_main_color'} onClick={() => router.push(Auth_path.LOGIN)}>
                    Войти
                </button>
            </section>
            <footer className={authReg.more}>
                <button className={'button_3rd_plane'} onClick={() => router.push(Auth_path.FORGOT_PASSWORD)} >
                    Забыли пароль?
                </button>
                <section className={authReg.or}>
                    <div className={authReg.likeHr}></div>
                    или
                    <div className={authReg.likeHr}></div>
                </section>
                <button className={'button_not_main_color'}
                        onClick={() => router.push(Auth_path.REGISTRATION)}>
                    Зарегистрироваться
                </button>
            </footer>
        </main>
    )
}