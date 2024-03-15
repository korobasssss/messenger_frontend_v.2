"use client"

import {useRouter} from "next/navigation";
import Image from "next/image";
import title_icon from '@/assets/icons/nav/title_icon.svg'

import '@/app/scss/global/globals.scss'
import nav_scss from '@/app/scss/for_components/blog_pages/navigation.module.scss'

import profile_icon from '@/assets/icons/nav/profile_icon.svg'
import friends_icon from '@/assets/icons/nav/friends_icon.svg'
import settings_icon from '@/assets/icons/nav/settings_icon.svg'
import more_icon from '@/assets/icons/nav/more_icon.svg'
import more_arrow_close_icon from '@/assets/icons/nav/more_arrow_close_icon.svg'
import more_arrow_open_icon from '@/assets/icons/nav/more_arrow_open_icon.svg'
import {Profile_path} from "@/app/paths/profile";
import {Friends_path} from "@/app/paths/friends";
import {Settings_path} from "@/app/paths/settings";
import {Auth_path} from "@/app/paths/auth";
import {useState} from "react";

export const NavigationComponent = () => { // todo потом добавить все разделы в редакс вместе с иконками (все кроме еще)
    const router = useRouter()
    const [isMoreSectionOpened, setMoreSectionOpened] = useState(false)
    
    return (
        <nav className={nav_scss.route}>
            <header className={nav_scss.header_section}>
                <button className={'button_3rd_plane ' + nav_scss.header_button}
                        onClick={() => router.push(Profile_path.PROFILE_USER)}>
                    <Image src={title_icon} className={nav_scss.title_icon} alt={'title icon'}/>
                    <div className={nav_scss.header}>SimOn</div>
                </button>
            </header>
            <ul className={nav_scss.buttons}>
                <li>
                    <button className={'button_3rd_plane ' + nav_scss.nav_button}
                            onClick={() => router.push(Profile_path.PROFILE_USER)}>
                        <Image src={profile_icon} className={nav_scss.icon} alt={'icon'}/>
                        <div className={nav_scss.text_button}>Профиль</div>
                    </button>
                </li>
                <li>
                    <button className={'button_3rd_plane ' + nav_scss.nav_button}
                            onClick={() => router.push(Friends_path.FRIENDS_USER)}>
                        <Image src={friends_icon} className={nav_scss.icon} alt={'icon'}/>
                        <div className={nav_scss.text_button}>Друзья</div>
                    </button>
                </li>
                <li>
                    <button className={'button_3rd_plane ' + nav_scss.nav_button}
                            onClick={() => router.push(Settings_path.SETTINGS)}>
                        <Image src={settings_icon} className={nav_scss.icon} alt={'icon'}/>
                        <div className={nav_scss.text_button}>Настройки</div>
                    </button>
                </li>
                <li>
                    <button className={'button_3rd_plane ' + nav_scss.more_button}
                            onClick={() => setMoreSectionOpened(!isMoreSectionOpened)}>
                        <Image src={more_icon} className={nav_scss.icon} alt={'icon'}/>
                        <div className={nav_scss.text_button}>Еще</div>
                        <Image src={isMoreSectionOpened ? more_arrow_open_icon :more_arrow_close_icon}
                               className={nav_scss.arrow} alt={'just arrow'}/>
                    </button>
                    {isMoreSectionOpened ?
                        <section className={nav_scss.more_section}>
                            <button className={'button_3rd_plane ' + nav_scss.enter} onClick={() => router.push(Auth_path.LOGIN)}>
                                Выйти
                            </button>
                        </section>
                        : null}

                </li>
            </ul>
        </nav>
    )
}