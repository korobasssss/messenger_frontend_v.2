import Image from "next/image";
import {ActionButtonsComponent} from "@/app/components/blog_pages/friends/oneUser/ActionButtonsComponent";

import one_user_scss from '@/app/scss/for_components/blog_pages/friends/one_user.module.scss'
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import {OneUserComponentInterface} from "@/app/interfaces/friends/friendsInterface";
import default_avatar from "@/assets/common/default_avatar.svg";
import Cookies from "js-cookie";

export const OneUserComponent = (props: OneUserComponentInterface) => {

    return (
        <section className={one_user_scss.data_and_buttons}>
            <main className={one_user_scss.rout}>
                {props.oneUser.avatarUrl !== '' ?
                    <Image loader={() => props.oneUser.avatarUrl}
                           src={props.oneUser.avatarUrl}
                           className={one_user_scss.avatar} alt={'user avatar'}
                           width={'0'} height={'0'} onClick={() => props.toProfile()}/>
                    :
                    <Image src={default_avatar}
                           className={one_user_scss.avatar} alt={'user avatar'} width={'0'}
                           height={'0'} onClick={() => props.toProfile()}/>
                }
                <section className={one_user_scss.data}>
                    <div className={'name_small'}>{props.oneUser.name}</div>
                    <p>{props.oneUser.bio}</p>
                </section>
            </main>
            {props.oneUser.id !== Cookies.get('id') ?
                <ActionButtonsComponent action={props.action}
                                        status={props.oneUser.status}/>
            : null}
        </section>

)
}