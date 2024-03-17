import Image from "next/image";
import {ActionButtonsComponent} from "@/app/components/blog_pages/friends/oneUser/ActionButtonsComponent";

import one_user_scss from '@/app/scss/for_components/blog_pages/friends/one_user.module.scss'
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import {OneUserComponentInterface} from "@/app/interfaces/friends/friendsInterface";

export const OneUserComponent = (props: OneUserComponentInterface) => {

    return(
        <main className={one_user_scss.rout}>
            <Image src={props.oneUser.avatar} className={one_user_scss.avatar} alt={'user avatar'}/>
            <section className={one_user_scss.data_and_buttons}>
                <section className={one_user_scss.data}>
                    <header className={one_post_scss.name_nickname}>
                        <div className={'name_small'}>{props.oneUser.name}</div>
                    </header>
                    <p>{props.oneUser.status}</p>
                </section>
                <ActionButtonsComponent action={props.action}
                                        status={props.oneUser.status}/>
            </section>
        </main>
    )
}