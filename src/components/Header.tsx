import { usePage, Page } from '../contexts/Page';

export const Header: React.FC = () => {
  const { page, setPage } = usePage();

  const pageButton = (pageName: Page) => {
    return (
      <button
        className={pageName === page ? 'active' : ''}
        onClick={() => setPage(pageName)}
      >
        {pageName}
      </button>
    );
  };

  return (
    <header>
      <h1>
        <div className="title">TypeScript CRUD</div>
        <div className="subtitle">With React and TypeORM</div>
      </h1>
      <div className="navigation">
        <div className="internal">
          {pageButton(Page.Articles)}
          {pageButton(Page.Authors)}
        </div>
        <div className="external">
          <a
            href="https://github.com/jp7internet/typescript-crud"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};
