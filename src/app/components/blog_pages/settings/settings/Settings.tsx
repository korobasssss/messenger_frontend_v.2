import {useEffect, useState} from "react";
import {SettingsComponent} from "@/app/components/blog_pages/settings/settings/SettingsComponent";
import {SettingsInterface} from "@/app/interfaces/settings/settingsInterface";
import Cookies from "js-cookie";

export const Settings = (props: SettingsInterface) => {
    const [isEmailEdit, setEmailEdit] = useState(false)
    const [isPasswordEdit, setPasswordEdit] = useState(false)
    const [isPasswordEditCode, setPasswordEditCode] = useState(false)


    const [isButtonChangeEmail, setButtonChangeEmail] = useState(false)
    const [isButtonSetOldPassword, setButtonSetOldPassword] = useState(false)
    const [isButtonChangePassword, setButtonChangePassword] = useState(false)

    const [input_email, setInput_email] = useState('')
    const [input_password_email, setInput_password_email] = useState('')

    const [input_password, setInput_password] = useState('')
    const [input_code, setInput_code] = useState('')
    const [input_password_new, setInput_password_new] = useState('')
    const [input_password_new_confirm, setInput_password_new_confirm] = useState('')


    useEffect(() => {
        if (isButtonChangeEmail) {
            if (input_password_email !== '' && input_email !== '') {
                props.changeEmail(input_password_email, input_email)

                setInput_email('')
                setInput_password_email('')
            } else {
                props.setMessage('Введите данные')
            }
        }
        setButtonChangeEmail(false)
    }, [isButtonChangeEmail]);

    useEffect(() => {
        if (isButtonSetOldPassword) {
            if (input_password !== '') {
                props.setOldPassword(input_password)
                setTimeout(() => {
                    if (Cookies.get('isPasswordTrue') === 'true') {
                        setPasswordEditCode(true)
                        Cookies.remove('isPasswordTrue')
                    }
                }, 100)

                setInput_password('')
            } else {
                props.setMessage('Введите данные')
            }
        }
        setButtonSetOldPassword(false)
    }, [isButtonSetOldPassword]);

    useEffect(() => {
        if (isButtonChangePassword) {
            if (input_password_new !== '' && input_password_new_confirm !== '') {
                props.changePassword(input_code, input_password_new, input_password_new_confirm)

                setInput_code('')
                setInput_password_new('')
                setInput_password_new_confirm('')
            } else {
                props.setMessage('Введите данные')
            }
        }
        setButtonChangePassword(false)
    }, [isButtonChangePassword]);


    return <SettingsComponent message={props.message}
                              input_email={input_email}
                              input_password_email={input_password_email}
                              input_password={input_password}
                              input_code={input_code}
                              input_password_new={input_password_new}
                              input_password_new_confirm={input_password_new_confirm}
                              setInput_email={setInput_email}
                              setInput_password_email={setInput_password_email}
                              setInput_password={setInput_password}
                              setInput_code={setInput_code}
                              setInput_password_new={setInput_password_new}
                              setInput_password_new_confirm={setInput_password_new_confirm}
                              setButtonChangeEmail={setButtonChangeEmail}
                              setButtonSetOldPassword={setButtonSetOldPassword}
                              setButtonChangePassword={setButtonChangePassword}
                              setMessage={props.setMessage}

                              isEmailEdit={isEmailEdit}
                              isPasswordEdit={isPasswordEdit}
                              isPasswordEditCode={isPasswordEditCode}
                              setEmailEdit={setEmailEdit}
                              setPasswordEdit={setPasswordEdit}
                              setPasswordEditCode={setPasswordEditCode}/>
}