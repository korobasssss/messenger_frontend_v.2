import not_like_icon from '@/assets/icons/post/not_like_icon.svg'
import like_icon from '@/assets/icons/post/like_icon.svg'
import comment_icon from '@/assets/icons/post/comment_icon.svg'
import Image from "next/image";

import '@/app/scss/global/globals.scss'
import one_post_scss from '@/app/scss/for_components/blog_pages/post/one_post.module.scss'
import {
    OnePostInterfacesComponent,
    OnePostUserDataInterface,
    PostPhotoInterface
} from "@/app/interfaces/posts/postsInterfaceComponent";
import TimeComponent from "@/app/components/blog_pages/time/TimeComponent";
import default_avatar from "@/assets/common/default_avatar.svg";
import delete_icon from '@/assets/icons/post/delete_icon.svg'
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const OnePostComponent = (props: OnePostInterfacesComponent & OnePostUserDataInterface) => {

    return (
        <section className={one_post_scss.route}>
            <header className={one_post_scss.main_header}>
                <section className={one_post_scss.header}>
                    {props.avatarUrl !== '' ?
                        <Image loader={() => props.avatarUrl}
                               src={props.avatarUrl}
                               className={one_post_scss.avatar} alt={'user avatar'}
                               width={'0'} height={'0'}/>
                        :
                        <Image src={default_avatar}
                               className={one_post_scss.avatar} alt={'user avatar'}
                               width={'0'} height={'0'}/>
                    }
                    <section className={one_post_scss.name}>
                        <div className={'name_small'}>{props.name}</div>
                        <div className={'nickname'}>@{props.nickname}</div>
                    </section>
                </section>
                {Cookies.get(Cookie_names.ID_CURRENT) === Cookies.get(Cookie_names.ID)  ?
                <section className={one_post_scss.edit}>
                    <button className={'button_3rd_plane ' + one_post_scss.edit_button}
                            onClick={() => props.setIsButtonDeletePostPressed(true)}>
                        <Image src={delete_icon} alt={'delete'} width={0} height={0}/>
                    </button>
                </section>
                : null}
            </header>
            <main className={one_post_scss.main}>
                <section className={one_post_scss.post_data}>
                    <ul className={props.onePost.photoUrl.length === 1 || props.onePost.photoUrl.length === 2 ||
                        props.onePost.photoUrl.length === 4 ? one_post_scss.post_photos124 : one_post_scss.post_photos356}>
                        {props.onePost.photoUrl.map((onePhoto: PostPhotoInterface) => {
                            return (
                                <li key={onePhoto.photoId}>
                                    <Image loader={() => onePhoto.url}
                                           src={onePhoto.url} className={one_post_scss.post_photo}
                                           alt={'post photo'} width={'0'} height={'0'}/>
                                </li>
                            )
                        })}
                    </ul>
                    <p>{props.onePost.text}</p>
                </section>
                <footer className={one_post_scss.footer}>
                    <section className={one_post_scss.buttons}>
                        <button className={'button_3rd_plane ' + one_post_scss.button}
                                onClick={() => props.setIsButtonLikePostPressed(true)}>
                            {props.onePost.isLiked ?
                                <Image src={like_icon} alt={'not like'}/>
                                :
                                <Image src={not_like_icon} alt={'not like'}/>
                            }
                            <div>{props.onePost.likeCount}</div>
                        </button>
                        <button className={'button_3rd_plane ' + one_post_scss.button}
                                onClick={() => props.toOnePost()}>
                            <Image src={comment_icon} alt={'comment'}/>
                            <div>{props.onePost.commentCount}</div>
                        </button>
                    </section>
                    <TimeComponent time={props.onePost.time}/>
                </footer>
            </main>
        </section>
    )
}