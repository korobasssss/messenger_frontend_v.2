import Image from "next/image";
import delete_icon from "@/assets/icons/friends/delete_icon.svg";
import sent_request_icon from "@/assets/icons/friends/sent_request_icon.svg";
import one_user_scss from "@/app/scss/for_components/blog_pages/friends/one_user.module.scss";

export const SubscribersButtonsComponent = () => {

    return (
        <main className={one_user_scss.subscribersButtons}>
            <button className={'button_3rd_plane'}>
                <Image src={sent_request_icon} alt={'friends icon'}/>
            </button>
            <button className={'button_3rd_plane'}>
                <Image src={delete_icon} alt={'friends icon'}/>
            </button>
        </main>
    )
}