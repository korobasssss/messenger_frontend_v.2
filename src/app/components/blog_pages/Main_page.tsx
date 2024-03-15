"use client"

import {Main_path} from "@/app/paths/main";
import {NavigationComponent} from "@/app/components/blog_pages/navigation/NavigationComponent";
import {usePathname} from "next/navigation";
import {ProfileComponent} from "@/app/components/blog_pages/profile/profile/ProfileComponent";
import {FriendsComponent} from "@/app/components/blog_pages/friends/friends/FriendsComponent";
import {SettingsComponent} from "@/app/components/blog_pages/settings/settings/SettingsComponent";

import main_blog_pages_scss from '@/app/scss/for_components/blog_pages/main_blog_pages.module.scss'

export const Main_page = () => {
    const pathname = usePathname()
    const pathname_block = pathname.split('/')[1]

    return (
        <section className={main_blog_pages_scss.route}>
            <NavigationComponent/>
            {pathname_block === Main_path.PROFILE ? <ProfileComponent/> :
             pathname_block === Main_path.FRIENDS ? <FriendsComponent/> :
             pathname_block === Main_path.SETTINGS ? <SettingsComponent/> : null}
        </section>
    )
}