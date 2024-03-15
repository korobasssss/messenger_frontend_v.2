import aside_scss from "@/app/scss/for_components/blog_pages/profile/aside.module.scss";
import Image from "next/image";
import default_avatar from "@/assets/common/default_avatar.svg";
import {useRouter} from "next/navigation";
import {Friends_path} from "@/app/paths/friends";

export const Friends_profileComponent = () => {
    const router = useRouter()

    return (
        <section className={aside_scss.padding} onClick={() => router.push(Friends_path.FRIENDS_USER)}>
            <main className={aside_scss.route}>
                <header className={aside_scss.header}>
                    <div className={aside_scss.name}>Друзья</div>
                    <div className={aside_scss.name + ' ' + aside_scss.count}>10</div>
                </header>
                <ul className={aside_scss.friends}>
                    <li>
                        <Image src={default_avatar} className={aside_scss.friend_avatar} alt={'user post photo'}/>
                    </li>
                    <li>
                        <Image src={default_avatar} className={aside_scss.friend_avatar} alt={'user post photo'}/>
                    </li>
                    <li>
                        <Image src={default_avatar} className={aside_scss.friend_avatar} alt={'user post photo'}/>
                    </li>
                    <li>
                        <Image src={default_avatar} className={aside_scss.friend_avatar} alt={'user post photo'}/>
                    </li>
                </ul>
            </main>
        </section>

    )
}