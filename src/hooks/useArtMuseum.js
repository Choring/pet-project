import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// API 변수 처리
const API_KEY = process.env.REACT_APP_API_KEY;
const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

const getArtMuseum = async () => {
  const response = await axios.get(
    `https://api.odcloud.kr/api/15111389/v1/uddi:${API_KEY}?page=1&perPage=2000&serviceKey=${SERVICE_KEY}`
  );
  return response.data;
};

export const useArtMuseum = () => {
  return useQuery({
    queryKey: ['art-museum'],
    queryFn: getArtMuseum,
    select: (result) => result.data,
    staleTime: 300000,
  });
};

// const API_KEY = process.env.REACT_APP_API_KEY;
// const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

// const getArtMuseum = ({ page }) => {
//   const pages = page ? page : 1;

//   return api.get(`15111389/v1/uddi:${API_KEY}?serviceKey=${SERVICE_KEY}`, {
//     params: {
//       page: pages,
//       perPage: 10,
//     },
//   });
// };

// export const useArtMuseum = ({ page }) => {
//   return useQuery({
//     queryKey: ['art-museum', page],
//     queryFn: () => getArtMuseum({ page }),
//     select: (result) => result.data,
//     staleTime: 300000, // 5분
//   });
// };
