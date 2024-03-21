import {FriendsComponent} from "@/app/components/blog_pages/friends/friends/FriendsComponent";
import {
    HeaderComponentInterface,
    UsersInterface,
    UsersInterfaceComponent
} from "@/app/interfaces/friends/friendsInterface";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {Friends_path} from "@/app/paths/friends";

export const Friends = (props: UsersInterface & HeaderComponentInterface) => {
    const pathname = usePathname().split('/')
    const currPathname = '/' + pathname[pathname.length - 1]

    const [isButtonActionPressed, setButtonActionPressed] = useState(false)

    useEffect(() => {
        switch (currPathname) {
            case Friends_path.FRIENDS_USER : {
                props.getFriends()
                break
            }
            case Friends_path.SUBSCRIBERS_USER : {
                props.getSubscribers()
                break
            }
            case Friends_path.SUBSCRIPTIONS_USER : {
                props.getSubscriptions()
                break
            }
            case Friends_path.SEARCH : {
                props.getSearch()
                break
            }
        }
        props.getCountFriends()
        props.getCountSubscribers()
        props.getCountSubscriptions()

        setButtonActionPressed(false)
    }, [isButtonActionPressed]);

    return <FriendsComponent users={props.users}
                             getFriends={props.getFriends}
                             getSubscriptions={props.getSubscriptions}
                             getSubscribers={props.getSubscribers}
                             getSearch={props.getSearch}
                             countFriends={props.countFriends}
                             countSubscribers={props.countSubscriptions}
                             countSubscriptions={props.countSubscribers}
                             getCountFriends={props.getCountFriends}
                             getCountSubscribers={props.getCountSubscribers}
                             getCountSubscriptions={props.getCountSubscriptions}
                             setButtonActionPressed={setButtonActionPressed}/>
        }