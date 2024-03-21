import profile_scss from '@/app/scss/for_components/blog_pages/profile/profile.module.scss'
import {usePathname} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {CreatePostButtonComponent} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostButtonComponent";
import {Header_profileContainer} from "@/app/components/blog_pages/profile/profile/header/Header_profileContainer";
import {PostsContainer} from "@/app/components/blog_pages/profile/posts/PostsContainer";
import {
    OneOpenedPostContainer
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_modal/OneOpenedPostContainer";
import {EditProfileContainer} from "@/app/components/blog_pages/profile/edit/EditProfileContainer";
import Cookies from "js-cookie";
import {Friends_profileContainer} from "@/app/components/blog_pages/profile/profile/friends/Friends_profileContainer";
import {CreatePostContainer} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostContainer";
import {PhotoContainer} from "@/app/components/blog_pages/profile/photo/PhotoContainer";

export const ProfileComponent = () => {
    const pathname = usePathname().split('/')
    const lastPath = '/' + pathname[pathname.length - 1]
    return (
        <main className={profile_scss.route}>
            <section className={profile_scss.center}>
                <Header_profileContainer/>
                <PostsContainer/>
            </section>
            <aside className={profile_scss.aside}>
                <PhotoContainer/>
                <Friends_profileContainer/>
                {Cookies.get('id_current') === Cookies.get('id') ?
                <CreatePostButtonComponent/>
                    : null}
            </aside>
            {lastPath === '/' + Cookies.get('id_post') ?
                <OneOpenedPostContainer/>
            : lastPath === Profile_path.PROFILE_CREATE_POST ?
                <CreatePostContainer/>
            : lastPath === Profile_path.PROFILE_EDIT?
                <EditProfileContainer/>
            : null}
        </main>
    )
}