import {instance, Paths} from "@/api/api_init";
import {
    DeleteCommentInterfaceAPI,
    DeletePostInterfaceAPI,
    EditPostInterfaceAPI, GetCommentsInterfaceAPI,
    GetPostDataInterfaceAPI, LikeCommentInterfaceAPI, LikePostInterfaceAPI,
    NewPostInterfaceAPI, SetCommentInterfaceAPI
} from "@/api/post/postsInterface";

export const Blog = {

    async DeleteCommentAxios(props: DeleteCommentInterfaceAPI) {
        try {
            const response = await instance.delete(
                Paths.BLOG + `/comment/${props.commentId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeletePostAxios(data: DeletePostInterfaceAPI) {
        try {
            const response = await instance.delete(
                Paths.BLOG + `/post/${data.postId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async EditPostAxios(data: EditPostInterfaceAPI) {
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

    async GetCommentsAxios(data: GetCommentsInterfaceAPI) {
        try {
            const response = await instance.get(
                Paths.BLOG + `/comment/${data.postId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetPostDataAxios(data: GetPostDataInterfaceAPI) {
        try {
            const response = await instance.get(
                Paths.BLOG + `/post/${data.postId}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetPostsAxios() {
        try {
            const response = await instance.get(
                Paths.BLOG + `/user/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async LikeCommentAxios(data: LikeCommentInterfaceAPI) {
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

    async LikePostAxios(data: LikePostInterfaceAPI) {
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

    async NewPostAxios(data: NewPostInterfaceAPI) {
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

    async SetCommentAxios(data: SetCommentInterfaceAPI) {
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