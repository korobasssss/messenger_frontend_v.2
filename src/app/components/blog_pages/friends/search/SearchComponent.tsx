import {useState} from "react";
import Image from "next/image";
import delete_icon from "@/assets/icons/friends/delete_icon.svg";
import sent_request_icon from "@/assets/icons/friends/sent_request_icon.svg";

export const SearchButtonsComponent = () => {
    const [isHover, setHover] = useState(false)

    return (
        <button className={'button_3rd_plane'} onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
            <Image src={isHover ? delete_icon : sent_request_icon} alt={'friends icon'}/>
        </button>
    )
}