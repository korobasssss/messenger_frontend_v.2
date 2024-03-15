import aside_scss from "@/app/scss/for_components/blog_pages/profile/aside.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/friends/search_icon.svg";

import header_friends_scss from '@/app/scss/for_components/blog_pages/friends/header_friends.module.scss'
import {useEffect, useState} from "react";

export const Header_friendsComponent = () => {
    const [isActiveIndex, setActiveIndex] = useState(0)

    useEffect(() => {

    }, [isActiveIndex])

    return ( // todo  я думаю тут также можно из store подтянуть данные чтобы красиво было
        <nav className={header_friends_scss.route}>
            <ul className={header_friends_scss.buttons}>
                <li>
                    <button className={isActiveIndex === 0 ? header_friends_scss.activeButton +
                                        ' button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button :
                                        ' button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button}
                            onClick={() => setActiveIndex(0)}>
                        <div className={aside_scss.name}>Друзья</div>
                        <div className={aside_scss.name + ' ' + aside_scss.count}>10</div>
                    </button>
                </li>
                <li>
                    <button className={isActiveIndex === 1 ? header_friends_scss.activeButton +
                                        ' button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button :
                                        ' button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button}
                            onClick={() => setActiveIndex(1)}>
                        <div className={aside_scss.name}>Подписки</div>
                        <div className={aside_scss.name + ' ' + aside_scss.count}>10</div>
                    </button>
                </li>
                <li>
                    <button className={isActiveIndex === 2 ? header_friends_scss.activeButton +
                                        ' button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button :
                                        ' button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button}
                            onClick={() => setActiveIndex(2)}>
                        <div className={aside_scss.name}>Подписчики</div>
                        <div className={aside_scss.name + ' ' + aside_scss.count}>10</div>
                    </button>
                </li>
            </ul>
            <button className={'button_3rd_plane ' + aside_scss.header}>
                <Image src={search_icon} alt={'search'}/>
            </button>
        </nav>
    )
}