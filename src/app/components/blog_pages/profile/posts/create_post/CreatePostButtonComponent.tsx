import '@/app/scss/global/globals.scss'
import create_post_scss from '@/app/scss/for_components/blog_pages/post/create_post.module.scss'

import create_post_icon from '@/assets/icons/post/create_post_icon.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const CreatePostButtonComponent = () => {
    const router = useRouter()

    return (
        <button className={'button_main_color ' + create_post_scss.button}
                onClick={() => router.push(MAIN_PATH + Cookies.get(Cookie_names.ID) + Main_path.PROFILE +
                    Profile_path.PROFILE_ONE_POST + Profile_path.PROFILE_CREATE_POST)}>
            <Image src={create_post_icon} alt={'create post'}/>
            Создать
        </button>
    )
}