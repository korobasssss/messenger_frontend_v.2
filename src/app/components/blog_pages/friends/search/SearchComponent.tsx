import Image from "next/image";
import sent_request_icon from "@/assets/icons/friends/sent_request_icon.svg";

export const SearchButtonsComponent = () => {

    return (
        <button className={'button_3rd_plane'}>
            <Image src={sent_request_icon} alt={'friends icon'}/>
        </button>
    )
}