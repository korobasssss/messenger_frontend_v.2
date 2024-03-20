import not_like_icon from '@/assets/icons/post/not_like_icon.svg'
import like_icon from '@/assets/icons/post/like_icon.svg'
import comment_icon from '@/assets/icons/post/comment_icon.svg'
import Image from "next/image";

import '@/app/scss/global/globals.scss'
import one_post_scss from '@/app/scss/for_components/blog_pages/post/one_post.module.scss'
import {useRouter} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {OnePostInterfaces, OnePostUserDataInterface, PostPhotoInterface} from "@/app/interfaces/posts/postsInterface";
import TimeComponent from "@/app/components/blog_pages/time/TimeComponent";
import default_avatar from "@/assets/common/default_avatar.svg";

export const OnePostComponent = (props: OnePostInterfaces & OnePostUserDataInterface) => { // edit or delete post
    const router = useRouter()

    return (
        <section className={one_post_scss.route}>
            <header className={one_post_scss.header}>
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
            </header>
            <main className={one_post_scss.post_data}>
                <ul className={one_post_scss.post_photos356}>
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
                <footer className={one_post_scss.footer}>
                    <section className={one_post_scss.buttons}>
                        <button className={'button_3rd_plane ' + one_post_scss.button}
                                onClick={() => props.likePost(props.onePost.postId)}>
                            {props.onePost.isLiked ?
                                <Image src={like_icon} alt={'not like'}/>
                                :
                                <Image src={not_like_icon} alt={'not like'}/>
                            }
                            <div>{props.onePost.likeCount}</div>
                        </button>
                        <button className={'button_3rd_plane ' + one_post_scss.button}
                                onClick={() => router.push(Profile_path.PROFILE_ONE_POST)}>
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