"use client"

import {Main_path} from "@/app/paths/main";
import {NavigationComponent} from "@/app/components/blog_pages/navigation/NavigationComponent";
import {usePathname} from "next/navigation";
import {SettingsComponent} from "@/app/components/blog_pages/settings/settings/SettingsComponent";

import main_blog_pages_scss from '@/app/scss/for_components/blog_pages/main_blog_pages.module.scss'
import {ProfileContainer} from "@/app/components/blog_pages/profile/profile/profile/ProfileContainer";
import {PhotoContainer} from "@/app/components/blog_pages/profile/photo/PhotoContainer";
import {FriendsContainer} from "@/app/components/blog_pages/friends/friends/FriendsContainer";


export const Main_page = () => {
    const pathname = usePathname()
    const currPathname = '/' + pathname.split('/')[3]

    return (
        <section className={main_blog_pages_scss.page}>
            <main className={main_blog_pages_scss.route}>
                <NavigationComponent/>
                {currPathname === Main_path.PROFILE ? <ProfileContainer/> :
                    currPathname === Main_path.USERS ? <FriendsContainer/> :
                        currPathname === Main_path.PHOTO ? <PhotoContainer/> :
                            currPathname === Main_path.SETTINGS ? <SettingsComponent/> : null}
            </main>
        </section>

    )
}