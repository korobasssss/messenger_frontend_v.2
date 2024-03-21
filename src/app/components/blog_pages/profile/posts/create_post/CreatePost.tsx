import {CreatePostComponent} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostComponent";
import {CreatePostInterface} from "@/app/interfaces/posts/createPostInterface";
import React, {useState} from "react";
import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";
import {useRouter} from "next/navigation";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";

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
        router.push(MAIN_PATH + Cookies.get('id') + Main_path.PROFILE)
    }

    const setPhoto = (photo:  React.ChangeEvent<HTMLInputElement>) => {
        setPhotoFile(photo.target.files as FileList, setInput_photoUrl, setInput_photoFiles)
    }

    const setPhotoFile = (photoFile: FileList, setPhotoUrl: (photoUrl: string[]) => void,
                      setPhotoFile: (photoFile: SetPhotoInterface[]) => void) => {
        if (photoFile !== null) {
            const file = photoFile[0];
            if (photoFile[0].size <= 2097152) { // todo
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
                // props.setMessage('Большой размер файла')
            }
        }
    }

    return <CreatePostComponent input_postText={input_postText}
                                setInput_postText={setInput_postText}
                                input_photoUrl={input_photoUrl}
                                setPhoto={setPhoto}
                                createPost={create}
                                toProfile={toProfile}/>
}