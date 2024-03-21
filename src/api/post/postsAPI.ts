import {instance, Paths} from "@/api/api_init";
import {
    DeleteCommentInterfaceAPI,
    DeletePostInterfaceAPI,
    EditPostInterfaceAPI, GetCommentsInterfaceAPI,
    GetPostDataInterfaceAPI, LikeCommentInterfaceAPI, LikePostInterfaceAPI,
    NewPostInterfaceAPI, SetCommentInterfaceAPI
} from "@/api/post/postsInterface";
import Cookies from "js-cookie";

export const BlogAPI = {

    async DeleteCommentAPI(props: DeleteCommentInterfaceAPI) {
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
        try {
            const response = await instance.delete(
                Paths.BLOG + `/post/${data.postId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async EditPostAPI(data: EditPostInterfaceAPI) {
        try {
            const response = await instance.put(
                Paths.BLOG + `/post`,
                {
                    postId: data.postId,
                    text: data.input_postText
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCommentsAPI(data: GetCommentsInterfaceAPI) {
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
        try {
            const response = await instance.get(
                Paths.BLOG + `/user/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async LikeCommentAPI(data: LikeCommentInterfaceAPI) {
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