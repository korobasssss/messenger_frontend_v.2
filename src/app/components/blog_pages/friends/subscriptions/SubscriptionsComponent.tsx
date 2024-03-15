import subscription_icon from '@/assets/icons/friends/subscription_icon.svg'
import {useState} from "react";
import Image from "next/image";
import delete_icon from "@/assets/icons/friends/delete_icon.svg";
export const SubscriptionsButtonsComponent = () => {
    const [isHover, setHover] = useState(false)

    return (
        <button className={'button_3rd_plane'} onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
            <Image src={isHover ? delete_icon : subscription_icon} alt={'friends icon'}/>
        </button>
    )
}