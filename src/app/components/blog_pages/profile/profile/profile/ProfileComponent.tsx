import profile_scss from '@/app/scss/for_components/blog_pages/profile/profile.module.scss'
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/photo/Photo_profileComponent";
import {Friends_profileComponent} from "@/app/components/blog_pages/profile/profile/friends/Friends_profileComponent";
import {usePathname} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {OneOpenedPostComponent} from "@/app/components/blog_pages/profile/posts/one_post/post_in_modal/OneOpenedPostComponent";
import {CreatePostButtonComponent} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostButtonComponent";
import {CreatePostComponent} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostComponent";
import {EditProfileComponent} from "@/app/components/blog_pages/profile/edit/EditProfileComponent";
import {ProfileComponentInterface} from "@/app/interfaces/profile/profileInterface";
import {Header_profileContainer} from "@/app/components/blog_pages/profile/profile/header/Header_profileContainer";
import {PostsContainer} from "@/app/components/blog_pages/profile/posts/PostsContainer";
import {Photo_profileContainer} from "@/app/components/blog_pages/profile/profile/photo/Photo_profileContainer";

export const ProfileComponent = () => {
    const pathname = usePathname()

    return (
        <main className={profile_scss.route}>
            <section className={profile_scss.center}>
                <Header_profileContainer/>
                <PostsContainer/>
            </section>
            <aside className={profile_scss.aside}>
                <Photo_profileContainer/>
                <Friends_profileComponent/>
                <CreatePostButtonComponent/>
            </aside>
            {pathname === Profile_path.PROFILE_ONE_POST ?
                <OneOpenedPostComponent/>
            : pathname === Profile_path.PROFILE_CREATE_POST ?
                <CreatePostComponent/>
            : pathname === Profile_path.PROFILE_EDIT ?
                <EditProfileComponent/>
            : null}
        </main>
    )
}