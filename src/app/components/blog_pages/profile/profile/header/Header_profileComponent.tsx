import default_cover from '@/assets/common/default_cover.svg'
import default_avatar from '@/assets/common/default_avatar.svg'
import sent_request_long_icon from '@/assets/icons/profile/sent_request_long.svg'
import sent_request_short_icon from '@/assets/icons/profile/sent_request_short.svg'
import settings_icon from '@/assets/icons/profile/settings_icon.svg'
import Image from "next/image";

import header_profile_scss from '@/app/scss/for_components/blog_pages/profile/header_profile.module.scss'
import '@/app/scss/global/globals.scss'
import {useState} from "react";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import {HeaderComponentInterface} from "@/app/interfaces/profile/profileInterface";
import Cookies from "js-cookie";
import edit_profile_scss from "@/app/scss/for_components/blog_pages/edit_profile/edit_profile.module.scss";

export const Header_profileComponent = (props: HeaderComponentInterface) => {
    const [isButtonHover, setButtonHover] = useState(false)
    return (
        <header className={header_profile_scss.route}>
            <section className={header_profile_scss.cover_section}>
                {props.coverUrl !== '' ?
                    <Image loader={() => props.coverUrl}
                           src={props.coverUrl}
                           className={header_profile_scss.cover_img} alt={'user cover'}
                           width={'0'} height={'0'}/>
                    :
                    <Image src={default_cover}
                           className={header_profile_scss.cover_img} alt={'user cover'}
                           width={'0'} height={'0'}/>
                }
            </section>
            <section className={header_profile_scss.section}>
                <main className={header_profile_scss.user_data}>
                    <section className={header_profile_scss.user_nameNick}>
                        <section className={header_profile_scss.avatar_section}>
                            {props.avatarUrl !== '' ?
                                <Image loader={() => props.avatarUrl}
                                       src={props.coverUrl}
                                       className={header_profile_scss.avatar_img} alt={'user avatar'}
                                       width={'0'} height={'0'}/>
                                :
                                <Image src={default_avatar}
                                       className={header_profile_scss.avatar_img} alt={'user avatar'}
                                       width={'0'} height={'0'}/>
                            }
                        </section>
                        <section className={header_profile_scss.data_and_button}>
                            <section className={one_post_scss.name}>
                                <div className={'name'}>{props.name}</div>
                                <div className={'nickname'}>@{props.nickname}</div>
                            </section>
                            <section>
                                {Cookies.get('id_current') === Cookies.get('id') ?
                                    <button className={'button_3rd_plane ' + header_profile_scss.sent_request}
                                            onClick={() => props.editProfile()}>
                                        <Image src={settings_icon}
                                               alt={'sent request to friends'}/>
                                    </button>
                                    :
                                    <section onMouseEnter={() => setButtonHover(true)}
                                             onMouseLeave={() => setButtonHover(false)}>
                                        <button className={'button_3rd_plane ' + header_profile_scss.sent_request}
                                                onClick={() => props.toFriends()}>
                                            <Image
                                                src={isButtonHover ? sent_request_long_icon : sent_request_short_icon}
                                                alt={'sent request to friends'}
                                                width={'0'} height={'0'}/>
                                        </button>
                                    </section>
                                }
                            </section>
                        </section>
                    </section>
                    <section>
                        <p>{props.bio}</p>
                    </section>
                </main>
            </section>

        </header>
    )
}