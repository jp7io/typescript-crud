import { AxiosError } from 'axios';
import { Action } from '../hooks/useMutation';
import { IChangeElement } from '../hooks/useForm';

export interface RecordIndexProps<T> {
  apiPath: string;
  apiOptions: {};
  ListItem: React.FC<ListItemProps<T>>;
  FormFields: React.FC<FormFieldsProps<T>>;
  emptyRecord: T;
}

export interface RecordListProps<T> {
  ListItem: React.FC<ListItemProps<T>>;
  records: T[];
  emptyRecord: T;
  activeRecord: T;
  setActiveRecord: Function;
  loading: boolean;
  error?: AxiosError;
}

export interface ListItemProps<T> {
  record: T;
}

export interface RecordMutationsProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
  apiPath: string;
  callback: Function;
}

export interface RecordNewProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
  create: Action<T>;
  success?: boolean;
}

export interface RecordEditProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
  update: Action<T>;
  remove: Action<T>;
  success?: boolean;
}

export interface RecordFormProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
  submitAction: Action<T>;
  success?: boolean;
}

export interface FormFieldsProps<T> {
  formState: T;
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void;
}
