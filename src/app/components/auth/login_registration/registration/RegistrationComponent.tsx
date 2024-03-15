import authReg from '@/app/scss/for_components/auth/auth_reg.module.scss'
export const RegistrationComponent = () => {
    return (
        <main>
            <section className={authReg.form}>
                <section className={authReg.inputs}>
                    <input placeholder={'Никнейм'}/>
                    <input placeholder={'Электронный адрес'}/>
                    <input placeholder={'Пароль'}/>
                    <input placeholder={'Подтвердить пароль'}/>
                </section>
                <button className={'button_main_color'}>Зарегистрироваться</button>
            </section>
        </main>
    )
}