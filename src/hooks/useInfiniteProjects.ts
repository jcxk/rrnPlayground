import {useQuery, useInfiniteQuery} from "react-query";
import axios from "axios";
import {UseQueryResult} from "react-query/types/react/types";



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


