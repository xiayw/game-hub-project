import type { AxiosRequestConfig } from 'axios';
import { useState } from 'react';



interface FetchResponse<T>{
    count: number,
    results: T[],
    next: number
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] =useState('');
  const [isLoading, setLoading] = useState(false);
  /*
  useEffect(() =>{
    const controller = new AbortController();
    setLoading(true);
    apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ... requestConfig})
    .then(({data}) => {
      setData(data.results);
      setLoading(false);
    } )
    .catch((err)=> {
      if (err instanceof CanceledError) return;
      setLoading(false);
      setError(err.message);

    });
    return () => controller.abort();
  }, deps? deps: []);*/

  return { data, error, isLoading};
}

export default useData