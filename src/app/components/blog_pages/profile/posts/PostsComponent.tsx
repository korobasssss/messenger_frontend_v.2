import post_scss from '@/app/scss/for_components/blog_pages/post/post.module.scss'
import {OnePostInterface, PostsInterfaceComponent} from "@/app/interfaces/posts/postsInterfaceComponent";
import {OnePostContainer} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostContainer";

export const PostsComponent = (props: PostsInterfaceComponent) => {
    return(
        <section>
            <ul className={post_scss.route}>
                {props.posts.map((onePost: OnePostInterface) => {
                    return (
                        <li key={onePost.postId} className={post_scss.li}>
                            <OnePostContainer onePost={onePost} setAction={props.setAction}/>
                        </li>
                    )
                }).reverse()
                }
            </ul>
            {props.posts.length === 0 ?
            <p className={post_scss.no_data}>
                Пока что здесь ничего нет...
            </p>
            : null}
        </section>
    )
}