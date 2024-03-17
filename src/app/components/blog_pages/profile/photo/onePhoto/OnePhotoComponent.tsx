import Image from "next/image";

import '@/app/scss/global/globals.scss'
import one_photo_scss from '@/app/scss/for_components/blog_pages/photo/one_photo.module.scss'
import {useRouter} from 'next/router';
import {Photo_path} from "@/app/paths/photo";

import one_opened_post_scss from '@/app/scss/for_components/blog_pages/post/one_opened_post.module.scss'
import {
    OneOpenedPostContainer
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_modal/OneOpenedPostContainer";

export const OnePhotoComponent = () => { // todo разобраться с путем и отображением фото
    const router = useRouter();
    const { id } = router.query;

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc} onClick={() => router.push(Photo_path.USER_PHOTO)}></section>
            <section className={one_photo_scss.route}>
                <Image src={'1'} alt={'user photo'} className={one_photo_scss.photo}/>
                <section className={one_opened_post_scss.post_data + ' ' + one_photo_scss.post_width + ' scrollBar'}>
                    <OneOpenedPostContainer/>
                </section>
            </section>
        </section>
    )
}