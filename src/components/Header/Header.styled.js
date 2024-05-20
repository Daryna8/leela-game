import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  background: linear-gradient(
    120deg,
    #4c558c 31%,
    #427f8f 61.46%,
    #11809f 90.54%
  );
`;

export const StyledHomeNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #d0c5c5;

    font-size: 18px;
    padding-left: 20px;
  }
`;
