import post_scss from '@/app/scss/for_components/blog_pages/post/post.module.scss'
import {OnePostInterface, PostsInterface} from "@/app/interfaces/posts/postsInterface";
import {OnePostContainer} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostContainer";

export const PostsComponent = (props: PostsInterface) => {
    return(
        <ul className={post_scss.route}>
            {props.posts.map((onePost : OnePostInterface) => {
                return (
                    <li key={onePost.postId}>
                        <OnePostContainer onePost={onePost}/>
                    </li>
                )
            })}
        </ul>
    )
}