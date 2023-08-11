import styled from "styled-components";
export const Input = styled.input`
  width: 700px;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  font-family: Arial, sans-serif;
  padding-left: 60px;
  border: 1px solid #ccc;
  border-radius: 50px;
`
export const Button = styled.button`
  position: absolute;
  background-image: url('/search.png');
  background-size: cover;
  left: 475px;
  top: 124px;
  padding: 15px;
  border: none;
  
  cursor: pointer;
`
export const CompanyLogo = styled.img`
  margin-top: 15px;
  filter: brightness(0);
  width: 50px;
  height: cover;
`
export const MyLogo = styled.img`
  position: absolute;
  left: 1300px;
  top: 67px;
  width: 200px;
  
`
export const Link = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: black;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-decoration: none;
`