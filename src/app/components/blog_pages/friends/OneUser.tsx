import default_avatar from '@/assets/common/default_avatar.svg'
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Friends_path} from "@/app/paths/friends";
import {FriendsButtonsComponent} from "@/app/components/blog_pages/friends/friends/FriendsButtonsComponent";
import {SubscriptionsButtonsComponent} from "@/app/components/blog_pages/friends/subscriptions/SubscriptionsComponent";
import {SubscribersButtonsComponent} from "@/app/components/blog_pages/friends/subscribers/SubscribersComponent";
import {SearchButtonsComponent} from "@/app/components/blog_pages/friends/search/SearchComponent";

import one_user_scss from '@/app/scss/for_components/blog_pages/friends/one_user.module.scss'

export const OneUser = () => {
    const pathname = usePathname()

    return(
        <main className={one_user_scss.rout}>
            <Image src={default_avatar} className={one_user_scss.avatar} alt={'user avatar'}/>
            <section className={one_user_scss.data_and_buttons}>
                <section className={one_user_scss.data}>
                    <header>
                        <div className={'name_small'}>Другой</div>
                        <div className={'nickname'}>@name</div>
                    </header>
                    <p>ня =^-^= добавляйтесь в друзяффки!!!</p>
                </section>
                {pathname === Friends_path.FRIENDS_USER ? <FriendsButtonsComponent/> :
                pathname === Friends_path.SUBSCRIPTIONS_USER ? <SubscriptionsButtonsComponent/> :
                pathname === Friends_path.SUBSCRIBERS_USER ? <SubscribersButtonsComponent/> :
                pathname === Friends_path.SEARCH ? <SearchButtonsComponent/> : null}
            </section>
        </main>
    )
}