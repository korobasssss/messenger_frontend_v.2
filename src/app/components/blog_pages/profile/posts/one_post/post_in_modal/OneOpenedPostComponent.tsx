import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";
import {useRouter} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {OnePostComponent} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostComponent";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import Image from "next/image";
import sent_comment_icon from "@/assets/icons/post/sent_comment_icon.svg";
import {CommentsComponent} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsComponent";

import one_opened_post_scss from '@/app/scss/for_components/blog_pages/post/one_opened_post.module.scss'
import {CommentsContainer} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsContainer";

export const OneOpenedPostComponent = () => {
    const route = useRouter()
    return (
        <section  className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => route.push(Profile_path.PROFILE_USER)}>
            </section>
            <section className={one_opened_post_scss.route}>
                <section className={one_opened_post_scss.post_data + ' scrollBar'}>
                    <OnePostComponent/>
                    <section className={one_post_scss.input_section}>
                        <input className={one_post_scss.input} placeholder={'Написать комментарий'}/>
                        <button className={'button_3rd_plane'}>
                            <Image src={sent_comment_icon} alt={'send comment'}/>
                        </button>
                    </section>
                    <CommentsContainer/>
                </section>
            </section>
        </section>
    )
}