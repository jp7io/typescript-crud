import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';
import { ArticleIndex } from './pages/Article';
import { AuthorIndex } from './pages/Author';

const App: React.FC = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Articles:
        return <ArticleIndex />;
      case Page.Authors:
        return <AuthorIndex />;
      default:
        return '';
    }
  };

  return (
    <div className="App">
      <Header />
      {renderSwitch()}
    </div>
  );
};

export default App;
