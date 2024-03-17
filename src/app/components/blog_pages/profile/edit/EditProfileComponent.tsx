import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";
import edit_profile_scss from '@/app/scss/for_components/blog_pages/edit_profile/edit_profile.module.scss'

import '@/app/scss/global/globals.scss'

import {Profile_path} from "@/app/paths/profile";
import {useRouter} from "next/navigation";

import default_cover from '@/assets/common/default_cover.svg'
import default_avatar from '@/assets/common/default_avatar.svg'
import Image from "next/image";
import {useState} from "react";
import {
    EditAvatarCoverButtonsComponent
} from "@/app/components/blog_pages/profile/edit/EditAvatarCoverButtonsComponent";

export const EditProfileComponent = () => {
    const router = useRouter()

    const [isEditAvatarShow, setEditAvatarShow] = useState(false)
    const [isEditCoverShow, setEditCoverShow] = useState(false)

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => router.push(Profile_path.PROFILE_USER)}>
            </section>
            <section className={edit_profile_scss.route}>
                <header>
                    <section className={edit_profile_scss.cover_section}
                             onMouseEnter={() => setEditCoverShow(true)}
                             onMouseLeave={() => setEditCoverShow(false)}>
                        <Image src={default_cover} alt={'user cover'}/>
                        {isEditCoverShow ?
                            <EditAvatarCoverButtonsComponent/>
                            : null}
                    </section>
                    <section onMouseEnter={() => setEditAvatarShow(true)} // переделать этот ужас
                             onMouseLeave={() => setEditAvatarShow(false)}>
                        <section className={edit_profile_scss.avatar_section}>
                            {isEditAvatarShow ?
                                <EditAvatarCoverButtonsComponent/>
                                : null}
                        </section>
                        <section className={edit_profile_scss.avatar_section}>
                            <Image src={default_avatar} className={edit_profile_scss.avatar} alt={'user avatar'}/>
                        </section>
                    </section>


                </header>
                <main className={edit_profile_scss.form}>
                    <legend className={edit_profile_scss.input_section}>
                        <label>
                            Никнейм
                        </label>
                        <input/>
                    </legend>
                    <legend className={edit_profile_scss.input_section}>
                        <label>
                            Имя
                        </label>
                        <input/>
                    </legend>
                    <legend className={edit_profile_scss.input_section}>
                        <label>
                            Дата рождения
                        </label>
                        <input type={'date'}/>
                    </legend>
                </main>
                <legend className={edit_profile_scss.input_section}>
                    <label>
                        О себе
                    </label>
                    <textarea className={'scrollBar'}/>
                </legend>
                <footer className={'footer_buttons'}>
                    <button className={'button_cancel'}
                            onClick={() => router.push(Profile_path.PROFILE_USER)}>
                        Отменить
                    </button>
                    <button className={'button_main_color'}>
                        Сохранить
                    </button>
                </footer>
            </section>
        </section>
    )
}