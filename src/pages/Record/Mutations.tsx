import { Record } from '../../interfaces/RecordEntities';
import { RecordMutationsProps } from '../../interfaces/PagesProps';
import { RecordNew } from './New';
import { RecordEdit } from './Edit';
import { useMutation } from '../../hooks/useMutation';

export const RecordMutations = <T extends Record>({
  FormFields,
  activeRecord,
  apiPath,
}: RecordMutationsProps<T>) => {
  const { create, update, remove } = useMutation<T>(apiPath);

  return (
    <div className="mutations">
      {activeRecord.id ? (
        <RecordEdit<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          update={update}
          remove={remove}
        />
      ) : (
        <RecordNew<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          create={create}
        />
      )}
    </div>
  );
};
