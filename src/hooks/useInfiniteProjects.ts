import {useQuery, useInfiniteQuery} from "react-query";
import axios from "axios";
import {UseQueryResult} from "react-query/types/react/types";
import {PostsRestHandler} from "@hooks/usePosts";
import _ from "lodash";


export type Team = {
    id: number,
    abbreviation: string,
    city: string,
    fullName: string
    name: string
}

export type Player = {
    id: number,
    firstName: string,
    lastName: string,
    position: string
    team: Team
}

export type Project = {
    id: number
    name: string
}

export type Page = {
    page: Project[]
    pageParam: number
}

export type InfiniteQueryResponse = {
    pages: Page[]
    pageParams: number[]
    projects: Project[]
}
//
const getPaginatedProjects = async ({ pageParam = 0 }): Promise<Page> => {

    const res = await axios.get('https://it39i.sse.codesandbox.io/api/projects?cursor=' + parseInt(pageParam));
    //return { page, pageParam }
    return res.data;
}

const getPaginatedPlayers = async ({ pageParam = 0 }): Promise<Page> => {

    const res = await axios.get('https://www.balldontlie.io/api/v1/players?page=' + parseInt(pageParam));
    //return { page, pageParam }
    return res.data;
}


const useInfiniteProjectsQueryOptions = {
    //enabled:false,
    select: (data) => {
        return {
            pages: data.pages,
            pageParams: data.pageParams,
            projects: _.flatten(_.map(data.pages, 'data')),
        }
    },

    keepPreviousData : true,
    getPreviousPageParam: firstPage => firstPage.previousId ?? false,
    getNextPageParam: lastPage => lastPage.nextId ?? false,
    onError: (error: Error) => console.log(error),
    staleTime: 1000 * 60 * 60,
}

export const useInfiniteProjects = () => {
    return useInfiniteQuery('projects',getPaginatedProjects, useInfiniteProjectsQueryOptions);
}

export default useInfiniteProjects;