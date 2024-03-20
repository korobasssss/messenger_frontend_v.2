import {RegistrationComponent} from "@/app/components/auth/login_registration/registration/RegistrationComponent";
import {RegistrationInterface} from "@/app/interfaces/auth/authInterface";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export const Registration = (props: RegistrationInterface) => {
    const router = useRouter()

    const [input_nickname, setInput_nickname] = useState('')
    const [input_email, setInput_email] = useState('')
    const [input_password, setInput_password] = useState('')
    const [input_confirm_password, setInput_confirm_password] = useState('')
    const [input_name, setInput_name] = useState('')
    const [input_date, setInput_date] = useState('')
    const [isRegisterPressed, setRegisterPressed] = useState(false)

    useEffect(() => {
        if (isRegisterPressed) {
            if (input_nickname.length !== 0 && input_email.length !== 0 && input_password.length !== 0 &&
                input_confirm_password.length !== 0 && input_name.length !== 0 && input_date.length !== 0)
            props.registration(input_email, input_nickname, input_password, input_confirm_password,
                input_name, input_date, router)
        }
        setRegisterPressed(false)
    }, [isRegisterPressed])

    return <RegistrationComponent input_nickname={input_nickname} input_email={input_email}
                                  input_password={input_password} input_confirm_password={input_confirm_password}
                                  input_name={input_name} input_date={input_date}
                                  setInput_nickname={setInput_nickname} setInput_email={setInput_email}
                                  setInput_password={setInput_password} setInput_confirm_password={setInput_confirm_password}
                                  setInput_name={setInput_name} setInput_date={setInput_date}
                                  setRegisterPressed={setRegisterPressed}/>
}