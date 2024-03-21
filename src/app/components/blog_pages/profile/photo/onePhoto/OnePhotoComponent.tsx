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

export const OnePhotoComponent = () => { // todo разобраться с путем и отображением фото
    const router = useRouter();

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => {
                         Cookies.remove('id_photo')
                         Cookies.remove('url_photo')
                         Cookies.remove('id_post')
                         router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.PHOTO)}
            }></section>
            <section className={one_photo_scss.route}>
                <Image loader={() => Cookies.get('url_photo') as string}
                       src={Cookies.get('url_photo') as string} alt={'user photo'} className={one_photo_scss.photo}
                       width={0} height={0}/>
                <section className={one_opened_post_scss.post_data + ' ' + one_photo_scss.post_width + ' scrollBar'}>
                    <OneOpenedPostContainer/>
                </section>
            </section>
        </section>
    )
}