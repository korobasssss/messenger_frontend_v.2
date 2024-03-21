import {OnePostComponent} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostComponent";
import {OnePostInterfaces, OnePostUserDataInterface} from "@/app/interfaces/posts/postsInterfaceComponent";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {Main_path, MAIN_PATH, MAIN_PATH_FOR_AUTH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Profile_path} from "@/app/paths/profile";
import {OnePostInPhotoComponent} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostInPhotoComponent";

export const OnePost = (props: OnePostInterfaces & OnePostUserDataInterface) => {
    const router = useRouter()
    const pathname = usePathname().split('/')
    const currPathname = pathname[pathname.length - 1]

    const [isButtonDeletePostPressed, setIsButtonDeletePostPressed] = useState(false)
    const [isButtonLikePostPressed, setIsButtonLikePostPressed] = useState(false)

    useEffect(() => {
        if (isButtonDeletePostPressed) {
            props.deletePost(props.onePost.postId)
            setTimeout(() => {
                props.setAction(true)
            }, 100)
            if (currPathname === Cookies.get('id_post')) {
                toProfile()
            }
        }
        setIsButtonDeletePostPressed(false)
    }, [isButtonDeletePostPressed]);

    useEffect(() => {
        if (isButtonLikePostPressed) {
            props.likePost(props.onePost.postId)
            setTimeout(() => {
                props.setAction(true)
            }, 100)
        }
        setIsButtonLikePostPressed(false)
    }, [isButtonLikePostPressed]);


    const toOnePost = () => {
        Cookies.set('id_post', props.onePost.postId)
        router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.PROFILE + Profile_path.PROFILE_ONE_POST + '/' + Cookies.get('id_post'))
    }

    const toProfile = () => {
        Cookies.remove('id_post')
        router.push(MAIN_PATH_FOR_AUTH + '/' + Cookies.get('id_current') + Main_path.PROFILE)
    }

    if (currPathname === Cookies.get('id_photo')) {
        return <OnePostInPhotoComponent onePost={props.onePost}
                                        avatarUrl={props.avatarUrl}
                                        name={props.name}
                                        nickname={props.nickname}
                                        setIsButtonDeletePostPressed={setIsButtonDeletePostPressed}
                                        setIsButtonLikePostPressed={setIsButtonLikePostPressed}
                                        toOnePost={toOnePost} />

    } else if (currPathname === Cookies.get('id_post') || '/' + currPathname === Main_path.PROFILE) {
        return <OnePostComponent onePost={props.onePost}
                                 avatarUrl={props.avatarUrl}
                                 name={props.name}
                                 nickname={props.nickname}
                                 setIsButtonDeletePostPressed={setIsButtonDeletePostPressed}
                                 setIsButtonLikePostPressed={setIsButtonLikePostPressed}
                                 toOnePost={toOnePost}/>
    }

}