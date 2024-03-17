import {RegistrationComponent} from "@/app/components/auth/login_registration/registration/RegistrationComponent";
import {RegistrationInterface} from "@/app/interfaces/auth/authInterface";

export const Registration = (props: RegistrationInterface) => {

    const registration = (input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                          input_name: string, input_birthDate: string) => {
        props.registration(input_email, input_nickname, input_password, input_confirmPassword,
                           input_name, input_birthDate)
    }

    return <RegistrationComponent registration={registration}/>
}