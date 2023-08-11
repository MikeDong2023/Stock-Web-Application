import styled from "styled-components";
export const AppContainer = styled.div`
  width:100vw;
  height:100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  //justify-content: space-evenly;
  background-image: url('/bg3.png');
  background-size: cover;
  
`
export const SearchContainer = styled.div`
  margin: 100px 100px 10px 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;

`

export const InfoContainer = styled.div`
  display: flex;
  margin: 50px 100px 100px 100px;
`

export const TextContainer = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: whitesmoke;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
`

export const ChartContainer = styled.div`
  flex: 3;
  align-items: center; 
  border-radius: 10px;
  border: 1px solid #333;
  background-color: whitesmoke;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
`