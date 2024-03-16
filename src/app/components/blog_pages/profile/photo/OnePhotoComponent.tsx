import Image from "next/image";

import '@/app/scss/global/globals.scss'

import default_icon from '@/assets/icons/post/default_post_icon.svg'
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import sent_comment_icon from '@/assets/icons/post/sent_comment_icon.svg'

import one_photo_scss from '@/app/scss/for_components/blog_pages/photo/one_photo.module.scss'
import {useRouter} from "next/navigation";
import {Photo_path} from "@/app/paths/photo";
import {PostDataComponent_forModalWindow} from "@/app/components/blog_pages/profile/posts/one_post/PostDataComponent_forModalWindow";
import {CommentsComponent} from "@/app/components/blog_pages/profile/posts/comment/CommentsComponent";

import one_opened_post_scss from '@/app/scss/for_components/blog_pages/post/one_opened_post.module.scss'


import one from '@/assets/common/1.jpg'
import two from '@/assets/common/2.jpg'
import three from '@/assets/common/3.jpg'

export const OnePhotoComponent = () => {
    const route = useRouter()

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc} onClick={() => route.push(Photo_path.USER_PHOTO)}></section>
            <section className={one_photo_scss.route}>
                <Image src={two} alt={'user photo'} className={one_photo_scss.photo}/>
                <section className={one_opened_post_scss.post_data + ' ' + one_photo_scss.post_width}>
                    <PostDataComponent_forModalWindow/>
                    <section className={one_post_scss.input_section}>
                        <input className={one_post_scss.input} placeholder={'Написать комментарий'}/>
                        <button className={'button_3rd_plane'}>
                            <Image src={sent_comment_icon} alt={'send comment'}/>
                        </button>
                    </section>
                    <CommentsComponent/>
                </section>
            </section>
        </section>
    )
}