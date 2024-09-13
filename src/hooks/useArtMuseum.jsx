import api from '../utils/api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getArtMuseum = async () => {
  const response = await axios.get(
    'https://api.odcloud.kr/api/15111389/v1/uddi:41944402-8249-4e45-9e9d-a52d0a7db1cc?page=1&perPage=1000&serviceKey=THpNfEHZalAY9LpJXxDNwMqkAoe7EvDOE1NC%2FjvuHGiH%2FV6ebzylZajzxEVDRwZHtq%2FnmrTF2Ng6yuWm2N1W%2FA%3D%3D'
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
