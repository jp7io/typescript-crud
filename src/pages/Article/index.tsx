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
      apiPath="articles"
      apiOptions={apiOptions}
      ListItem={ArticleListItem}
      FormFields={ArticleFormFields}
      emptyRecord={emptyRecord}
    />
  );
};
