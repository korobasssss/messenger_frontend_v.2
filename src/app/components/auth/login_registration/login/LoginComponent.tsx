import authReg from '@/app/scss/for_components/auth/auth_reg.module.scss'
import '@/app/scss/global/globals.scss'
import {LoginComponentInterface} from "@/app/interfaces/auth/authInterface";

export const LoginComponent = (props: LoginComponentInterface) => {
    return (
        <main className={authReg.rout}>
            <section className={authReg.form}>
                <section className={authReg.inputs}>
                    <input value={props.input_login}
                           onChange={(event) => props.setInput_login(event.target.value)}
                           placeholder={'Электронный адрес или никнейм'}/>
                    <input type={'password'}
                        value={props.input_password}
                           onChange={(event) => props.setInput_password(event.target.value)}
                           placeholder={'Пароль'}/>
                </section>
                <button className={'button_main_color'} onClick={() => props.setEnterPressed(true)}>
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