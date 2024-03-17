import '@/app/scss/global/globals.scss'
import recovery_scss from '@/app/scss/for_components/auth/recovery.module.scss'
import {RecoveryInterface} from "@/app/interfaces/auth/authInterface";
import {useState} from "react";

export const RecoveryComponent = (props: RecoveryInterface) => {
    const [input_email, setInput_email] = useState('')

    return (
        <main className={recovery_scss.route}>
            <p>
                На Ваш электронный адрес будет отправлено письмо с новым паролем
            </p>
            <input value={input_email}
                   onChange={(event) => setInput_email(event.target.value)}
                placeholder={'Электронный адрес'}/>
            <button className={'button_main_color'} onClick={() => props.recovery(input_email)}>
                Сбросить пароль
            </button>
        </main>
    )
}