import {OnePostComponent} from "@/app/components/blog_pages/profile/posts/one_post/OnePostComponent";

import post_scss from '@/app/scss/for_components/blog_pages/post/post.module.scss'

export const PostsComponent = () => {
    return(
        <ul className={post_scss.route}>
            <li>
                <OnePostComponent/>
            </li>
            <li>
                <OnePostComponent/>
            </li>
        </ul>
    )
}