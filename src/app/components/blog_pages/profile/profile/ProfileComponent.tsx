import profile_scss from '@/app/scss/for_components/blog_pages/profile/profile.module.scss'
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/Header_profileComponent";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/Photo_profileComponent";
import {Friends_profileComponent} from "@/app/components/blog_pages/profile/profile/Friends_profileComponent";
import {usePathname} from "next/navigation";
import {Profile_path} from "@/app/paths/profile";
import {OneOpenedPostComponent} from "@/app/components/blog_pages/profile/posts/one_post/OneOpenedPostComponent";
import {CreatePostButtonComponent} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostButtonComponent";
import {CreatePostComponent} from "@/app/components/blog_pages/profile/posts/create_post/CreatePostComponent";

export const ProfileComponent = () => {
    const pathname = usePathname()

    return (
        <main className={profile_scss.route}>
            <section className={profile_scss.center}>
                <Header_profileComponent/>
                <PostsComponent/>
            </section>
            <aside className={profile_scss.aside}>
                <Photo_profileComponent/>
                <Friends_profileComponent/>
                <CreatePostButtonComponent/>
            </aside>
            {pathname === Profile_path.PROFILE_ONE_POST ?
                <OneOpenedPostComponent/>
            : pathname === Profile_path.PROFILE_CREATE_POST ?
                <CreatePostComponent/>
            : null}
        </main>
    )
}