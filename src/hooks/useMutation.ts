import axios from 'axios';
import { Record } from '../interfaces/RecordEntities';

export type Action = (record?: any) => Promise<void>;

export const useMutation = <T extends Record>(
  path: string,
  callback?: Function
) => {
  const url = `${process.env.REACT_APP_API}/${path}`;

  const wrap = (fn: Function) => {
    return async (record?: T) => {
      fn(record).then(() => {
        if (callback) {
          callback();
        }
      });
    };
  };

  const create: Action = wrap(async (record: T) => {
    await axios.post(url, record);
  });

  const update: Action = wrap(async (record: T) => {
    await axios.put(`${url}/${record.id}`, record);
  });

  const remove: Action = wrap(async (record: T) => {
    await axios.delete(`${url}/${record.id}`);
  });

  return {
    create,
    update,
    remove,
  };
};
