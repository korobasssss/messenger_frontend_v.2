import {OneUser} from "@/app/components/blog_pages/friends/OneUser";

import friends_scss from '@/app/scss/for_components/blog_pages/friends/friends.module.scss'
import '@/app/scss/global/globals.scss'
import aside_scss from "@/app/scss/for_components/blog_pages/profile/aside.module.scss";

import search_icon from '@/assets/icons/friends/search_icon.svg'
import Image from "next/image";
import {Header_friendsComponent} from "@/app/components/blog_pages/friends/Header_friendsComponent";

export const FriendsComponent = () => {
    return (
        <section className={friends_scss.page}>
            <section className={friends_scss.route}>
                <Header_friendsComponent/>
                <ul>
                    <li>
                        <OneUser/>
                    </li>
                </ul>
            </section>


        </section>
    )
}