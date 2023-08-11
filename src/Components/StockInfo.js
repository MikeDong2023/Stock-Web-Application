import { InfoContainer, TextContainer, ChartContainer } from '../Stylings/Container';
import { CompanyLogo, Link } from '../Stylings/Content'
import { LineChart } from './Stockgraph'

export const StockInfo = (props) => {
  const dateTime = props.data?.["Meta Data"]?.["3. Last Refreshed"];
  const stockData = props.data?.["Time Series (1min)"]?.[dateTime];
  const companyInfo = props.compInfo;
  
  if (!stockData && !companyInfo) {
   return ;
  }
  
  const open = stockData["1. open"] || 'N/A';
  const high = stockData["2. high"] || 'N/A';
  const low = stockData["3. low"] || 'N/A';
  const close = stockData["4. close"] || 'N/A';
  const volume = stockData["5. volume"] || 'N/A';
  const name = companyInfo["companyName"] || 'N/A';
  const companyLogo = companyInfo["image"] || 'N/A'
  const website = companyInfo["website"] || 'N/A';

  
  return (
    <InfoContainer>
      <ChartContainer>
        <LineChart gdata={props.data} />
        
      </ChartContainer>
      <TextContainer>
        <h2>{name}</h2>
        <Link href={website} target="_blank">Company Homepage</Link>
        <p>Open - ${open}</p>
        <p>High - ${high}</p>
        <p>Low - ${low}</p>
        <p>Close - ${close}</p>
        <p>Volume - {volume}</p>
        <CompanyLogo src={companyLogo}/>
        <p>Refreshed at - {dateTime}</p>
      </TextContainer>  
    </InfoContainer>
  );
};
