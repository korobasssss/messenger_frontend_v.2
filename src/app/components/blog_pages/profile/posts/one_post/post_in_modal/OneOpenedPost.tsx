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

export const OneOpenedPost = (props: OnePhotoInterface & UserDataForPostInterface) => {
    const pathname = usePathname().split('/')
    const currPathname = '/' + pathname[4]

    const [isAction, setIsAction] = useState(false)

    const router = useRouter()

    useEffect(() => {
        props.getOnePost(Cookies.get('id_post') as string)
    }, [])

    useEffect(() => {
        if (isAction) {
            props.getOnePost(Cookies.get('id_post') as string)
        }
        setIsAction(false)
    }, [isAction])


    const toProfile = () => {
        Cookies.remove('id_post')
        router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.PROFILE)
    }

    if (currPathname === Main_path.PHOTO || currPathname === '/' + Cookies.get('id_photo')) {
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