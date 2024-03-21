import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";
import edit_profile_scss from '@/app/scss/for_components/blog_pages/edit_profile/edit_profile.module.scss'

import '@/app/scss/global/globals.scss'

import default_cover from '@/assets/common/default_cover.svg'
import default_avatar from '@/assets/common/default_avatar.svg'
import Image from "next/image";
import {useState} from "react";
import {
    EditAvatarCoverButtonsComponent
} from "@/app/components/blog_pages/profile/edit/EditAvatarCoverButtonsComponent";
import {EditProfileComponentInterface} from "@/app/interfaces/profile/edit_profileInterface";
import settings_scss from "@/app/scss/for_components/blog_pages/settings/settings.module.scss";

export const EditProfileComponent = (props: EditProfileComponentInterface) => {
    const [isEditAvatarShow, setEditAvatarShow] = useState(false)
    const [isEditCoverShow, setEditCoverShow] = useState(false)

    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => props.toProfile()}>
            </section>
            <section className={edit_profile_scss.route}>
                <header>
                    <section className={edit_profile_scss.cover_section}
                             onMouseEnter={() => setEditCoverShow(true)}
                             onMouseLeave={() => setEditCoverShow(false)}>
                        {props.input_coverUrl !== '' ?
                            <Image loader={() => props.input_coverUrl}
                                   src={props.input_coverUrl}
                                   className={edit_profile_scss.cover} alt={'user cover'} width={'0'} height={'0'}/>
                            :
                            <Image src={default_cover}
                                   className={edit_profile_scss.cover} alt={'user cover'} width={'0'} height={'0'}/>
                        }
                        {isEditCoverShow ?
                            <EditAvatarCoverButtonsComponent setInput_photo={props.setInput_coverUrl}
                                                             setPhotoDelete={props.setCoverDeleteFile}/>
                            : null}
                    </section>
                    <section onMouseEnter={() => setEditAvatarShow(true)} // переделать этот ужас
                             onMouseLeave={() => setEditAvatarShow(false)}>
                        <section className={edit_profile_scss.avatar_section}>
                            {isEditAvatarShow ?
                                <EditAvatarCoverButtonsComponent setInput_photo={props.setInput_avatarUrl}
                                                                 setPhotoDelete={props.setAvatarDeleteFile}/>
                                : null}
                        </section>
                        <section className={edit_profile_scss.avatar_section}>
                            {props.input_avatarUrl !== '' ?
                                <Image loader={() => props.input_avatarUrl}
                                       src={props.input_avatarUrl}
                                       className={edit_profile_scss.avatar} alt={'user avatar'} width={'0'}
                                       height={'0'}/>
                                :
                                <Image src={default_avatar}
                                       className={edit_profile_scss.avatar} alt={'user avatar'} width={'0'}
                                       height={'0'}/>
                            }
                        </section>
                    </section>


                </header>
                <main className={edit_profile_scss.form}>
                    <legend className={edit_profile_scss.input_section}>
                        <label>
                            Никнейм
                        </label>
                        <input value={props.input_nickname}
                               onChange={(event) =>
                                   props.setInput_nickname(event.target.value)}/>
                    </legend>
                    <legend className={edit_profile_scss.input_section}>
                        <label>
                            Имя
                        </label>
                        <input value={props.input_name}
                               onChange={(event) =>
                                   props.setInput_name(event.target.value)}/>
                    </legend>
                </main>
                <legend className={edit_profile_scss.input_section}>
                    <label>
                        О себе
                    </label>
                    <textarea className={'scrollBar'}
                              value={props.input_bio}
                              onChange={(event) =>
                                  props.setInput_bio(event.target.value)}/>
                </legend>
                <p className={settings_scss.message}>{props.message}</p>
                <footer className={'footer_buttons'}>
                <button className={'button_cancel'}
                            onClick={() => props.toProfile()}>
                        Отменить
                    </button>
                    <button className={'button_main_color'}
                            onClick={() => props.setButtonSavePressed(true)}>
                        Сохранить
                    </button>
                </footer>
            </section>
        </section>
    )
}