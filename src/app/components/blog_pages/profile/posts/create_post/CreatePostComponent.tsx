import '@/app/scss/global/globals.scss'
import create_post_scss from '@/app/scss/for_components/blog_pages/post/create_post.module.scss'

import create_post_icon from '@/assets/icons/post/create_post_icon.svg'
import Image from "next/image";

export const CreatePostComponent = () => {
    return (
        <button className={'button_main_color ' + create_post_scss.button}>
            <Image src={create_post_icon} alt={'create post'}/>
            Создать
        </button>
    )
}