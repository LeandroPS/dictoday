import Panel from './components/Panel';
import Entry from './components/Entry';
import logo from './assets/logo.svg';
import { getWordOftheDay } from './services/dictionary';
import ContentWrapper from './components/ContentWrapper';

function App() {
  const entry = getWordOftheDay();

  return (
    <Panel title="Dictoday" logo={logo} backgroundColor="#43A047">
      <ContentWrapper>  
        <Entry {...entry} />
      </ContentWrapper>
    </Panel>
  )
}

export default App
