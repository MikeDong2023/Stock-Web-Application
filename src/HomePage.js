import { StockSearcher } from './Components/StockSearcher';
import { StockInfo } from './Components/StockInfo';
import { AppContainer } from './Stylings/Container'

export const HomePage = () => {

  return (
    <AppContainer>
        <StockSearcher />
        <StockInfo />
    </AppContainer>
  );
};

