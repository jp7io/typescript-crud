import { Record } from '../../interfaces/RecordEntities';
import { RecordMutationsProps } from '../../interfaces/PagesProps';
import { RecordNew } from './New';
import { RecordEdit } from './Edit';

export const RecordMutations = <T extends Record>({
  FormFields,
  activeRecord,
}: RecordMutationsProps<T>) => {
  return (
    <div className="mutations">
      {activeRecord.id ? (
        <RecordEdit<T> FormFields={FormFields} activeRecord={activeRecord} />
      ) : (
        <RecordNew<T> FormFields={FormFields} activeRecord={activeRecord} />
      )}
    </div>
  );
};
