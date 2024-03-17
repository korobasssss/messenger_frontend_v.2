import authReg from '@/app/scss/for_components/auth/auth_reg.module.scss'
import {useState} from "react";
import {RegistrationInterface} from "@/app/interfaces/auth/authInterface";

export const RegistrationComponent = (props: RegistrationInterface) => {
    const [input_nickname, setInput_nickname] = useState('')
    const [input_email, setInput_email] = useState('')
    const [input_password, setInput_password] = useState('')
    const [input_confirm_password, setInput_confirm_password] = useState('')
    const [input_name, setInput_name] = useState('')
    const [input_date, setInput_date] = useState('')

    return (
        <main>
            <section className={authReg.form}>
                <section className={authReg.inputs}>
                    <input value={input_nickname}
                           onChange={(event) => setInput_nickname(event.target.value)}
                           placeholder={'Никнейм'}/>
                    <input value={input_email}
                           onChange={(event) => setInput_email(event.target.value)}
                           placeholder={'Электронный адрес'}/>
                    <input value={input_name}
                           onChange={(event) => setInput_name(event.target.value)}
                           placeholder={'Имя'}/>
                    <input type={'date'}
                           value={input_date}
                           onChange={(event) => setInput_date(event.target.value)}
                           placeholder={'Дата рождения'}/>
                    <input value={input_password}
                           onChange={(event) => setInput_password(event.target.value)}
                           placeholder={'Пароль'}/>
                    <input value={input_confirm_password}
                           onChange={(event) => setInput_confirm_password(event.target.value)}
                           placeholder={'Подтвердить пароль'}/>
                </section>
                <button className={'button_main_color'}
                        onClick={() =>
                            props.registration(input_nickname, input_email, input_password,
                                               input_confirm_password, input_name, input_date)}>
                    Зарегистрироваться
                </button>
            </section>
        </main>
    )
}