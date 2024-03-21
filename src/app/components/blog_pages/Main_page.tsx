"use client"

import {Main_path} from "@/app/paths/main";
import {NavigationComponent} from "@/app/components/blog_pages/navigation/NavigationComponent";
import {usePathname} from "next/navigation";
import {SettingsComponent} from "@/app/components/blog_pages/settings/settings/SettingsComponent";

import main_blog_pages_scss from '@/app/scss/for_components/blog_pages/main_blog_pages.module.scss'
import {ProfileContainer} from "@/app/components/blog_pages/profile/profile/profile/ProfileContainer";
import {PhotoContainer} from "@/app/components/blog_pages/profile/photo/PhotoContainer";
import {FriendsContainer} from "@/app/components/blog_pages/friends/friends/FriendsContainer";
import Cookies from "js-cookie";
import {SettingsContainer} from "@/app/components/blog_pages/settings/settings/SettingsContainer";
import {NavigationContainer} from "@/app/components/blog_pages/navigation/NavigationContainer";


export const Main_page = () => {
    const pathname = usePathname().split('/')
    const currPathname = '/' + pathname[3]
    const currPathWithId =  '/' + pathname[pathname.length - 1]

    return (
        <section className={main_blog_pages_scss.page}>
            <main className={main_blog_pages_scss.route}>
                <NavigationContainer/>
                {currPathname === Main_path.PROFILE || currPathWithId === '/' + Cookies.get('id_post')? <ProfileContainer/> :
                    currPathname === Main_path.USERS ? <FriendsContainer/> :
                        currPathname === Main_path.PHOTO || currPathWithId === '/' + Cookies.get('id_photo') ? <PhotoContainer/> :
                            currPathname === Main_path.SETTINGS ? <SettingsContainer/> : null}
            </main>
        </section>

    )
}