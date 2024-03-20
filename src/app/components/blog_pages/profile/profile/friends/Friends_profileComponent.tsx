import aside_scss from "@/app/scss/for_components/blog_pages/profile/aside.module.scss";
import Image from "next/image";
import default_avatar from "@/assets/common/default_avatar.svg";
import one_comment_scss from "@/app/scss/for_components/blog_pages/post/one_comment.module.scss";
import {Friends_profileComponentInterface} from "@/app/interfaces/profile/friends_profileInterface";
import {userShortInfo} from "@/app/interfaces/friends/friendsInterface";

export const Friends_profileComponent = (props: Friends_profileComponentInterface) => {
    return (
        <section className={aside_scss.padding} onClick={() => props.toFriends()}>
            <main className={aside_scss.route}>
                <header className={aside_scss.header}>
                    <div className={aside_scss.name}>Друзья</div>
                    <div className={aside_scss.name + ' ' + aside_scss.count}>{props.countFriends}</div>
                </header>
                <ul className={aside_scss.friends}>
                    {props.users.map((oneUser: userShortInfo) => {
                            return (
                                <li key={oneUser.id}>
                                    {oneUser.avatarUrl !== '' ?
                                        <Image loader={() => oneUser.avatarUrl}
                                               src={oneUser.avatarUrl}
                                               className={one_comment_scss.user_avatar} alt={'user avatar'}
                                               width={'0'} height={'0'}/>
                                        :
                                        <Image src={default_avatar}
                                               className={one_comment_scss.user_avatar} alt={'user avatar'}
                                               width={'0'} height={'0'}/>
                                    }
                                </li>
                            )
                        })}
                </ul>
            </main>
        </section>

    )
}