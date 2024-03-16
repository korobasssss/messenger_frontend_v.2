import photo_scss from '@/app/scss/for_components/blog_pages/photo/photo.module.scss'
import '@/app/scss/global/globals.scss'

import back_icon from '@/assets/icons/photo/back_icon.svg'
import default_photo from '@/assets/icons/post/default_post_icon.svg'
import one from '@/assets/common/1.jpg'
import two from '@/assets/common/2.jpg'
import three from '@/assets/common/3.jpg'
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {Photo_path} from "@/app/paths/photo";
import {OnePhotoComponent} from "@/app/components/blog_pages/profile/photo/OnePhotoComponent";

export const PhotoComponent = () => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <main className={photo_scss.page}>
            <header className={photo_scss.header}>
                <button className={'button_3rd_plane'}
                        onClick={() => router.push(Profile_path.PROFILE_USER)}>
                    <Image src={back_icon} alt={'back icon'}/>
                </button>

                <section className={photo_scss.userData}>
                    <div className={'name_small'}>Имя</div>
                    <div className={'nickname'}>6 фото</div>
                </section>
            </header>
            <ul className={photo_scss.photo}>
                <li>
                    <section className={photo_scss.one_photo} onClick={() => router.push(Photo_path.ONE_PHOTO)}>
                        <Image src={one} alt={'user photo'}/>
                    </section>
                </li>
                <li>
                    <section className={photo_scss.one_photo} onClick={() => router.push(Photo_path.ONE_PHOTO)}>
                        <Image src={two} alt={'user photo'}/>
                    </section>
                </li>
                <li>
                    <section className={photo_scss.one_photo} onClick={() => router.push(Photo_path.ONE_PHOTO)}>
                        <Image src={three} alt={'user photo'}/>
                    </section>
                </li>
                <li>
                    <section className={photo_scss.one_photo} onClick={() => router.push(Photo_path.ONE_PHOTO)}>
                        <Image src={three} alt={'user photo'}/>
                    </section>
                </li>
                <li>
                    <section className={photo_scss.one_photo} onClick={() => router.push(Photo_path.ONE_PHOTO)}>
                        <Image src={three} alt={'user photo'}/>
                    </section>
                </li>
            </ul>

            {pathname === Photo_path.ONE_PHOTO ? <OnePhotoComponent/> : null}
        </main>
    )
}