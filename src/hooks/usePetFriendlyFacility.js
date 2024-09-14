import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;
const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

const getPetFriendlyFacility = ({page}) => {
    const pages = page ? page : 1


    return api.get(`15111389/v1/uddi:${API_KEY}?serviceKey=${SERVICE_KEY}`,{
            params: {
                page: pages,
                perPage: 2000
            }   
        }
    );
}

export const usePetFriendlyFacility = ({page}) => {
    return useQuery({
        queryKey: ['pet-friendly',page],
        queryFn: () => getPetFriendlyFacility({page}),
        select: (result) => result.data,
        staleTime: 300000, // 5분
    });
};