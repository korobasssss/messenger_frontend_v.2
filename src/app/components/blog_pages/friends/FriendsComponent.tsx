import {OneUser} from "@/app/components/blog_pages/friends/OneUser";

import friends_scss from '@/app/scss/for_components/blog_pages/friends/friends.module.scss'
import '@/app/scss/global/globals.scss'

import {Header_friendsComponent} from "@/app/components/blog_pages/friends/Header_friendsComponent";

export const FriendsComponent = () => {
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
            </section>


        </section>
    )
}