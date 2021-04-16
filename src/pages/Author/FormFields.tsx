import { Author } from '../../interfaces/RecordEntities';
import { FormFieldsProps } from '../../interfaces/PagesProps';

type IProps = FormFieldsProps<Author>;

export const AuthorFormFields: React.FC<IProps> = ({
  formState,
  handleChange,
}) => {
  return (
    <div>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
