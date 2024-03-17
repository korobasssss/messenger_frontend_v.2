import authReg from '@/app/scss/for_components/auth/auth_reg.module.scss'

import '@/app/scss/global/globals.scss'
import {useState} from "react";
import {LoginComponentInterface} from "@/app/interfaces/auth/authInterface";

export const LoginComponent = (props: LoginComponentInterface) => {
    const [input_login, setInput_login] = useState('')
    const [input_password, setInput_password] = useState('')

    return (
        <main className={authReg.rout}>
            <section className={authReg.form}>
                <section className={authReg.inputs}>
                    <input value={input_login}
                           onChange={(event) => setInput_login(event.target.value)}
                           placeholder={'Электронный адрес или никнейм'}/>
                    <input value={input_password}
                           onChange={(event) => setInput_password(event.target.value)}
                           placeholder={'Пароль'}/>
                </section>
                <button className={'button_main_color'} onClick={() => props.enter(input_login, input_password)}>
                    Войти
                </button>
            </section>
            <footer className={authReg.more}>
                <button className={'button_3rd_plane'} onClick={() => props.recovery()}>
                    Забыли пароль?
                </button>
                <section className={authReg.or}>
                    <div className={authReg.likeHr}></div>
                    или
                    <div className={authReg.likeHr}></div>
                </section>
                <button className={'button_not_main_color'}
                        onClick={() => props.registration()}>
                    Зарегистрироваться
                </button>
            </footer>
        </main>
    )
}