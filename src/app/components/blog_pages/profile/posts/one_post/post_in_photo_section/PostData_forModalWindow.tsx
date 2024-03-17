import {
    PostDataComponent_forModalWindow
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_photo_section/PostDataComponent_forModalWindow";
import {useEffect} from "react";
import {OnePhotoInterface, UserDataForPostInterface} from "@/app/interfaces/photo/photoInterface";

export const PostData_forModalWindow = (props: OnePhotoInterface & UserDataForPostInterface) => {

    useEffect(() => {
        props.getOnePost('1') // todo пост тоже какот из url брать
    }, [props.onePostOpened])

    const likePost = () => {

    }

    return <PostDataComponent_forModalWindow onePostOpened={props.onePostOpened}
                                             likePost={likePost}
                                             avatarUrl={props.avatarUrl}
                                             name={props.name}
                                             nickname={props.nickname}/>
}