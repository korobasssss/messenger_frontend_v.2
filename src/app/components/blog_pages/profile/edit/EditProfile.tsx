import {EditProfileComponent} from "@/app/components/blog_pages/profile/edit/EditProfileComponent";
import React, {useEffect, useState} from "react";
import {EditProfileInterface} from "@/app/interfaces/profile/edit_profileInterface";
import {useRouter} from "next/navigation";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {fileSize} from "@/redux/thunks/photoThunk";
import {Cookie_names} from "@/redux/messages/cookie_names";
import {ProfileMessagesRU} from "@/redux/messages/profileMessages";
import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";

export const EditProfile = (props: EditProfileInterface) => {

    const router = useRouter()

    const [input_nickname, setInput_nickname] = useState(props.nickname)
    const [input_name, setInput_name] = useState(props.name)
    const [input_bio, setInput_bio] = useState(props.bio)

    const [input_avatarUrl, setInput_avatarUrl] = useState(props.avatarUrl)
    const [input_fileAvatar, setInput_fileAvatar] = useState<SetPhotoInterface[]>([]);
    const [input_coverUrl, setInput_coverUrl] = useState(props.coverUrl)
    const [input_fileCover, setInput_fileCover] = useState<SetPhotoInterface[]>([]);

    const [isAvatarDeleteFile, setAvatarDeleteFile] = useState(false)
    const [isCoverDeleteFile, setCoverDeleteFile] = useState(false)

    const [isButtonSavePressed, setButtonSavePressed] = useState(false)


    useEffect(() => {
        props.getNickname()
        props.getData()
    }, [props.nickname, props.name])


    useEffect(() => {
        if (isButtonSavePressed) {
            if (isAvatarDeleteFile && props.avatarUrl !== '') {
                props.deleteAvatar(props.avatarUrl)
                setAvatarDeleteFile(false)
            }
            if (isCoverDeleteFile && props.coverUrl !== '') {
                props.deleteCover(props.coverUrl)
                setCoverDeleteFile(false)
            }
            if (input_avatarUrl.length != 0 && input_fileAvatar.length != 0) {
                props.setAvatar(input_fileAvatar[0])
            }
            if (input_coverUrl.length != 0 && input_fileCover.length != 0) {
                props.setCover(input_fileCover[0])
            }

            if (input_name.length != 0 && input_bio.length != 0)
            props.changeProfileData(input_name, input_bio, router)
        }
        setButtonSavePressed(false)
    }, [isButtonSavePressed]); // отправка данных на сервер

    const toProfile = () => {
        props.clearMessage()
        router.push(MAIN_PATH + Cookies.get(Cookie_names.ID) + Main_path.PROFILE)
    }

    // const setPhoto = (photoFile: FileList, setPhotoUrl: (photoUrl: string) => void,
    //                   setPhotoFile: (photoFile: SetPhotoInterface[]) => void,
    //                   setDeletePhoto: (flag: boolean) => void) => {
    //     props.clearMessage()
    //     if (photoFile !== null) {
    //         const file = photoFile[0];
    //         if (photoFile[0].size <= fileSize) {
    //             const reader = new FileReader();
    //
    //             reader.onload = (event) => {
    //                 if (event.target !== null && event.target.result !== null) {
    //                     setPhotoUrl(event.target.result.toString());
    //                 }
    //
    //             };
    //             reader.readAsDataURL(file);
    //             debugger
    //             const photo: SetPhotoInterface = {
    //                 flag: true,
    //                 input_postPhoto: photoFile[0]
    //             }
    //             setPhotoFile([photo])
    //             if (props.avatarUrl !== '') {
    //                 setDeletePhoto(true)
    //             }
    //         } else {
    //             props.setMessageThunk(ProfileMessagesRU.FILE_TOO_BIT)
    //         }
    //     }
    // }

    useEffect(() => {
        if (isAvatarDeleteFile) {
            setInput_avatarUrl('')
            setInput_fileAvatar([])
        }
    }, [isAvatarDeleteFile]);

    useEffect(() => {
        if (isCoverDeleteFile) {
            setInput_coverUrl('')
            setInput_fileCover([])
        }
    }, [isCoverDeleteFile]);

    const setCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setPhoto(event.target.files as FileList, setInput_coverUrl, setInput_fileCover, setCoverDeleteFile)

        props.clearMessage()
        if (event.target.files !== null) {
            const file = event.target.files[0];
            if (event.target.files[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        setInput_coverUrl(event.target.result.toString());
                    }

                };
                reader.readAsDataURL(file);
                debugger
                const photo: SetPhotoInterface = {
                    flag: true,
                    input_postPhoto: event.target.files[0]
                }
                setInput_fileCover([photo])
                if (props.avatarUrl !== '') {
                    setCoverDeleteFile(true)
                }
            } else {
                props.setMessageThunk(ProfileMessagesRU.FILE_TOO_BIT)
            }
        }
    }

    const setAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setPhoto(event.target.files as FileList, setInput_avatarUrl, setInput_fleAvatar, setAvatarDeleteFile)

        props.clearMessage()
        if (event.target.files !== null) {
            const file = event.target.files[0];
            if (event.target.files[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        setInput_avatarUrl(event.target.result.toString());
                    }

                };
                reader.readAsDataURL(file);
                debugger
                const photo: SetPhotoInterface = {
                    flag: true,
                    input_postPhoto: event.target.files[0]
                }
                setInput_fileAvatar([photo])
                if (props.avatarUrl !== '') {
                    setAvatarDeleteFile(true)
                }
            } else {
                props.setMessageThunk(ProfileMessagesRU.FILE_TOO_BIT)
            }
        }
    }


    return <EditProfileComponent input_name={input_name}
                                 input_bio={input_bio}
                                 input_avatarUrl={input_avatarUrl}
                                 input_coverUrl={input_coverUrl}
                                 input_nickname={input_nickname}
                                 setInput_name={setInput_name}
                                 setInput_bio={setInput_bio}
                                 setInput_avatarUrl={setAvatar}
                                 setInput_coverUrl={setCover}
                                 setInput_nickname={setInput_nickname}
                                 setButtonSavePressed={setButtonSavePressed}
                                 toProfile={toProfile}
                                 setAvatarDeleteFile={setAvatarDeleteFile}
                                 setCoverDeleteFile={setCoverDeleteFile}
                                 message={props.message}/>
}