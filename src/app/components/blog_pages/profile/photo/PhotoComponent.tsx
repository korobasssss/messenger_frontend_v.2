import photo_scss from '@/app/scss/for_components/blog_pages/photo/photo.module.scss'
import '@/app/scss/global/globals.scss'

import back_icon from '@/assets/icons/photo/back_icon.svg'
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {Photo_path} from "@/app/paths/photo";
import {
    NameInterface,
    OnePhoto,
    Photo_profileInterfaceComponent,
    PhotoInterfaceComponent
} from "@/app/interfaces/photo/photoInterface";
import {OnePhotoComponent} from "@/app/components/blog_pages/profile/photo/onePhoto/OnePhotoComponent";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const PhotoComponent = (props: PhotoInterfaceComponent & NameInterface) => {
    const pathname = usePathname().split('/')

    return (
        <main className={photo_scss.page}>
            <header className={photo_scss.header}>
                <button className={'button_3rd_plane'}
                         onClick={() => props.toProfile()}>
                    <Image src={back_icon} alt={'back icon'}/>
                </button>

                <section className={photo_scss.userData}>
                    <div className={'name_small'}>{props.name}</div>
                    <div className={'nickname'}>{props.countPhoto} фото</div>
                </section>
            </header>
            <ul className={photo_scss.photo}>
                { props.photoUrl.length !== 0 ?
                props.photoUrl.map((onePhoto: OnePhoto, index) => {
                    return (
                        <li key={onePhoto.url}>
                            <section className={photo_scss.one_photo}
                                     onClick={() => props.toOnePhoto(onePhoto.postId, onePhoto.photoId, onePhoto.url)}>
                                <Image loader={() => onePhoto.url}
                                       src={onePhoto.url} alt={'user photo'} width={'0'} height={'0'}/>
                            </section>
                        </li>
                    )
                })
                :
                <section className={photo_scss.no_photo}>
                    <p>Нет фото...</p>
                </section>}
            </ul>
            {pathname[pathname.length - 1] === Cookies.get(Cookie_names.ID_PHOTO) ? <OnePhotoComponent/> : null}
        </main>
    )
}