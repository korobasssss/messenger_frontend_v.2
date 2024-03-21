import authReg from '@/app/scss/for_components/auth/auth_reg.module.scss'
import {RegistrationComponentInterface} from "@/app/interfaces/auth/authInterface";

export const RegistrationComponent = (props: RegistrationComponentInterface) => {
    return (
        <main>
            <section className={authReg.form}>
                <section className={authReg.inputs}>
                    <input value={props.input_nickname}
                           onChange={(event) => props.setInput_nickname(event.target.value)}
                           placeholder={'Никнейм'}/>
                    <input value={props.input_email}
                           onChange={(event) => props.setInput_email(event.target.value)}
                           placeholder={'Электронный адрес'}/>
                    <input value={props.input_name}
                           onChange={(event) => props.setInput_name(event.target.value)}
                           placeholder={'Имя'}/>
                    <input type={'date'}
                           value={props.input_date}
                           onChange={(event) => props.setInput_date(event.target.value)}
                           placeholder={'Дата рождения'}/>
                    <input type={'password'} value={props.input_password}
                           onChange={(event) => props.setInput_password(event.target.value)}
                           placeholder={'Пароль'}/>
                    <input type={'password'} value={props.input_confirm_password}
                           onChange={(event) => props.setInput_confirm_password(event.target.value)}
                           placeholder={'Подтвердить пароль'}/>
                </section>
                <button className={'button_main_color'}
                        onClick={() =>
                            props.setRegisterPressed(true)}>
                    Зарегистрироваться
                </button>
            </section>
        </main>
    )
}