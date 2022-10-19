import React, {useState, useEffect} from "react";
import styled from "styled-components";


const PageUl = styled.ul`
  width: auto;
  height: auto;
  float: left;
  text-align: center;
  border-radius: 3px;
  display: flex;
  color: white;
  padding: 1px;
  margin-left: 25%;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  border-radius: 5px;
  width: 30px;
  padding: 7px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  /*
  const [posts, setPosts] = useState([])
  const pagesforPage = useEffect(() => {
        axios.get(`${API_URL}/research/book_with_pagenum`).then((response)=>{
            console.log(response.data)
            setPosts(response.data);

        })
    }
  )
  */

  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick= {() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;