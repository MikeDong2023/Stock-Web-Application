import { useState } from 'react';
import Axios from 'axios';
import { StockInfo } from './StockInfo';
import { Input, Button, MyLogo } from '../Stylings/Content';
import { SearchContainer } from '../Stylings/Container';

export const StockSearcher = () => {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);
  const [compInfo, setCompInfo] = useState(null);
  const [error, setError] = useState(null);

  const search = () => {
    Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=8YB8FC2636487RG0`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Please enter valid stock symbol');
      });
      
    ;
    Axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=b97beacd1631c2237fab2f6ba8efb6c6`)
      .then((res) => {
        setCompInfo(res.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Please enter valid stock symbol');
      });
  };

  return ( 
    <>
    
    <SearchContainer>

      <form onSubmit={(e) => {
        e.preventDefault();
        search();
      }}>
        <Input 
          type="text" 
          placeholder="Enter stock symbol..."
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Button 
          type="submit"
        />
      </form>
      <MyLogo src='/Logo2.png' />
    </SearchContainer>
      {data && compInfo ? 
        <StockInfo 
          compInfo={compInfo}
          data={data}
        /> :
        <h2>{error}</h2>
      } 
    
    </>
  );
};
