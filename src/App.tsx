import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';

const App: React.FC = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Articles:
        return <div>Articles</div>;
      case Page.Authors:
        return <div>Authors</div>;
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
