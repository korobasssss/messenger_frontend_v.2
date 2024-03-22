import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";
import '@/app/scss/global/globals.scss'

import delete_account_scss from '@/app/scss/for_components/blog_pages/settings/delete_account.module.scss'
import {useEffect, useState} from "react";
import {DeleteAccountComponentInterface} from "@/app/interfaces/settings/deleteAccount";

export const DeleteAccountComponent = (props: DeleteAccountComponentInterface) => {

    const [isButtonDeletePassed, setButtonDeletePassed] = useState(false)

    const pressedDeleteButton = () => {
        switch (isButtonDeletePassed) {
            case true : {
                setButtonDeletePassed(false)
                props.setButtonDeleteAccountPressed(true)
                break
            }

            case false : {
                setButtonDeletePassed(true)
                break
            }
        }
    }


    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => props.toSettings()}></section>
            <section className={delete_account_scss.route}>
                <header className={delete_account_scss.header}>
                    Удаление аккаунта
                </header>
                {isButtonDeletePassed ?
                    <section className={delete_account_scss.second_step}>
                        <p>Для подтверждения действия, введите Ваш пароль</p>
                        <input type={'password'}
                               value={props.input_password}
                               onChange={(event) => props.setInput_password(event.target.value)}
                               placeholder={'Пароль'}/>
                    </section>
                    :
                    <section className={delete_account_scss.first_step}>
                        <p>Вы уверены, что хотите удалить аккаунт? Восстановить его можно
                            будет в течении 3 месяцев
                        </p>
                    </section>
                }
                <footer className={delete_account_scss.footer}>
                    <button className={delete_account_scss.button_cancel}
                            onClick={() => {
                                setButtonDeletePassed(false)
                                props.toSettings()
                            }}>
                        Отмена
                    </button>
                    <button className={delete_account_scss.button_delete}
                            onClick={pressedDeleteButton}>
                        Удалить
                    </button>
                </footer>
            </section>
        </section>
    )
}