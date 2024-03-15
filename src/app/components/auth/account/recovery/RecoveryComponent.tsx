import '@/app/scss/global/globals.scss'
import recovery_scss from '@/app/scss/for_components/auth/recovery.module.scss'

export const RecoveryComponent = () => {
    return (
        <main className={recovery_scss.route}>
            <p>
                На Ваш электронный адрес будет отправлено письмо с новым паролем
            </p>
            <input placeholder={'Электронный адрес или никнейм'}/>
            <button className={'button_main_color'}>
                Сбросить пароль
            </button>
        </main>
    )
}