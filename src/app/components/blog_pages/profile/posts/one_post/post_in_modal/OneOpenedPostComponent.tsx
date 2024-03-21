import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";

import one_opened_post_scss from '@/app/scss/for_components/blog_pages/post/one_opened_post.module.scss'
import {CommentsContainer} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsContainer";
import {OnePostContainer} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostContainer";
import {OnePostComponentInterface, UserDataForPostInterface} from "@/app/interfaces/photo/photoInterface";

export const OneOpenedPostComponent = (props: OnePostComponentInterface & UserDataForPostInterface) => {
    return (
        <section  className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => props.toProfile()}>
            </section>
            <section className={one_opened_post_scss.route}>
                <section className={one_opened_post_scss.post_data + ' scrollBar'}>
                    <OnePostContainer onePost={props.onePostOpened}
                                      setAction={props.setAction}/>
                    <CommentsContainer postId={props.onePostOpened.postId}/>
                </section>
            </section>
        </section>
    )
}