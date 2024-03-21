import settings_scss from '@/app/scss/for_components/blog_pages/settings/settings.module.scss'
import '@/app/scss/global/globals.scss'

import Image from "next/image";
import edit_icon from '@/assets/icons/settings/edit.svg'
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {Settings_path} from "@/app/paths/settings";
import {DeleteAccountComponent} from "@/app/components/blog_pages/settings/settings/DeleteAccountComponent";
import {SettingsComponentInterface} from "@/app/interfaces/settings/settingsInterface";
import Cookies from "js-cookie";

export const SettingsComponent = (props: SettingsComponentInterface) => {
    const pathname = usePathname()
    const router = useRouter()


    const clear = () => {
        props.setInput_email('')
        props.setInput_password_email('')

        props.setInput_code('')
        props.setInput_password_new('')
        props.setInput_password_new_confirm('')
        props.setInput_password('')

        props.setMessage('')
    }

    return (
        <section className={settings_scss.page}>
            <main className={settings_scss.route}>
                <section className={settings_scss.form}>
                    <section className={settings_scss.form_elements}>
                        <section className={settings_scss.section}>
                            <div className={settings_scss.section_name}>Электронный адрес</div>
                            <section className={settings_scss.section_data_or_edit}>
                                {props.isEmailEdit ?
                                    <section className={settings_scss.section_edit}>
                                        <section className={settings_scss.input_section}>
                                            <input value={props.input_email}
                                                   onChange={(event) => props.setInput_email(event.target.value)}
                                                   placeholder={'Новый электронный адрес'}/>
                                            <input type={'password'}
                                                   value={props.input_password_email}
                                                   onChange={(event) => props.setInput_password_email(event.target.value)}
                                                   placeholder={'Подтвердить пароль'}/>
                                        </section>
                                        <footer className={settings_scss.section_footer}>
                                            <button className={'button_main_color'} onClick={() => {
                                                props.setButtonChangeEmail(true)
                                            }}>
                                                Сохранить
                                            </button>
                                            <button className={'button_cancel'}
                                                    onClick={() => {
                                                        clear()
                                                        props.setEmailEdit(false)
                                                    }}>
                                                Отменить
                                            </button>
                                        </footer>
                                        <p className={settings_scss.message}>{props.message}</p>
                                    </section>
                                    :
                                    <div className={settings_scss.section_data}>{Cookies.get('email')}</div>
                                }
                            </section>
                        </section>
                        <button className={'button_3rd_plane'} onClick={() => {
                            props.setPasswordEdit(false)
                            props.setPasswordEditCode(false)
                            props.setEmailEdit(true)
                        }
                        }>
                            <Image src={edit_icon} alt={'edit'}/>
                        </button>
                    </section>
                    <section className={settings_scss.form_elements}>
                        <section className={settings_scss.section}>
                            <div className={settings_scss.section_name}>Пароль</div>
                            <section className={settings_scss.section_data_or_edit}>
                                {props.isPasswordEdit ?
                                    props.isPasswordEditCode ?
                                        <section className={settings_scss.section_edit}>
                                            <section className={settings_scss.input_section}>
                                                <input type={'password'}
                                                       value={props.input_code}
                                                       onChange={(event) => props.setInput_code(event.target.value)}
                                                       placeholder={'Код'}/>
                                                <input type={'password'}
                                                       value={props.input_password_new}
                                                       onChange={(event) => props.setInput_password_new(event.target.value)}
                                                       placeholder={'Новый пароль'}/>
                                                <input type={'password'}
                                                       value={props.input_password_new_confirm}
                                                       onChange={(event) => props.setInput_password_new_confirm(event.target.value)}
                                                       placeholder={'Подтвердить новый пароль'}/>
                                            </section>
                                            <footer className={settings_scss.section_footer}>
                                                <button className={'button_main_color'}
                                                        onClick={() => {
                                                            props.setButtonChangePassword(true)
                                                            props.setPasswordEditCode(true)
                                                        }}>
                                                    Далее
                                                </button>
                                                <button className={'button_cancel'}
                                                        onClick={() => {
                                                            clear()
                                                            props.setPasswordEdit(false)
                                                            props.setPasswordEditCode(false)
                                                        }}>
                                                    Отменить
                                                </button>
                                            </footer>
                                            <p className={settings_scss.message}>{props.message}</p>
                                        </section>
                                        :
                                        <section className={settings_scss.section_edit}>
                                            <p>Подтвердите Ваш пароль. Вам будет выслан код на электронный адрес</p>
                                            <input type={'password'}
                                                   value={props.input_password}
                                                   onChange={(event) => props.setInput_password(event.target.value)}
                                                   placeholder={'Пароль'}/>
                                            <footer className={settings_scss.section_footer}>
                                                <button className={'button_main_color'}
                                                        onClick={() => {
                                                            props.setButtonSetOldPassword(true)
                                                        }
                                                        }>
                                                    Далее
                                                </button>
                                                <button className={'button_cancel'}
                                                        onClick={() => {
                                                            clear()
                                                            props.setPasswordEdit(false)
                                                        }}>
                                                    Отменить
                                                </button>
                                            </footer>
                                            <p className={settings_scss.message}>{props.message}</p>
                                        </section>
                                    :
                                    <div className={settings_scss.section_data}>***************</div>
                                }
                            </section>
                        </section>
                        <button className={'button_3rd_plane'} onClick={() => {
                            props.setEmailEdit(false)
                            props.setPasswordEditCode(false)
                            props.setPasswordEdit(true)
                        }}>
                            <Image src={edit_icon} alt={'edit'}/>
                        </button>
                    </section>
                </section>
                <footer className={settings_scss.footer}>
                    <button className={'button_3rd_plane'}
                            onClick={() => router.push(Settings_path.SETTINGS_DELETE_ACCOUNT)}>
                        Удалить учетную запись
                    </button>
                </footer>
            </main>
            <aside className={settings_scss.hidden_aside}></aside>

            {pathname === Settings_path.SETTINGS_DELETE_ACCOUNT ?
                <DeleteAccountComponent/>
                : null}
        </section>

    )
}