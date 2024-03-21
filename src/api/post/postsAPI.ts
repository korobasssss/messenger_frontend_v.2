import {instance, Paths, setToken} from "@/api/api_init";
import {
    DeleteCommentInterfaceAPI,
    DeletePostInterfaceAPI,
    EditPostInterfaceAPI, GetCommentsInterfaceAPI,
    GetPostDataInterfaceAPI, LikeCommentInterfaceAPI, LikePostInterfaceAPI,
    NewPostInterfaceAPI, SetCommentInterfaceAPI
} from "@/api/post/postsInterface";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const BlogAPI = {

    async DeleteCommentAPI(props: DeleteCommentInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.delete(
                Paths.BLOG + `/comment/${props.commentId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeletePostAPI(data: DeletePostInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.delete(
                Paths.BLOG + `/post/${data.postId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCommentsAPI(data: GetCommentsInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.BLOG + `/comment/${data.postId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetPostDataAPI(data: GetPostDataInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.BLOG + `/post/${data.postId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetPostsAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.BLOG + `/user/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async LikeCommentAPI(data: LikeCommentInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.put(
                Paths.BLOG + '/comment/like',
                {
                    commentId: data.commentId
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async LikePostAPI(data: LikePostInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.put(
                Paths.BLOG + '/post/like',
                {
                    postId: data.postId
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async NewPostAPI(data: NewPostInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.post(
                Paths.BLOG + '/post/create',
                {
                    text: data.input_postText
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async SetCommentAPI(data: SetCommentInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.post(
                Paths.BLOG + '/comment/create',
                {
                    postId: data.postId,
                    text: data.input_comment
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}