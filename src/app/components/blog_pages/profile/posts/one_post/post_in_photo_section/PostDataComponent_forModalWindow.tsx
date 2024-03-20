import one_comment_scss from "@/app/scss/for_components/blog_pages/post/one_comment.module.scss";
import Image from "next/image";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import not_like_icon from "@/assets/icons/post/not_like_icon.svg";
import comment_icon from "@/assets/icons/post/comment_icon.svg";
import {OnePostComponentInterface, UserDataForPostInterface} from "@/app/interfaces/photo/photoInterface";
import TimeComponent from "@/app/components/blog_pages/time/TimeComponent";
import {CommentsContainer} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsContainer";
import default_avatar from "@/assets/common/default_avatar.svg";

export const PostDataComponent_forModalWindow = (props: OnePostComponentInterface & UserDataForPostInterface) => {
    return (
        <section>
            <header className={one_comment_scss.user_post_data}>
                {props.avatarUrl !== '' ?
                    <Image loader={() => props.avatarUrl}
                           src={props.avatarUrl}
                           className={one_comment_scss.user_avatar} alt={'user avatar'}
                           width={'0'} height={'0'}/>
                    :
                    <Image src={default_avatar}
                           className={one_comment_scss.user_avatar} alt={'user avatar'}
                           width={'0'} height={'0'}/>
                }
                <section className={one_comment_scss.info}>
                    <header className={one_comment_scss.user_data}>
                        <div className={'name_small'}>{props.name}</div>
                        <div className={'nickname'}>@{props.nickname}</div>
                    </header>
                    <p>{props.onePostOpened.text}</p>
                    <footer className={one_post_scss.footer}>
                        <section className={one_post_scss.buttons}>
                            <button className={'button_3rd_plane ' + one_post_scss.button}
                                    onClick={() => props.likePost(props.onePostOpened.postId)}>
                                <Image src={not_like_icon} alt={'not like'}/>
                                <div>{props.onePostOpened.likeCount}</div>
                            </button>
                            <button className={'button_3rd_plane ' + one_post_scss.button}>
                                <Image src={comment_icon} alt={'comment'}/>
                                <div>{props.onePostOpened.commentCount}</div>
                            </button>
                        </section>
                        <TimeComponent time={props.onePostOpened.time}/>
                    </footer>
                </section>
            </header>
            <CommentsContainer postId={props.onePostOpened.postId}/>
        </section>

    )
}