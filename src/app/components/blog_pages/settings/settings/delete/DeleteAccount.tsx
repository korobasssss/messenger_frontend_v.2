import {DeleteAccountInterface} from "@/app/interfaces/settings/deleteAccount";
import {DeleteAccountComponent} from "@/app/components/blog_pages/settings/settings/delete/DeleteAccountComponent";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const DeleteAccount = (props: DeleteAccountInterface) => {

    const router = useRouter()

    const [input_password, setInputPassword] = useState('')
    const [isButtonDeletePressed, setIsButtonDeletePressed] = useState(false)

    useEffect(() => {
        if (isButtonDeletePressed) {
            props.deleteAccount(input_password, router)
        }
        setIsButtonDeletePressed(false)
    }, [isButtonDeletePressed]);

    const toSettings = () => {
        router.push(MAIN_PATH + Cookies.get(Cookie_names.ID) + Main_path.SETTINGS)
    }

    return <DeleteAccountComponent message={props.message}
                                   setButtonDeleteAccountPressed={setIsButtonDeletePressed}
                                   input_password={input_password}
                                   setInput_password={setInputPassword}
                                   toSettings={toSettings}/>
}