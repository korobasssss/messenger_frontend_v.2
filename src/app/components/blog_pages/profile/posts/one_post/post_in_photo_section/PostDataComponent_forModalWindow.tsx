import {OnePostComponentInterface, UserDataForPostInterface} from "@/app/interfaces/photo/photoInterface";
import {CommentsContainer} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsContainer";
import one_opened_post_scss from "@/app/scss/for_components/blog_pages/post/one_opened_post.module.scss";
import {OnePostContainer} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostContainer";

export const PostDataComponent_forModalWindow = (props: OnePostComponentInterface & UserDataForPostInterface) => {
    return (
        <section>
            <section className={one_opened_post_scss.post_data + ' scrollBar'}>
                <OnePostContainer onePost={props.onePostOpened}
                                  setAction={props.setAction}/>
                <CommentsContainer postId={props.onePostOpened.postId}
                                   setAction={props.setAction}/>
            </section>
        </section>

    )
}