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
  const { records, setVersion, loading, error } = useFetch<T>(
    apiPath,
    apiOptions
  );

  const callback = () => {
    setVersion(+new Date());
    setActiveRecord(emptyRecord);
  };

  return (
    <div className="page">
      <div className="content">
        <RecordList<T>
          ListItem={ListItem}
          records={records}
          emptyRecord={emptyRecord}
          activeRecord={activeRecord}
          setActiveRecord={setActiveRecord}
          loading={loading}
          error={error}
        />
        <RecordMutations<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          apiPath={apiPath}
          callback={callback}
        />
      </div>
    </div>
  );
};
