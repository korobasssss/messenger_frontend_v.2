import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";
import {HeaderInterface} from "@/app/interfaces/profile/profileInterface";
import {useEffect} from "react";
import {Profile_path} from "@/app/paths/profile";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import {Friends_path} from "@/app/paths/friends";
import {Main_path, MAIN_PATH} from "@/app/paths/main";

export const Header_profile = (props: HeaderInterface) => {
    const router= useRouter()

    useEffect(() => {
        props.getNickname()
    }, [])

    useEffect(() => {
        props.getData()
    }, [])

    const edit_profile = () => {
        router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.PROFILE + Profile_path.PROFILE_EDIT)
    }

    const toFriends = () => {
        router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.USERS + Friends_path.FRIENDS_USER)
    }


    return <Header_profileComponent name={props.name}
                                    bio={props.bio}
                                    avatarUrl={props.avatarUrl}
                                    coverUrl={props.coverUrl}
                                    status={props.status}
                                    editProfile={edit_profile}
                                    nickname={props.nickname}
                                    toFriends={toFriends}/>
}