import './styles.css';
import moment from 'moment';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';
import API_URL from '../../api/serverURL';
import Pagination from './Pagination.js';
import { Hero, Main } from "../../components";
import background from "../../assets/images/mainbackground.png";

function Book() {
    const [ book, setBook ] = useState([]);
    const [ bookPage, setBookPage ] = useState(1);
    const [ bookState, setBookState ] = useState(0);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const getBookBoard = () => {
           
            axios.get(`${API_URL}/research/book`)
            .then((response) => {
                if (response.data) {

                    if (response.data) {
                        setBook(response.data);
                    } else setBook({ errMsg: "Error in /book." })

                
                }
            })
        }
        getBookBoard();
    }, []);
   

   /* 새로 추가한 부분 */
   const indexOfLast = bookPage * postsPerPage;
   const indexOfFirst = indexOfLast - postsPerPage;
   const currentPosts = book.slice(indexOfFirst, indexOfLast);
   const paginate = (pageNumber) => setBookPage(pageNumber);
   const heroHeight = Math.min(window.innerWidth / 2, 220);
   
 
      
   return (
   
      <div className="container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
            
          <Hero background={background} height={`${heroHeight}px`} />
          <div className='Table'>
            <div className="lf-menu-nav" ><span>Book</span></div>
                
            <div className="lf-contents">

            <div style={{ padding: "20px 240px" }}>
                <table className="board_list text-center">
                    <colgroup>
                        <col width="5%" />
                        <col width="*" />
                        <col width="30%" />
                        <col width="10%" />
                        <col width="*" />
                        <col width="*" />
                    </colgroup>
                    <thead>
                        <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>파일명</th>
                        <th>첨부파일</th>
                        <th>작성일시</th>
                        <th>다운로드수</th>
                        
                        </tr>
                    </thead>
                    <tbody className='postsList'>
                        {currentPosts.map((post) => (
                            
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td className="text-left">{post.title}</td>
                            <td>{post.filename}</td>
                            <td>{post.file}</td>
                            <td>{moment(post.upload_date).format('YYYY-MM-DD')}</td>
                            <td>{post.download_num}</td>
                            
                        </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={book.length} currentPage={bookPage} paginate={paginate}></Pagination>
                
          </div>
      </div>
   );
   
      
      
}   

export default Book;