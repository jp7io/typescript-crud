export interface RecordIndexProps<T> {
  apiPath: string;
  apiOptions: {};
  ListItem: React.FC<ListItemProps<T>>;
}

export interface RecordListProps<T> {
  records: T[];
  ListItem: React.FC<ListItemProps<T>>;
}

export interface ListItemProps<T> {
  record: T;
}
