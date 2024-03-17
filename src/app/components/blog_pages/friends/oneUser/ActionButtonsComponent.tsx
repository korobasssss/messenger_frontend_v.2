import Image from "next/image";
import sent_request_icon from "@/assets/icons/friends/sent_request_icon.svg";
import {Actions, Status, TypeButtons} from "@/app/interfaces/friends/friendsInterface";
import delete_icon from "@/assets/icons/friends/delete_icon.svg";
import friends_icon from "@/assets/icons/friends/friends_icon.svg";
import {useState} from "react";
import subscription_icon from "@/assets/icons/friends/subscription_icon.svg";
import one_user_scss from "@/app/scss/for_components/blog_pages/friends/one_user.module.scss";

export const ActionButtonsComponent = (props: TypeButtons) => {
    const [isHover, setHover] = useState(false)

    return (
        <section>
            {
                props.status === Status.NULL ?
                    <button className={'button_3rd_plane'}
                            onClick={() => props.action(Actions.CREATE)}>
                        <Image src={sent_request_icon} alt={'friends icon'}/>
                    </button>
                :
                props.status === Status.FRIENDS ?
                    <button className={'button_3rd_plane'} onMouseEnter={() => setHover(true)}
                            onClick={() => props.action(Actions.DELETE_FRIEND)}
                            onMouseLeave={() => setHover(false)}>
                        <Image src={isHover ? delete_icon : friends_icon} alt={'friends icon'}/>
                    </button>
                :
                props.status === Status.SEND_FIRST ?
                    <button className={'button_3rd_plane'} onMouseEnter={() => setHover(true)}
                            onClick={() => props.action(Actions.DELETE_REQUEST)}
                           onMouseLeave={() => setHover(false)}>
                        <Image src={isHover ? delete_icon : subscription_icon} alt={'friends icon'}/>
                    </button>
                :
                props.status === Status.SEND_SECOND ?
                    <main className={one_user_scss.subscribersButtons}>
                        <button className={'button_3rd_plane'}
                                onClick={() => props.action(Actions.REJECT)}>
                             <Image src={sent_request_icon} alt={'friends icon'}/>
                        </button>
                        <button className={'button_3rd_plane'}>
                            <Image src={delete_icon} alt={'friends icon'}/>
                        </button>
                    </main> : null
            }
        </section>
    )
}