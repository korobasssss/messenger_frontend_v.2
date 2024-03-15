import aside_scss from '@/app/scss/for_components/blog_pages/profile/aside.module.scss'

import default_post_icon from '@/assets/icons/post/default_post_icon.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Photo_path} from "@/app/paths/photo";

export const Photo_profileComponent = () => {
    const router = useRouter()

    return (
        <section className={aside_scss.padding} onClick={() => router.push(Photo_path.USER_PHOTO)}>
            <main className={aside_scss.route}>
                <header className={aside_scss.header}>
                    <div className={aside_scss.name}>Фото</div>
                    <div className={aside_scss.name + ' ' + aside_scss.count}>6</div>
                </header>
                <ul className={aside_scss.photos}>
                    <li>
                        <Image src={default_post_icon} className={aside_scss.image} alt={'user post photo'}/>
                    </li>
                    <li>
                        <Image src={default_post_icon} className={aside_scss.image} alt={'user post photo'}/>
                    </li>
                    <li>
                        <Image src={default_post_icon} className={aside_scss.image} alt={'user post photo'}/>
                    </li>
                </ul>
            </main>
        </section>

    )
}