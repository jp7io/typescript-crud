import { Article } from '../../interfaces/RecordEntities';
import { ListItemProps } from '../../interfaces/PagesProps';

type IProps = ListItemProps<Article>;

export const ArticleListItem: React.FC<IProps> = ({ record }) => {
  return (
    <div>
      <div className="title">{record.title}</div>
      <div className="author">By {record.author?.name || 'Unknown'}</div>
    </div>
  );
};
