import { useEffect } from 'react';
import { Record } from '../../interfaces/RecordEntities';
import { RecordMutationsProps } from '../../interfaces/PagesProps';
import { RecordNew } from './New';
import { RecordEdit } from './Edit';
import { useMutation } from '../../hooks/useMutation';
import { Status } from '../../components/Status';
import { RecordError } from '../../components/RecordError';

export const RecordMutations = <T extends Record>({
  FormFields,
  activeRecord,
  apiPath,
  callback,
}: RecordMutationsProps<T>) => {
  const {
    create,
    update,
    remove,
    processing,
    success,
    error,
    setError,
  } = useMutation<T>(apiPath, callback);

  useEffect(() => {
    if (activeRecord.id) {
      setError(undefined);
    }
  }, [activeRecord, setError]);

  return (
    <div className="mutations">
      {error && <RecordError error={error} />}
      {activeRecord.id ? (
        <RecordEdit<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          update={update}
          remove={remove}
          success={success}
        />
      ) : (
        <RecordNew<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          create={create}
          success={success}
        />
      )}
      {processing && <Status text="Processing..." />}
    </div>
  );
};
