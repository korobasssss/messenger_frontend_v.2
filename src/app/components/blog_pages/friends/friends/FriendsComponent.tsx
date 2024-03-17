import {OneUserComponent} from "@/app/components/blog_pages/friends/oneUser/OneUserComponent";

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

export const FriendsComponent = (props: UsersInterfaceComponent & HeaderComponentInterface) => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <section className={friends_scss.page}>
            <section className={friends_scss.route}>
                <Header_friendsComponent getFriends={props.getFriends}
                                         getSubscriptions={props.getSubscriptions}
                                         getSubscribers={props.getSubscribers}
                                         getSearch={props.getSearch}/>
                <ul className={friends_scss.users}>
                    {props.users.map((oneUser: userShortInfo) => {
                        return (
                            <li key={oneUser.id}>
                                <OneUserContainer oneUser={oneUser}/>
                            </li>
                        )
                    })}
                </ul>
                {props.users.length === 0 ?
                    <section className={friends_scss.no_users}>
                        {pathname === Friends_path.FRIENDS_USER ?
                            <div className={friends_scss.no_friends}>
                                Нет друзей...
                                <button className={'button_3rd_plane ' + friends_scss.find_friends}
                                        onClick={() => router.push(Friends_path.SEARCH)}>
                                    Найти
                                </button>
                            </div> :
                            pathname === Friends_path.SUBSCRIPTIONS_USER ?
                                <div>
                                    Нет подписок...
                                </div> :
                                pathname === Friends_path.SUBSCRIBERS_USER ?
                                    <div>
                                        Нет подписчиков...
                                    </div> : null}
                    </section>
                    : null}
            </section>
        </section>
    )
}