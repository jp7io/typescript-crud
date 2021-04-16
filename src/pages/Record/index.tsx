import { useState } from 'react';
import { Record } from '../../interfaces/RecordEntities';
import { RecordIndexProps } from '../../interfaces/PagesProps';
import { useFetch } from '../../hooks/useFetch';
import { RecordList } from './List';
import { RecordMutations } from './Mutations';

export const RecordIndex = <T extends Record>({
  apiPath,
  apiOptions,
  ListItem,
  FormFields,
  emptyRecord,
}: RecordIndexProps<T>) => {
  const [activeRecord, setActiveRecord] = useState<T>(emptyRecord);
  const { records } = useFetch<T>(apiPath, apiOptions);

  return (
    <div className="page">
      <div className="content">
        <RecordList<T>
          records={records}
          ListItem={ListItem}
          emptyRecord={emptyRecord}
          activeRecord={activeRecord}
          setActiveRecord={setActiveRecord}
        />
        <RecordMutations<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
        />
      </div>
    </div>
  );
};
