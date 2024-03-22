import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {useEffect, useState} from "react";
import {PostsInterface} from "@/app/interfaces/posts/postsInterfaceComponent";

export const Posts = (props: PostsInterface) => {
    const [isAction, setIsAction] = useState(false)

    useEffect(() => {
        props.getPosts()
    }, []);

    useEffect(() => {
        if (isAction) {
            props.getPosts()
        }
        setIsAction(false)
    }, [isAction]);

    return <PostsComponent posts={props.posts}
                           setAction={setIsAction}/>
}