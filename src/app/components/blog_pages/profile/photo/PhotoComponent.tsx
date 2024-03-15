import photo_scss from '@/app/scss/for_components/blog_pages/photo/photo.module.scss'
import '@/app/scss/global/globals.scss'

import back_icon from '@/assets/icons/photo/back_icon.svg'
import default_photo from '@/assets/icons/post/default_post_icon.svg'
import Image from "next/image";

export const PhotoComponent = () => {
    return (
        <main className={photo_scss.page}>
            <header className={photo_scss.header}>
                <Image src={back_icon} alt={'back icon'}/>
                <section className={photo_scss.userData}>
                    <div className={'name_small'}>Имя</div>
                    <div className={'nickname'}>6 фото</div>
                </section>
            </header>
            <ul className={photo_scss.photo}>
                <li>
                    <Image src={default_photo} alt={'user photo'}/>
                </li>
                <li>
                    <Image src={default_photo} alt={'user photo'}/>
                </li>
                <li>
                    <Image src={default_photo} alt={'user photo'}/>
                </li>
            </ul>
        </main>
    )
}