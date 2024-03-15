import profile_scss from '@/app/scss/for_components/blog_pages/profile/profile.module.scss'
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/Header_profileComponent";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/Photo_profileComponent";
import {Friends_profileComponent} from "@/app/components/blog_pages/profile/profile/Friends_profileComponent";

export const ProfileComponent = () => {
    return (
        <main className={profile_scss.route}>
            <section className={profile_scss.center}>
                <Header_profileComponent/>
                <PostsComponent/>
            </section>
            <aside className={profile_scss.aside}>
                <Photo_profileComponent/>
                <Friends_profileComponent/>
            </aside>
        </main>
    )
}