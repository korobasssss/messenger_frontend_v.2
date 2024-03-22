"use client"

import {Main_path} from "@/app/paths/main";
import {usePathname} from "next/navigation";

import main_blog_pages_scss from '@/app/scss/for_components/blog_pages/main_blog_pages.module.scss'
import {ProfileContainer} from "@/app/components/blog_pages/profile/profile/profile/ProfileContainer";
import {PhotoContainer} from "@/app/components/blog_pages/profile/photo/PhotoContainer";
import {FriendsContainer} from "@/app/components/blog_pages/friends/friends/FriendsContainer";
import Cookies from "js-cookie";
import {SettingsContainer} from "@/app/components/blog_pages/settings/settings/SettingsContainer";
import {NavigationContainer} from "@/app/components/blog_pages/navigation/NavigationContainer";
import {Cookie_names} from "@/redux/messages/cookie_names";
import {LoaderHOC} from "@/app/components/loader/LoaderHOC";
import {Profile_path} from "@/app/paths/profile";


export const Main_page = () => {
    const pathname = usePathname().split('/')
    const currPathname = '/' + pathname[3]
    const currPathWithId =  '/' + pathname[pathname.length - 1]
    const currPathWithIdPred =  '/' + pathname[pathname.length - 2]

    console.log(currPathname === Main_path.PROFILE || currPathWithId === '/' + Cookies.get(Cookie_names.ID_POST))

    return (
        <section className={main_blog_pages_scss.page}>
            <main className={main_blog_pages_scss.route}>
                <NavigationContainer/>
                {currPathname === Main_path.PROFILE || currPathWithId === '/' +
                Cookies.get(Cookie_names.ID_POST) && currPathWithIdPred === Profile_path.PROFILE_ONE_POST? <ProfileContainer/> :
                    currPathname === Main_path.USERS ? <FriendsContainer/> :
                        currPathname === Main_path.PHOTO || currPathWithId === '/' + Cookies.get(Cookie_names.ID_PHOTO) ? <PhotoContainer/> :
                            currPathname === Main_path.SETTINGS ? <SettingsContainer/> : null}
            </main>
        </section>

    )
}

export const Main_pageContainer = LoaderHOC(Main_page)