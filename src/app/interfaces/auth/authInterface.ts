export interface Main_authInterface {
    message: string

    authorization(input_email: string, input_nickname: string, input_password: string): void
    registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                  input_name: string, input_birthDate: string): void
    recovery(input_email: string): void
    activation_account(): void
}

export interface Main_authState {
    auth: {
        message: string
    }
}

export interface LoginInterface {
    message: string
    authorization(input_email: string, input_nickname: string, input_password: string): void
}

export interface LoginComponentInterface {
    message: string
    enter(input_login: string, input_password: string): void
    registration(): void
    recovery(): void
}

export interface RegistrationInterface {
    message: string
    registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                 input_name: string, input_birthDate: string): void
}

export interface RecoveryInterface {
    message: string
    recovery(input_email: string): void
}

export interface RestoreInterfaceComponent {
    message: string
    recovery(input_email: string): void
    cancel(): void
}

export interface ActivationInterface {
    activation_account(): void
    message: string
}
export interface ActivationInterfaceComponent {
    message: string
}