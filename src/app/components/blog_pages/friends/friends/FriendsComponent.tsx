import friends_scss from '@/app/scss/for_components/blog_pages/friends/friends.module.scss'
import '@/app/scss/global/globals.scss'

import {Header_friendsComponent} from "@/app/components/blog_pages/friends/header/Header_friendsComponent";
import {Friends_path} from "@/app/paths/friends";
import {usePathname, useRouter} from "next/navigation";
import {
    HeaderComponentInterface,
    userShortInfo,
    UsersInterfaceComponent
} from "@/app/interfaces/friends/friendsInterface";
import {OneUserContainer} from "@/app/components/blog_pages/friends/oneUser/OneUserContainer";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const FriendsComponent = (props: UsersInterfaceComponent & HeaderComponentInterface) => {
    const pathname = usePathname().split('/')
    const currPathname = '/' + pathname[pathname.length - 1]
    const router = useRouter()

    return (
        <section className={friends_scss.page}>
            <section className={friends_scss.route}>
                <Header_friendsComponent getFriends={props.getFriends}
                                         getSubscriptions={props.getSubscriptions}
                                         getSubscribers={props.getSubscribers}
                                         getSearch={props.getSearch}
                                         countFriends={props.countFriends}
                                         countSubscribers={props.countSubscriptions}
                                         countSubscriptions={props.countSubscribers}
                                         getCountFriends={props.getCountFriends}
                                         getCountSubscribers={props.getCountSubscribers}
                                         getCountSubscriptions={props.getCountSubscriptions}/>
                {props.users.length !== 0 ?
                    <ul className={friends_scss.users}>
                        {props.users.map((oneUser: userShortInfo) => {
                            return (
                                <li key={oneUser.id}>
                                    <OneUserContainer oneUser={oneUser}
                                                      setButtonActionPressed={props.setButtonActionPressed}/>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    <section className={friends_scss.no_users}>
                        {currPathname === Friends_path.FRIENDS_USER ?
                            <div className={friends_scss.no_friends}>
                                Нет друзей...
                                {Cookies.get(Cookie_names.ID_CURRENT) === Cookies.get(Cookie_names.ID) ?
                                    <button className={'button_3rd_plane ' + friends_scss.find_friends}
                                            onClick={() => router.push(MAIN_PATH + Cookies.get(Cookie_names.ID_CURRENT) + Main_path.USERS + Friends_path.SEARCH)}>
                                        Поиск
                                    </button>
                                    : null
                                }
                            </div> :
                            currPathname === Friends_path.SUBSCRIPTIONS_USER ?
                                <div>
                                    Нет подписок...
                                </div> :
                                currPathname === Friends_path.SUBSCRIBERS_USER ?
                                    <div>
                                        Нет подписчиков...
                                    </div> : null}
                    </section>
                }
            </section>
        </section>
    )
}