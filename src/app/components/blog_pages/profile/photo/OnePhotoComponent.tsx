import Image from "next/image";

import '@/app/scss/global/globals.scss'

import default_icon from '@/assets/icons/post/default_post_icon.svg'
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import sent_comment_icon from '@/assets/icons/post/sent_comment_icon.svg'
import {OneCommentComponent} from "@/app/components/blog_pages/profile/posts/comment/OneCommentComponent";

import one_photo_scss from '@/app/scss/for_components/blog_pages/photo/one_photo.module.scss'
import comments_scss from '@/app/scss/for_components/blog_pages/post/comments.module.scss'
import {useRouter} from "next/navigation";
import {Photo_path} from "@/app/paths/photo";
import {PostDataComponent} from "@/app/components/blog_pages/profile/posts/PostDataComponent";

export const OnePhotoComponent = () => {
    const route = useRouter()

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc} onClick={() => route.push(Photo_path.USER_PHOTO)}></section>
            <section className={one_photo_scss.route}>
                <Image src={default_icon} alt={'user photo'} className={one_photo_scss.photo}/>
                <section className={one_photo_scss.post_data}>
                    <PostDataComponent/>
                    <section className={one_post_scss.input_section}>
                        <input className={one_post_scss.input} placeholder={'Написать комментарий'}/>
                        <button className={'button_3rd_plane'}>
                            <Image src={sent_comment_icon} alt={'send comment'}/>
                        </button>
                    </section>
                    <ul className={comments_scss.comments}>
                        <li>
                            <OneCommentComponent/>
                        </li>
                        <li>
                            <OneCommentComponent/>
                        </li>
                        <li>
                            <OneCommentComponent/>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    )
}