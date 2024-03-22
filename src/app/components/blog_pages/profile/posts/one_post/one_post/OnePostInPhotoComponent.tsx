import one_comment_scss from "@/app/scss/for_components/blog_pages/post/one_comment.module.scss";
import Image from "next/image";
import default_avatar from "@/assets/common/default_avatar.svg";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import not_like_icon from "@/assets/icons/post/not_like_icon.svg";
import like_icon from "@/assets/icons/post/like_icon.svg";
import comment_icon from "@/assets/icons/post/comment_icon.svg";
import TimeComponent from "@/app/components/blog_pages/time/TimeComponent";
import {OnePostInterfacesComponent, OnePostUserDataInterface} from "@/app/interfaces/posts/postsInterfaceComponent";

export const OnePostInPhotoComponent = (props: OnePostInterfacesComponent & OnePostUserDataInterface) => {
    return (
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
                <p>{props.onePost.text}</p>
                <footer className={one_post_scss.footer}>
                    <section className={one_post_scss.buttons + ' ' + one_comment_scss.gap_buttons}>
                        <button className={'button_3rd_plane ' + one_post_scss.button}
                                onClick={() => props.setIsButtonLikePostPressed(true)}>
                            <Image src={props.onePost.isLiked ? like_icon : not_like_icon} alt={'not like'}/>
                            <div>{props.onePost.likeCount}</div>
                        </button>
                        <button className={'button_3rd_plane ' + one_post_scss.button}>
                            <Image src={comment_icon} alt={'comment'}/>
                            <div>{props.onePost.commentCount}</div>
                        </button>
                    </section>
                    <TimeComponent time={props.onePost.time}/>
                </footer>
            </section>
        </header>
    )
}