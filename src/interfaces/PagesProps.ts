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
  records: T[];
  ListItem: React.FC<ListItemProps<T>>;
  emptyRecord: T;
  activeRecord: T;
  setActiveRecord: Function;
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
  create: Action;
}

export interface RecordEditProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
  update: Action;
  remove: Action;
}

export interface RecordFormProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
  submitAction: Action;
}

export interface FormFieldsProps<T> {
  formState: T;
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void;
}
