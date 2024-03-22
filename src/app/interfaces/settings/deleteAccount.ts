import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface DeleteAccountInterface {
    message: string
    deleteAccount(input_password: string, router: AppRouterInstance): void
}

export interface DeleteAccountComponentInterface {
    message: string
    setButtonDeleteAccountPressed(flag: boolean): void

    input_password: string
    setInput_password(input_password: string): void

    toSettings(): void
}