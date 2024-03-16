import settings_scss from '@/app/scss/for_components/blog_pages/settings/settings.module.scss'
import '@/app/scss/global/globals.scss'

import Image from "next/image";
import edit_icon from '@/assets/icons/settings/edit.svg'
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {Settings_path} from "@/app/paths/settings";
import {DeleteAccountComponent} from "@/app/components/blog_pages/settings/settings/DeleteAccountComponent";

export const SettingsComponent = () => {
    const pathname = usePathname()
    const router = useRouter()

    const [isEmailEdit, setEmailEdit] = useState(false)
    const [isPasswordEdit, setPasswordEdit] = useState(false)
    const [isPasswordEditCode, setPasswordEditCode] = useState(false)


    return (
        <section className={settings_scss.page}>
            <main className={settings_scss.route}>
                <section className={settings_scss.form}>
                    <section className={settings_scss.form_elements}>
                        <section className={settings_scss.section}>
                            <div className={settings_scss.section_name}>Электронный адрес</div>
                            <section className={settings_scss.section_data_or_edit}>
                                {isEmailEdit ?
                                    <section className={settings_scss.section_edit}>
                                        <section className={settings_scss.input_section}>
                                            <input placeholder={'Новый электронный адрес'}/>
                                            <input placeholder={'Подтвердить пароль'}/>
                                        </section>
                                        <footer className={settings_scss.section_footer}>
                                            <button className={'button_main_color'}>
                                                Сохранить
                                            </button>
                                            <button className={'button_cancel'}
                                                    onClick={() => setEmailEdit(false)}>
                                                Отменить
                                            </button>
                                        </footer>
                                    </section>
                                    :
                                    <div className={settings_scss.section_data}>simon@mail.com</div>
                                }
                            </section>
                        </section>
                        <button className={'button_3rd_plane'} onClick={() => setEmailEdit(true)}>
                            <Image src={edit_icon} alt={'edit'}/>
                        </button>
                    </section>
                    <section className={settings_scss.form_elements}>
                        <section className={settings_scss.section}>
                            <div className={settings_scss.section_name}>Пароль</div>
                            <section className={settings_scss.section_data_or_edit}>
                                {isPasswordEdit ?
                                    isPasswordEditCode ?
                                        <section className={settings_scss.section_edit}>
                                            <section className={settings_scss.input_section}>
                                                <input placeholder={'Код'}/>
                                                <input placeholder={'Новый пароль'}/>
                                                <input placeholder={'Подтвердить новый пароль'}/>
                                            </section>
                                            <footer className={settings_scss.section_footer}>
                                                <button className={'button_main_color'}
                                                        onClick={() => setPasswordEditCode(true)}>
                                                    Далее
                                                </button>
                                                <button className={'button_cancel'}
                                                        onClick={() => {
                                                            setPasswordEdit(false)
                                                            setPasswordEditCode(false)
                                                        }}>
                                                    Отменить
                                                </button>
                                            </footer>
                                        </section>
                                        :
                                        <section className={settings_scss.section_edit}>
                                            <p>Подтвердите Ваш пароль. Вам будет выслан код на электронный адрес бла бла
                                                бла</p>
                                            <input placeholder={'Пароль'}/>
                                            <footer className={settings_scss.section_footer}>
                                                <button className={'button_main_color'}
                                                        onClick={() => setPasswordEditCode(true)}>
                                                    Далее
                                                </button>
                                                <button className={'button_cancel'}
                                                        onClick={() => setPasswordEdit(false)}>
                                                    Отменить
                                                </button>
                                            </footer>
                                        </section>
                                    :
                                    <div className={settings_scss.section_data}>***************</div>
                                }
                            </section>
                        </section>
                        <button className={'button_3rd_plane'} onClick={() => setPasswordEdit(true)}>
                            <Image src={edit_icon} alt={'edit'}/>
                        </button>
                    </section>
                </section>
                <footer className={settings_scss.footer}>
                    <button className={'button_3rd_plane'} onClick={() => router.push(Settings_path.SETTINGS_DELETE_ACCOUNT)}>
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