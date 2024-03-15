import profile_scss from '@/app/scss/for_components/blog_pages/profile/profile.module.scss'
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/Header_profileComponent";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";

export const ProfileComponent = () => {
    return (
        <main className={profile_scss.root}>
            <Header_profileComponent/>
            <PostsComponent/>
        </main>
    )
}