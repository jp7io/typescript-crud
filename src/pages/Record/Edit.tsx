import { Record } from '../../interfaces/RecordEntities';
import { RecordEditProps } from '../../interfaces/PagesProps';
import { RecordForm } from './Form';

export const RecordEdit = <T extends Record>({
  FormFields,
  activeRecord,
}: RecordEditProps<T>) => {
  return (
    <div className="edit">
      <h2>Edit</h2>
      <RecordForm FormFields={FormFields} activeRecord={activeRecord} />
    </div>
  );
};
