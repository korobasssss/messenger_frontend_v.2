import {
    PostDataComponent_forModalWindow
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_photo_section/PostDataComponent_forModalWindow";
import {useEffect} from "react";
import {OnePhotoInterface, UserDataForPostInterface} from "@/app/interfaces/photo/photoInterface";
import {
    OneOpenedPostComponent
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_modal/OneOpenedPostComponent";
import {usePathname} from "next/navigation";
import {Photo_path} from "@/app/paths/photo";
import {Profile_path} from "@/app/paths/profile";

export const OneOpenedPost = (props: OnePhotoInterface & UserDataForPostInterface) => {
    const pathname = usePathname()


    useEffect(() => {
        props.getOnePost('1') // todo пост тоже какот из url брать
    }, [props.onePostOpened])

    const likePost = (postId: string) => {
        props.likePost(postId)
    }

    if (pathname === Photo_path.ONE_PHOTO) {
        return <PostDataComponent_forModalWindow onePostOpened={props.onePostOpened}
                                                 likePost={likePost}
                                                 avatarUrl={props.avatarUrl}
                                                 name={props.name}
                                                 nickname={props.nickname}/>
    } else if (pathname === Profile_path.PROFILE_ONE_POST) {
        return <OneOpenedPostComponent onePostOpened={props.onePostOpened}
                                          likePost={likePost}
                                          avatarUrl={props.avatarUrl}
                                          name={props.name}
                                          nickname={props.nickname}/>
    }

}