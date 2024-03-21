import one_photo_scss from "@/app/scss/for_components/blog_pages/photo/one_photo.module.scss";

import '@/app/scss/global/globals.scss'
import create_post_scss from '@/app/scss/for_components/blog_pages/post/create_post.module.scss'

import add_photo_icon from '@/assets/icons/post/add_photo_icon.svg'
import Image from "next/image";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import {CreatePostInterfaceComponent} from "@/app/interfaces/posts/createPostInterface";


export const CreatePostComponent = (props: CreatePostInterfaceComponent) => {


    return (
        <section className={one_photo_scss.page}>
            <section className={one_photo_scss.dark_bgc}
                     onClick={() => props.toProfile()}>
            </section>
            <section className={create_post_scss.route}>
                <textarea className={create_post_scss.input + ' scrollBar'} placeholder={'Напишите что-нибудь'}
                          onChange={(event) => props.setInput_postText(event.target.value)}/>
                <ul className={one_post_scss.post_photos356}>
                    {props.input_photoUrl !== undefined ?
                        props.input_photoUrl.map((onePhoto: string) => {
                            return (
                                <li>
                                    <Image src={onePhoto} className={one_post_scss.post_photo}
                                           alt={'pred post image'} width={'0'} height={'0'}/>
                                </li>
                            )
                        }) : null}
                </ul>
                <footer className={create_post_scss.footer}>
                    <button className={'button_cancel'} onClick={() => props.toProfile()}>
                        Отменить
                    </button>
                    <section className={create_post_scss.main_buttons_section}>
                        <button className={'button_3rd_plane'}>
                            <input className={create_post_scss.hidden} type="file" id="setFiles-btn"
                            onChange={(event) => props.setPhoto(event)}/>
                            <label htmlFor="setFiles-btn">
                                <Image src={add_photo_icon} alt={'add photo'}/>
                            </label>
                        </button>
                        <button className={'button_main_color'} onClick={() => props.createPost()}>
                            Опубликовать
                        </button>
                    </section>
                </footer>
            </section>
        </section>
    )
}