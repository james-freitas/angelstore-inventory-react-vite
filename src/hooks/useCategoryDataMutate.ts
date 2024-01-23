import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosPromise } from "axios";
import { CategoryData } from "../interface/CategoryData";

const API_URL = 'http://localhost:8080/api/v1';

const postData = async (data: CategoryData): AxiosPromise<any> => {
  const response = axios.post(API_URL + '/categories', data);
  return response;
}

export function useCategoryDataMutate(){
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['category-data'])
    }
  })

  return mutate;
}

