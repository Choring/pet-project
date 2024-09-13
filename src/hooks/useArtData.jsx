import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchArtMuseumData = async () => {
  const response = await axios.get(
    'https://api.odcloud.kr/api/15111389/v1/uddi:41944402-8249-4e45-9e9d-a52d0a7db1cc?page=1&perPage=1000&serviceKey=THpNfEHZalAY9LpJXxDNwMqkAoe7EvDOE1NC%2FjvuHGiH%2FV6ebzylZajzxEVDRwZHtq%2FnmrTF2Ng6yuWm2N1W%2FA%3D%3D'
  );
  return response.data;
};

export const useArtQuery = () => {
  return useQuery({
    queryKey: ['art-museum'],
    queryFn: fetchArtMuseumData,
    select: (result) => result.data,
  });
};
