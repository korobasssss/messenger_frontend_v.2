import Image from "next/image";
import friends_icon from '@/assets/icons/friends/friends_icon.svg'
import delete_icon from '@/assets/icons/friends/delete_icon.svg'

import '@/app/scss/global/globals.scss'
import {useState} from "react";

export const FriendsButtonsComponent = () => {
    const [isHover, setHover] = useState(false)

    return (
        <button className={'button_3rd_plane'} onMouseEnter={() => setHover(true)}
                                                onMouseLeave={() => setHover(false)}>
            <Image src={isHover ? delete_icon : friends_icon} alt={'friends icon'}/>
        </button>
    )
}