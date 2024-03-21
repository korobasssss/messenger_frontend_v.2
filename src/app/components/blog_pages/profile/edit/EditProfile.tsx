import {EditProfileComponent} from "@/app/components/blog_pages/profile/edit/EditProfileComponent";
import React, {useEffect, useState} from "react";
import {EditProfileInterface} from "@/app/interfaces/profile/edit_profileInterface";
import {useRouter} from "next/navigation";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";

export const EditProfile = (props: EditProfileInterface) => {

    const [input_nickname, setInput_nickname] = useState(props.nickname)
    const [input_name, setInput_name] = useState(props.name)
    const [input_bio, setInput_bio] = useState(props.bio)

    const [input_avatarUrl, setInput_avatarUrl] = useState(props.avatarUrl)
    const [input_avatarFile, setInput_avatarFile] = useState<File | string>('');
    const [input_coverUrl, setInput_coverUrl] = useState(props.coverUrl)
    const [input_coverFile, setInput_coverFile] = useState<File | string>('');

    const [isAvatarDeleteFile, setAvatarDeleteFile] = useState(false)
    const [isCoverDeleteFile, setCoverDeleteFile] = useState(false)

    const [isButtonSavePressed, setButtonSavePressed] = useState(false)

    const router = useRouter()


    useEffect(() => {

        props.getNickname()
        props.getData()
    }, [props])


    useEffect(() => {
        if (isButtonSavePressed) {
            console.log(input_avatarFile, input_coverFile)
            if (isAvatarDeleteFile && props.avatarUrl !== '') {
                props.deleteAvatar(props.avatarUrl)
                setAvatarDeleteFile(false)
            }
            if (isCoverDeleteFile && props.coverUrl !== '') {
                props.deleteCover(props.coverUrl)
                setCoverDeleteFile(false)
            }
            if (input_avatarUrl.length != 0 && input_avatarFile !== null) {
                props.setAvatar(input_avatarFile as File)
            }
            if (input_coverUrl.length != 0 && input_coverFile !== null ) {
                props.setCover(input_coverFile as File)
            }

            if (input_name.length != 0 && input_bio.length != 0)
            props.changeProfileData(input_name, input_bio, router) // todo date
        }
        setButtonSavePressed(false)
    }, [isButtonSavePressed]); // отправка данных на сервер

    const toProfile = () => {
        router.push(MAIN_PATH + Cookies.get('id_current') + Main_path.PROFILE)
    }

    const setPhoto = (photoFile: FileList, setPhotoUrl: (photoUrl: string) => void,
                      setPhotoFile: (photoFile: File) => void,
                      setDeletePhoto: (flag: boolean) => void) => {
        if (photoFile !== null) {
            const file = photoFile[0];
            if (photoFile[0].size <= 2097152) { // todo
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        setPhotoUrl(event.target.result.toString());
                    }

                };
                reader.readAsDataURL(file);
                setPhotoFile(photoFile[0])
                if (props.avatarUrl !== '') {
                    setDeletePhoto(true)
                }
            } else {
                // props.setMessage('Большой размер файла')
            }
        }
    }

    useEffect(() => {
        if (isAvatarDeleteFile) {
            setInput_avatarUrl('')
            setInput_avatarFile('')
        }
    }, [isAvatarDeleteFile]);

    useEffect(() => {
        if (isCoverDeleteFile) {
            setInput_coverUrl('')
            setInput_coverFile('')
        }
    }, [isCoverDeleteFile]);

    const setCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(event.target.files as FileList, setInput_coverUrl, setInput_coverFile, setCoverDeleteFile)
    }

    const setAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(event.target.files as FileList, setInput_avatarUrl, setInput_avatarFile, setAvatarDeleteFile)
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
                                 setCoverDeleteFile={setCoverDeleteFile}/>
}