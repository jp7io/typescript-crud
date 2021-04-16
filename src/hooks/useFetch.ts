import axios from 'axios';
import { useState, useEffect } from 'react';
import { Record } from '../interfaces/RecordEntities';

export const useFetch = <T extends Record>(path: string, options?: {}) => {
  const [records, setRecords] = useState<T[]>([]);

  const url = `${process.env.REACT_APP_API}/${path}`;

  useEffect(() => {
    const callFetchFunction = async () => {
      const res = await axios.get<T[]>(url, { params: options });
      setRecords(res.data);
    };
    callFetchFunction();
  }, [url, options]);

  return { records };
};
