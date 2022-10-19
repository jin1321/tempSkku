import styled from "styled-components";

export const BoardContainer = styled.div`
width: 95%;
height: 80%;
min-width:500px;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
border-radius: 20px;
margin-left: 40px;
`;

export const TableContainer = styled.div`
  width: 800px;
  height: 300px;
  background: beige;
  
  bottom: -10px;
  border-radius: 30px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: auto; /* 페이지 중앙에 나타나도록 설정 */
  display: flex;
  flex-direction: row;
`
export const Title = styled.div`
    color: black;
    padding-left: 50px;
    margin-top: 0;
    user-select: none;
    @media only screen and (max-width: 1200px) {
        font-size: var(--font-size-7);
    }
`
export const Table = styled.div`
    flex:12;
    min-width:800px;
    height: 50px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 15px;
    justify-content:center;
    margin-top: 150px;
    margin-bottom: 200px;
    padding: auto;
`;

export const Column = styled.div`

`
