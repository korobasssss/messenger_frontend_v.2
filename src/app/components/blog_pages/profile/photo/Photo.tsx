import {PhotoComponent} from "@/app/components/blog_pages/profile/photo/PhotoComponent";
import {useEffect} from "react";
import {
    NameInterface,
    Photo_profileInterface,
} from "@/app/interfaces/photo/photoInterface";
import {usePathname, useRouter} from "next/navigation";
import {MAIN_PATH, Main_path, MAIN_PATH_FOR_AUTH} from "@/app/paths/main";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/photo/Photo_profileComponent";
import {Profile_path} from "@/app/paths/profile";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const Photo = (props: Photo_profileInterface & NameInterface) => {
    const router = useRouter()

    const pathname = usePathname().split('/')
    const currPathname = '/' + pathname[pathname.length - 1]
    const currPathname2 = '/' + pathname[pathname.length - 2]

    useEffect(() => {
        props.getPhoto()
        props.getPhotoCount()
    }, []);

    const toProfile = () => {
        router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.PROFILE)
    }

    const toOnePhoto = (postId: string, photoId: string, photoUrl: string) => {
        Cookies.set('id_photo', photoId)
        Cookies.set('id_post', postId)
        Cookies.set('url_photo', photoUrl)
        router.push(MAIN_PATH + Cookies.get('id_current')
            + Main_path.PHOTO + '/' + Cookies.get('id_photo'))
    }

    if (currPathname === Main_path.PROFILE ||
        currPathname === Profile_path.PROFILE_CREATE_POST ||
        currPathname === Profile_path.PROFILE_EDIT||
        currPathname === '/' + Cookies.get(Cookie_names.ID_POST) && currPathname2 === '/post') {
        return <Photo_profileComponent photoUrl={props.photoUrl}
                                       countPhoto={props.countPhoto}/>
    } else if (currPathname === Main_path.PHOTO ||
        currPathname === '/' + Cookies.get(Cookie_names.ID_PHOTO) && currPathname2 === Main_path.PHOTO) {
        return <PhotoComponent photoUrl={props.photoUrl}
                               countPhoto={props.countPhoto}
                               name={props.name}
                               toOnePhoto={toOnePhoto}
                               toProfile={toProfile}/>
    }
}