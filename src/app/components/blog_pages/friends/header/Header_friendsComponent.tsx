import aside_scss from "@/app/scss/for_components/blog_pages/profile/aside.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/friends/search_icon.svg";

import header_friends_scss from '@/app/scss/for_components/blog_pages/friends/header_friends.module.scss'
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Friends_path} from "@/app/paths/friends";
import {HeaderComponentInterface} from "@/app/interfaces/friends/friendsInterface";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";

export const Header_friendsComponent = (props: HeaderComponentInterface) => {
    const [isActiveIndex, setActiveIndex] = useState(-1)
    const router = useRouter()

    useEffect(() => {
        switch (isActiveIndex) {
            case 0 : {
                router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.USERS + Friends_path.FRIENDS_USER)
                props.getFriends()
                break
            }
            case 1 : {
                router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.USERS + Friends_path.SUBSCRIPTIONS_USER)
                props.getSubscribers()
                break
            }
            case 2 : {
                router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.USERS + Friends_path.SUBSCRIBERS_USER)
                props.getSubscriptions()
                break
            }
            case 3 : {
                router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.USERS + Friends_path.SEARCH)
                props.getSearch()
                break
            }
        }

    }, [isActiveIndex, router, props])

    return ( // todo  я думаю тут также можно из store подтянуть данные чтобы красиво было
        <nav className={header_friends_scss.route}>
            <ul className={header_friends_scss.buttons}>
                <li>
                    <button className={'button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button}
                            onClick={() => setActiveIndex(0)}>
                        <div className={aside_scss.name}>Друзья</div>
                        <div className={aside_scss.name + ' ' + aside_scss.count}>{props.countFriends}</div>
                    </button>
                </li>
                <li>
                    <button className={'button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button}
                            onClick={() => setActiveIndex(1)}>
                        <div className={aside_scss.name}>Подписки</div>
                        <div className={aside_scss.name + ' ' + aside_scss.count}>{props.countSubscriptions}</div>
                    </button>
                </li>
                <li>
                    <button className={'button_3rd_plane ' + aside_scss.header + ' ' +
                                        header_friends_scss.button}
                            onClick={() => setActiveIndex(2)}>
                        <div className={aside_scss.name}>Подписчики</div>
                        <div className={aside_scss.name + ' ' + aside_scss.count}>{props.countSubscribers}</div>
                    </button>
                </li>
            </ul>
            <button className={'button_3rd_plane ' + aside_scss.header}
                    onClick={() => setActiveIndex(3)}>
                <Image src={search_icon} alt={'search'}/>
            </button>
        </nav>
    )
}