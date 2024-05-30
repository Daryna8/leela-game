import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #33333380;
  backdrop-filter: blur(10px);
  color: white;
  height: 48px;
  margin: 38px 8px;
`;

export const StyledHeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  list-style: none;

  a {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: white;
    text-decoration: none;
    padding: 10px 5px;
    cursor: pointer;
  }

  :hover {
    background-color: #fdfdfd;
    transition: all 0.3s;
    color: black;
    border-radius: 15px;
  }
`;
