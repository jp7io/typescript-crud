import { useEffect } from 'react';
import { Record } from '../../interfaces/RecordEntities';
import { RecordFormProps } from '../../interfaces/PagesProps';
import { useForm } from '../../hooks/useForm';

export const RecordForm = <T extends Record>({
  FormFields,
  activeRecord,
}: RecordFormProps<T>) => {
  const { formState, setFormState, handleChange } = useForm<T>(activeRecord);

  useEffect(() => {
    if (activeRecord) {
      setFormState(activeRecord);
    }
  }, [setFormState, activeRecord]);

  return (
    <div>
      <form>
        <FormFields formState={formState} handleChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};
