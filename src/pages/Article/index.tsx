import { Article } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { ArticleListItem } from './ListItem';

export const ArticleIndex: React.FC = () => {
  const apiOptions = { relations: ['author'] };

  return (
    <RecordIndex<Article>
      apiPath="articles"
      apiOptions={apiOptions}
      ListItem={ArticleListItem}
    />
  );
};
