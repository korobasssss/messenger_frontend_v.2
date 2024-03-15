import {OneUser} from "@/app/components/blog_pages/friends/OneUser";

import friends_scss from '@/app/scss/for_components/blog_pages/friends/friends.module.scss'
import '@/app/scss/global/globals.scss'

import {Header_friendsComponent} from "@/app/components/blog_pages/friends/Header_friendsComponent";
import {Friends_path} from "@/app/paths/friends";
import {usePathname, useRouter} from "next/navigation";

export const FriendsComponent = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <section className={friends_scss.page}>
            <section className={friends_scss.route}>
                <Header_friendsComponent/>
                <ul className={friends_scss.users}>
                    <li>
                        <OneUser/>
                    </li>
                    <li>
                        <OneUser/>
                    </li>
                    <li>
                        <OneUser/>
                    </li>
                </ul>
                {/*<section className={friends_scss.no_users}>*/}
                {/*    {pathname === Friends_path.FRIENDS_USER ?*/}
                {/*        <div className={friends_scss.no_friends}>*/}
                {/*            Нет друзей...*/}
                {/*            <button className={'button_3rd_plane ' + friends_scss.find_friends}*/}
                {/*                    onClick={() => router.push(Friends_path.SEARCH)}>*/}
                {/*                Найти*/}
                {/*            </button>*/}
                {/*        </div>:*/}
                {/*        pathname === Friends_path.SUBSCRIPTIONS_USER ?*/}
                {/*            <div>*/}
                {/*                Нет подписок...*/}
                {/*            </div>:*/}
                {/*            pathname === Friends_path.SUBSCRIBERS_USER ?*/}
                {/*                <div>*/}
                {/*                    Нет подписчиков...*/}
                {/*                </div>: null}*/}
                {/*</section>*/}
            </section>


        </section>
    )
}