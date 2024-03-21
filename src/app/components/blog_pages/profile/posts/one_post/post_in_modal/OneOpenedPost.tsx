import {
    PostDataComponent_forModalWindow
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_photo_section/PostDataComponent_forModalWindow";
import {useEffect, useState} from "react";
import {OnePhotoInterface, UserDataForPostInterface} from "@/app/interfaces/photo/photoInterface";
import {
    OneOpenedPostComponent
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_modal/OneOpenedPostComponent";
import {usePathname, useRouter} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import Cookies from "js-cookie";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const OneOpenedPost = (props: OnePhotoInterface & UserDataForPostInterface) => {
    const pathname = usePathname().split('/')
    const currPathname = '/' + pathname[4]

    const [isAction, setIsAction] = useState(false)

    const router = useRouter()

    useEffect(() => {
        props.getOnePost(Cookies.get(Cookie_names.ID_POST) as string)
    }, [])

    useEffect(() => {
        if (isAction) {
            props.getOnePost(Cookies.get(Cookie_names.ID_POST) as string)
        }
        setIsAction(false)
    }, [isAction])


    const toProfile = () => {
        Cookies.remove(Cookie_names.ID_POST)
        router.push(MAIN_PATH + Cookies.get(Cookie_names.ID_CURRENT) + Main_path.PROFILE)
    }

    if (currPathname === Main_path.PHOTO || currPathname === '/' + Cookies.get(Cookie_names.ID_PHOTO)) {
        return <PostDataComponent_forModalWindow onePostOpened={props.onePostOpened}
                                                 avatarUrl={props.avatarUrl}
                                                 name={props.name}
                                                 nickname={props.nickname}
                                                 toProfile={toProfile}
                                                 setAction={setIsAction}/>
    } else if (currPathname === Profile_path.PROFILE_ONE_POST) {
        return <OneOpenedPostComponent onePostOpened={props.onePostOpened}
                                       avatarUrl={props.avatarUrl}
                                       name={props.name}
                                       nickname={props.nickname}
                                       toProfile={toProfile}
                                       setAction={setIsAction}/>
    }

}