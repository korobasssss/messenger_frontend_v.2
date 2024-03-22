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
import {Friends_path} from "@/app/paths/friends";
import {useState} from "react";
import {MAIN_PATH, Main_path, MAIN_PATH_MY} from "@/app/paths/main";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const NavigationComponent = (props: {logout(router: AppRouterInstance): void}) => { // todo потом добавить все разделы в редакс вместе с иконками (все кроме еще)
    const router = useRouter()
    const [isMoreSectionOpened, setMoreSectionOpened] = useState(false)

    const changeCookieId = () => {
        Cookies.set('id_current', Cookies.get(Cookie_names.ID) as string)
    }
    
    return (
        <nav className={nav_scss.route}>
            <header className={nav_scss.header_section}>
                <button className={'button_3rd_plane ' + nav_scss.header_button}
                        onClick={() => {
                            changeCookieId()
                            router.push(MAIN_PATH  + Cookies.get(Cookie_names.ID) + Main_path.PROFILE)
                        }}>
                    <Image src={title_icon} className={nav_scss.title_icon} alt={'title icon'}/>
                    <div className={nav_scss.header}>SimOn</div>
                </button>
            </header>
            <ul className={nav_scss.buttons}>
                <li>
                    <button className={'button_3rd_plane ' + nav_scss.nav_button}
                            onClick={() => {
                                changeCookieId()
                                router.push(MAIN_PATH  + Cookies.get(Cookie_names.ID) + Main_path.PROFILE)}}>
                        <Image src={profile_icon} className={nav_scss.icon} alt={'icon'}/>
                        <div className={nav_scss.text_button}>Профиль</div>
                    </button>
                </li>
                <li>
                    <button className={'button_3rd_plane ' + nav_scss.nav_button}
                            onClick={() => {
                                changeCookieId()
                                router.push(MAIN_PATH  + Cookies.get(Cookie_names.ID) + Main_path.USERS + Friends_path.FRIENDS_USER)}
                            }>
                        <Image src={friends_icon} className={nav_scss.icon} alt={'icon'}/>
                        <div className={nav_scss.text_button}>Друзья</div>
                    </button>
                </li>
                <li>
                    <button className={'button_3rd_plane ' + nav_scss.nav_button}
                            onClick={() => {
                                changeCookieId()
                                router.push(MAIN_PATH + Cookies.get(Cookie_names.ID) + Main_path.SETTINGS)}}>
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
                            <button className={'button_3rd_plane ' + nav_scss.enter} onClick={() => props.logout(router)}>
                                Выйти
                            </button>
                        </section>
                        : null}

                </li>
            </ul>
        </nav>
    )
}