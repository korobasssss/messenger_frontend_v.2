import {CreatePostComponent} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostComponent";
import {CreatePostInterface} from "@/app/interfaces/posts/createPostInterface";
import React, {useState} from "react";
import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";
import {useRouter} from "next/navigation";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {fileSize} from "@/redux/thunks/photoThunk";
import {Cookie_names} from "@/redux/messages/cookie_names";
import {maxPhotoCount} from "@/redux/thunks/profileThunk";
import {PostMessagesRU} from "@/redux/messages/postMessages";
import {ProfileMessagesRU} from "@/redux/messages/profileMessages";

export const CreatePost = (props: CreatePostInterface) => {
    const router = useRouter()

    const [input_photoFiles, setInput_photoFiles] = useState<SetPhotoInterface[]>([])
    const [input_photoUrl, setInput_photoUrl] = useState<string[]>([])
    const [input_postText, setInput_postText] = useState('')

    const create = () => {
        if (input_postText !== '' || input_photoFiles.length !== 0) {
            props.createPost(input_postText, input_photoFiles, router)
            if (input_photoFiles.length !== 0) {
                props.getPhoto()
                props.getPhotoCount()
            }
        }
    }

    const toProfile = () => {
        router.push(MAIN_PATH + Cookies.get(Cookie_names.ID) + Main_path.PROFILE)
        props.clearMessage()

    }

    const setPhoto = (photo:  React.ChangeEvent<HTMLInputElement>) => {
        props.clearMessage()
        if (input_photoFiles.length < maxPhotoCount) {
            setPhotoFile(photo.target.files as FileList, setInput_photoUrl, setInput_photoFiles)
        } else {
            props.setMessageThunk(PostMessagesRU.LIMIT_6_PHOTO)
        }
    }

    const setPhotoFile = (photoFile: FileList, setPhotoUrl: (photoUrl: string[]) => void,
                      setPhotoFile: (photoFile: SetPhotoInterface[]) => void) => {
        if (photoFile !== null) {
            const file = photoFile[0];
            if (photoFile[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        const photo = [...input_photoUrl, event.target.result.toString()]
                        setPhotoUrl(photo);
                    }

                };
                reader.readAsDataURL(file);
                const photo = [...input_photoFiles, {flag: true, input_postPhoto: photoFile[0]}]
                setPhotoFile(photo)
            } else {
                props.setMessageThunk(ProfileMessagesRU.FILE_TOO_BIT)
            }
        }
    }

    return <CreatePostComponent input_postText={input_postText}
                                setInput_postText={setInput_postText}
                                input_photoUrl={input_photoUrl}
                                setPhoto={setPhoto}
                                createPost={create}
                                toProfile={toProfile}
                                message={props.message}/>
}