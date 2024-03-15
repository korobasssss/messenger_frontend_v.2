import default_cover from '@/assets/common/default_cover.svg'
import default_avatar from '@/assets/common/default_avatar.svg'
import sent_request_long from '@/assets/icons/profile/sent_request_long.svg'
import sent_request_short from '@/assets/icons/profile/sent_request_short.svg'
import Image from "next/image";

import header_profile_scss from '@/app/scss/for_components/blog_pages/profile/header_profile.module.scss'
import '@/app/scss/global/globals.scss'
import {useState} from "react";

export const Header_profileComponent = () => {
    const [isButtonHover, setButtonHover] = useState(false)

    return (
        <header className={header_profile_scss.route}>
            <section className={header_profile_scss.cover_section}>
                <Image src={default_cover} className={header_profile_scss.cover_img} alt={'user cover'}/>
            </section>
            <main className={header_profile_scss.user_data}>
                <section className={header_profile_scss.user_nameNick}>
                    <section className={header_profile_scss.avatar_section}>
                        <Image src={default_avatar} className={header_profile_scss.avatar_img} alt={'user avatar'}/>
                    </section>
                    <section className={header_profile_scss.data_and_button}>

                        <section>
                            <div className={'name'}>Другой</div>
                            <div className={'nickname'}>@name</div>
                        </section>
                        <section onMouseEnter={() => setButtonHover(true)}
                                 onMouseLeave={() => setButtonHover(false)}>
                            <button className={'button_3rd_plane ' + header_profile_scss.sent_request}>
                                <Image src={isButtonHover? sent_request_long : sent_request_short} alt={'sent request to friends'}/>
                            </button>
                        </section>

                    </section>
                </section>
                <section>
                    <p>Целуйте мониторы!!! Я в сети</p>
                </section>
            </main>
        </header>
    )
}