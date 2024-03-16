import one_comment_scss from "@/app/scss/for_components/blog_pages/post/one_comment.module.scss";

export const EditComponent = () => {
    return (
        <button className={'button_3rd_plane ' + one_comment_scss.edit_button}>
            Удалить
        </button>
    )
}