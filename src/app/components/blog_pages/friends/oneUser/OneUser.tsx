import {OneUserComponent} from "@/app/components/blog_pages/friends/oneUser/OneUserComponent";
import {OneUserInterface} from "@/app/interfaces/friends/friendsInterface";

export const OneUser = (props: OneUserInterface) => {

    const action = (action: string) => {
        props.action(props.oneUser.id, action)
    }

    return <OneUserComponent oneUser={props.oneUser}
                             action={action}/>
}