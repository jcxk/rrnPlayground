import {useQuery} from "react-query";
import axios from "axios";
import {UseQueryResult} from "react-query/types/react/types";

export type Post = {
    id: number,
    userId: number,
    title: string,
    body: string
}

export const PostsRestHandler = async(): Promise<Post> => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
}

export const usePosts = ():UseQueryResult  =>{
    return useQuery("posts", PostsRestHandler);
}

export default usePosts;