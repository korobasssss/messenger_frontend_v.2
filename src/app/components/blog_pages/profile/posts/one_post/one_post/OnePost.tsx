import {OnePostComponent} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePostComponent";
import {OnePostInterfaces, OnePostUserDataInterface} from "@/app/interfaces/posts/postsInterface";

export const OnePost = (props: OnePostInterfaces & OnePostUserDataInterface) => {

    const deletePost = (postId: string) => {
        props.deletePost(postId)
    }

    const likePost = (postId: string) => {
        props.likePost(postId)
    }

    return <OnePostComponent onePost={props.onePost}
                             deletePost={deletePost}
                             likePost={likePost}
                             avatarUrl={props.avatarUrl}
                             name={props.name}
                             nickname={props.nickname}/>
}