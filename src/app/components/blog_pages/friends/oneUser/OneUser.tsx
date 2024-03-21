import {OneUserComponent} from "@/app/components/blog_pages/friends/oneUser/OneUserComponent";
import {OneUserInterface} from "@/app/interfaces/friends/friendsInterface";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Main_path, MAIN_PATH, MAIN_PATH_FOR_AUTH} from "@/app/paths/main";
import Cookies from "js-cookie";

export const OneUser = (props: OneUserInterface) => {
    const router = useRouter()

    const toProfile = () => {
        Cookies.set('id_current', props.oneUser.id)
        router.push(MAIN_PATH_FOR_AUTH + '/' + Cookies.get('id_current') + Main_path.PROFILE)
    }

    const action = (action: string) => {
        props.action(props.oneUser.id, action)
        props.setButtonActionPressed(true)
    }

    return <OneUserComponent oneUser={props.oneUser}
                             action={action}
                             toProfile={toProfile}/>


}