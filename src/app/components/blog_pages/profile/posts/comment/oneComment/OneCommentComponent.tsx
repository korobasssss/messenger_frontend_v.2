import Image from "next/image";

import edit_icon from '@/assets/icons/post/edit_icon.svg'
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import not_like_icon from "@/assets/icons/post/not_like_icon.svg";
import like_icon from "@/assets/icons/post/like_icon.svg";
import delete_icon from "@/assets/icons/post/delete_icon.svg";
import one_comment_scss from "@/app/scss/for_components/blog_pages/post/one_comment.module.scss";
import '@/app/scss/global/globals.scss'
import {OneCommentComponentInterface} from "@/app/interfaces/comments/commentsInterface";
import TimeComponent from "@/app/components/blog_pages/time/TimeComponent";
import default_avatar from "@/assets/common/default_avatar.svg";

export const OneCommentComponent = (props: OneCommentComponentInterface) => {

    console.log('component', props.oneComment.name)

    return (
        <section className={one_comment_scss.user_post_data}>
            {props.oneComment.avatarUrl !== '' ?
                <Image loader={() => props.oneComment.avatarUrl}
                       src={props.oneComment.avatarUrl}
                       className={one_comment_scss.user_avatar}
                       alt={'user avatar'} width={'0'} height={'0'}/>
                :
                <Image src={default_avatar}
                       className={one_comment_scss.user_avatar}
                       alt={'user avatar'} width={'0'} height={'0'}/>
            }
            <section className={one_comment_scss.info}>
                <header className={one_comment_scss.user_data_with_edit}>
                    <section className={one_comment_scss.user_data}>
                        <div className={'name_small'}>{props.oneComment.name}</div>
                    </section>
                    <button className={'button_3rd_plane '}
                            onClick={() => props.setButtonDeleteCommentClicked(true)}>
                        <Image src={delete_icon} alt={'edit'} className={one_comment_scss.deleteIcon}/>
                    </button>
                </header>
                <p>{props.oneComment.text}</p>
                <footer className={'footer_buttons ' + one_post_scss.footer}>
                <section className={one_post_scss.buttons}>
                        <button className={'button_3rd_plane ' + one_post_scss.button}
                                onClick={() => props.setButtonLikeCommentClicked(true)}>
                            {props.oneComment.isLiked ?
                                <Image src={like_icon} alt={'not like'}/>
                                :
                                <Image src={not_like_icon} alt={'not like'}/>
                            }
                            <div>{props.oneComment.likeCount}</div>
                        </button>
                    </section>
                    <TimeComponent time={props.oneComment.time}/>
                </footer>
            </section>
        </section>

    )
}