import { Record } from '../../interfaces/RecordEntities';
import { RecordIndexProps } from '../../interfaces/PagesProps';
import { useFetch } from '../../hooks/useFetch';
import { RecordList } from './List';

export const RecordIndex = <T extends Record>({
  apiPath,
  apiOptions,
  ListItem,
}: RecordIndexProps<T>) => {
  const { records } = useFetch<T>(apiPath, apiOptions);

  return (
    <div className="page">
      <div className="content">
        <RecordList<T> records={records} ListItem={ListItem} />
      </div>
    </div>
  );
};
