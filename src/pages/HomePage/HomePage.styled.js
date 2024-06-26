import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  margin: 25px;

  @media only screen and (min-width: 768px) {
    margin: 45px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 85px;
  }
`;

export const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCard = styled.li`
  width: 240px;
  height: 320px;
  margin-bottom: 18px;

  border: solid black 1px;
  border-radius: 3px;
`;

export const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #d0c5c5;
    text-decoration: none;
    font-size: 18px;
    padding: 15px;

    width: 240px;
    height: 320px;
    margin-bottom: 18px;

    border: solid black 1px;
    border-radius: 3px;

    &.active {
      color: white;
    }
  }
`;
