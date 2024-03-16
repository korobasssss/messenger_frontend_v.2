import Image from "next/image";
import default_avatar from '@/assets/common/default_avatar.svg'

import edit_icon from '@/assets/icons/post/edit_icon.svg'
import {useState} from "react";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import not_like_icon from "@/assets/icons/post/not_like_icon.svg";
import {EditComponent} from "@/app/components/blog_pages/profile/posts/comment/EditComponent";
import one_comment_scss from "@/app/scss/for_components/blog_pages/post/one_comment.module.scss";

export const OneCommentComponent = () => {
    const [isHover, setHover] = useState(false)

    return (
        <section className={one_comment_scss.user_post_data}>
            <Image src={default_avatar} className={one_comment_scss.user_avatar} alt={'user avatar'}/>
            <section className={one_comment_scss.info}>
                <header className={one_comment_scss.user_data_with_edit}>
                    <section className={one_comment_scss.user_data}>
                        <div className={'name_small'}>Другой</div>
                        <div className={'nickname'}>@name</div>
                    </section>
                    <section onMouseEnter={() => setHover(true)}
                             onMouseLeave={() => setHover(false)} className={one_comment_scss.edit_section}>
                        <button className={'button_3rd_plane'}>
                            <Image src={edit_icon} alt={'edit'}/>
                        </button>
                        <section className={one_comment_scss.edit}>
                            {isHover ? <EditComponent/> : null}
                        </section>
                    </section>
                </header>
                <p>Текст поста, к которому относится фотография</p>
                <footer className={one_post_scss.footer}>
                    <section className={one_post_scss.buttons}>
                        <button className={'button_3rd_plane ' + one_post_scss.button}>
                        <Image src={not_like_icon} alt={'not like'}/>
                            <div>1</div>
                        </button>
                    </section>
                    <div>7 ноября, 13:21</div>
                </footer>
            </section>
        </section>

    )
}