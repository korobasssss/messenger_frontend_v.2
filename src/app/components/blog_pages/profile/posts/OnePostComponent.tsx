import default_avatar from '@/assets/common/default_avatar.svg'
import default_post_icon from '@/assets/icons/post/default_post_icon.svg'
import not_like_icon from '@/assets/icons/post/not_like_icon.svg'
import like_icon from '@/assets/icons/post/like_icon.svg'
import comment_icon from '@/assets/icons/post/comment_icon.svg'
import Image from "next/image";

import '@/app/scss/global/globals.scss'
import one_post_scss from '@/app/scss/for_components/blog_pages/post/one_post.module.scss'

export const OnePostComponent = () => {
    return (
        <section className={one_post_scss.route}>
            <header className={one_post_scss.header}>
                <Image src={default_avatar} className={one_post_scss.avatar} alt={'user avatar'}/>
                <section className={one_post_scss.name_nickname}>
                    <div className={'name_small'}>Другой</div>
                    <div className={'nickname'}>@name</div>
                </section>
            </header>
            <main className={one_post_scss.post_data}>
                <ul className={one_post_scss.post_photos}>
                    <li>
                        <Image src={default_post_icon} className={one_post_scss.post_photo} alt={'post photo'}/>
                    </li>
                    <li>
                        <Image src={default_post_icon} className={one_post_scss.post_photo} alt={'post photo'}/>
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur. Cras facilisis diam lacus massa ultricies volutpat vitae.
                    Natoque consequat ut id nulla a faucibus scelerisque in. Ullamcorper dignissim blandit enim sed
                    morbi urna sit. Amet interdum amet purus urna sit. Odio interdum nec elit arcu nunc. Posuere
                    bibendum tempor adipiscing aliquet dignissim. In arcu viverra id suspendisse amet.</p>
                <footer className={one_post_scss.footer}>
                    <section className={one_post_scss.buttons}>
                        <button className={'button_3rd_plane ' + one_post_scss.button}>
                            <Image src={not_like_icon} alt={'not like'}/>
                            <div>1</div>
                        </button>
                        <button className={'button_3rd_plane ' + one_post_scss.button}>
                            <Image src={comment_icon} alt={'comment'}/>
                            <div>0</div>
                        </button>
                    </section>
                    <div>7 ноября, 13:21</div>
                </footer>
            </main>
        </section>
    )
}