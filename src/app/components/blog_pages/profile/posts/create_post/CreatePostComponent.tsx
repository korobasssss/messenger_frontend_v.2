import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";
import {Profile_path} from "@/app/paths/profile";
import {useRouter} from "next/navigation";

import '@/app/scss/global/globals.scss'
import create_post_scss from '@/app/scss/for_components/blog_pages/post/create_post.module.scss'

import add_photo_icon from '@/assets/icons/post/add_photo_icon.svg'
import default_post_icon from '@/assets/icons/post/default_post_icon.svg'
import Image from "next/image";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";


export const CreatePostComponent = () => {
    const router = useRouter()

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => router.push(Profile_path.PROFILE_USER)}>
            </section>
            <section className={create_post_scss.route}>
                <textarea className={create_post_scss.input + ' scrollBar'} placeholder={'Напишите что-нибудь'}/>
                <ul className={one_post_scss.post_photos356}>
                    <li>
                        <Image src={default_post_icon} className={one_post_scss.post_photo} alt={'pred post image'}/>
                    </li>
                    <li>
                        <Image src={default_post_icon} className={one_post_scss.post_photo} alt={'pred post image'}/>
                    </li>
                    <li>
                        <Image src={default_post_icon} className={one_post_scss.post_photo} alt={'pred post image'}/>
                    </li>
                    <li>
                        <Image src={default_post_icon} className={one_post_scss.post_photo} alt={'pred post image'}/>
                    </li>
                </ul>
                <footer className={create_post_scss.footer}>
                    <button className={'button_cancel'} onClick={() => router.push(Profile_path.PROFILE_USER)}>
                        Отменить
                    </button>
                    <section className={create_post_scss.main_buttons_section}>
                        <button className={'button_3rd_plane'}>
                            <input className={create_post_scss.hidden} type="file" id="setFiles-btn"/>
                            <label htmlFor="setFiles-btn">
                                <Image src={add_photo_icon} alt={'add photo'}/>
                            </label>
                        </button>
                        <button className={'button_main_color'}>
                            Опубликовать
                        </button>
                    </section>

                </footer>
            </section>
        </section>
    )
}