import {Friends_profileComponent} from "@/app/components/blog_pages/profile/profile/friends/Friends_profileComponent";
import {useEffect} from "react";
import {Friends_profileInterface} from "@/app/interfaces/profile/friends_profileInterface";
import {useRouter} from "next/navigation";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Friends_path} from "@/app/paths/friends";

export const Friends_profile = (props: Friends_profileInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getRndFriends()
    }, []);

    const toFriends = () => {
        router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.USERS + Friends_path.FRIENDS_USER)
    }

    return <Friends_profileComponent users={props.users}
                                     countFriends={props.countFriends}
                                     toFriends={toFriends}/>
}