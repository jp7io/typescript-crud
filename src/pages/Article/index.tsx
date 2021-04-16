import { Article } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { ArticleListItem } from './ListItem';
import { ArticleFormFields } from './FormFields';

export const ArticleIndex: React.FC = () => {
  const apiOptions = { relations: ['author'] };

  const emptyRecord = {
    title: '',
    text: '',
  };

  return (
    <RecordIndex<Article>
      ListItem={ArticleListItem}
      apiPath="articles"
      apiOptions={apiOptions}
      FormFields={ArticleFormFields}
      emptyRecord={emptyRecord}
    />
  );
};
