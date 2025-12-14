
import axios, {type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '586ea90590374b62ab0f4ac1c15155ed'
    }
})


export interface FetchResponse<T>{
    count: number,
    results: T[],
    next: string | null,
}
class APIClinet<T>{
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }
    getAll = (config: AxiosRequestConfig) =>{
      return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then((res)=> res.data);
    };
    get = (id: number|string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id)
        .then((res)=> res.data)
    };
    post = (data: T)=>{
      return axiosInstance
    .post<T>(this.endpoint, data )
    .then(res => res.data);
    };
    
}
export default APIClinet;