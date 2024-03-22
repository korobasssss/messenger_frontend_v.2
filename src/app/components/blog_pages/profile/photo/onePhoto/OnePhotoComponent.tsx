import Image from "next/image";

import '@/app/scss/global/globals.scss'
import one_photo_scss from '@/app/scss/for_components/blog_pages/photo/one_photo.module.scss'
import {useRouter} from 'next/navigation';

import one_opened_post_scss from '@/app/scss/for_components/blog_pages/post/one_opened_post.module.scss'
import {
    OneOpenedPostContainer
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_modal/OneOpenedPostContainer";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const OnePhotoComponent = () => {
    const router = useRouter();

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => {
                         Cookies.remove(Cookie_names.ID_PHOTO)
                         Cookies.remove(Cookie_names.URL_PHOTO)
                         Cookies.remove(Cookie_names.ID_POST)
                         router.push(MAIN_PATH + Cookies.get(Cookie_names.ID_CURRENT) + Main_path.PHOTO)}
            }></section>
            <section className={one_photo_scss.route}>
                <Image loader={() => Cookies.get(Cookie_names.URL_PHOTO) as string}
                       src={Cookies.get(Cookie_names.URL_PHOTO) as string} alt={'user photo'} className={one_photo_scss.photo}
                       width={0} height={0}/>
                <section className={one_opened_post_scss.post_data + ' ' + one_photo_scss.post_width + ' scrollBar'}>
                    <OneOpenedPostContainer/>
                </section>
            </section>
        </section>
    )
}