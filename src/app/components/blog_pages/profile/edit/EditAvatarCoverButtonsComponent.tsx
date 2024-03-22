import edit_profile_scss from '@/app/scss/for_components/blog_pages/edit_profile/edit_profile.module.scss'
import create_post_scss from "@/app/scss/for_components/blog_pages/post/create_post.module.scss";
import {EditPhotoButtons} from "@/app/interfaces/profile/edit_profileInterface";

export const EditAvatarCoverButtonsComponent = (props: EditPhotoButtons) => {

    return (
        <section className={edit_profile_scss.edit_profile_section}>
            <button className={'button_3rd_plane ' + edit_profile_scss.button_download}>
                <input className={create_post_scss.hidden} type="file" id="setFiles-btn"
                       onChange={(event) => props.setInput_photo(event)}/>
                <label htmlFor="setFiles-btn">
                    Загрузить фото
                </label>
            </button>
            <button className={'button_3rd_plane'}
                    onClick={() => props.setPhotoDelete(true)}>
                Удалить
            </button>
        </section>
    )
}