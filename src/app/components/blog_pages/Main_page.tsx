"use client"

import {Main_path} from "@/app/paths/main";
import {NavigationComponent} from "@/app/components/blog_pages/navigation/NavigationComponent";
import {usePathname} from "next/navigation";
import {ProfileComponent} from "@/app/components/blog_pages/profile/profile/ProfileComponent";
import {FriendsComponent} from "@/app/components/blog_pages/friends/FriendsComponent";
import {SettingsComponent} from "@/app/components/blog_pages/settings/settings/SettingsComponent";

import main_blog_pages_scss from '@/app/scss/for_components/blog_pages/main_blog_pages.module.scss'
import {PhotoComponent} from "@/app/components/blog_pages/profile/photo/PhotoComponent";

export const Main_page = () => {
    const pathname = usePathname()
    const currPathname = '/' + pathname.split('/')[1] + '/' + pathname.split('/')[2]

    console.log(currPathname)

    return (
        <section className={main_blog_pages_scss.page}>
            <main className={main_blog_pages_scss.route}>
                <NavigationComponent/>
                {currPathname === Main_path.PROFILE ? <ProfileComponent/> :
                    currPathname === Main_path.FRIENDS ? <FriendsComponent/> :
                        currPathname === Main_path.PHOTO ? <PhotoComponent/> :
                            currPathname === Main_path.SETTINGS ? <SettingsComponent/> : null}
            </main>
        </section>

    )
}