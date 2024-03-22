import aside_scss from '@/app/scss/for_components/blog_pages/profile/aside.module.scss'

import default_post_icon from '@/assets/icons/post/default_post_icon.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Photo_path} from "@/app/paths/photo";
import {OnePhoto, Photo_profileInterfaceComponent} from "@/app/interfaces/photo/photoInterface";
import {bgRed} from "next/dist/lib/picocolors";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const Photo_profileComponent = (props: Photo_profileInterfaceComponent) => {
    const router = useRouter()

    return (
        <section className={aside_scss.padding} onClick={() => router.push(MAIN_PATH + Cookies.get(Cookie_names.ID_CURRENT) + Main_path.PHOTO)}>
            <main className={aside_scss.route}>
                <header className={aside_scss.header}>
                    <div className={aside_scss.name}>Фото</div>
                    <div className={aside_scss.name + ' ' + aside_scss.count}>{props.countPhoto}</div>
                </header>
                <ul className={aside_scss.photos}>
                    {props.photoUrl.map((onePhoto: OnePhoto, index) => {
                        if (index < 3) {
                            return (
                                <li key={onePhoto.url}>
                                    <Image loader={() => onePhoto.url}
                                           src={onePhoto.url} className={aside_scss.image}
                                           alt={'user post photo'} width={0} height={0}/>
                                </li>
                            )
                        }
                    })}
                </ul>
            </main>
        </section>

    )
}