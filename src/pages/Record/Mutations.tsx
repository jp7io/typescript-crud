import { Record } from '../../interfaces/RecordEntities';
import { RecordMutationsProps } from '../../interfaces/PagesProps';
import { RecordNew } from './New';

export const RecordMutations = <T extends Record>({
  FormFields,
  activeRecord,
}: RecordMutationsProps<T>) => {
  return (
    <div className="mutations">
      <RecordNew<T> FormFields={FormFields} activeRecord={activeRecord} />
    </div>
  );
};
