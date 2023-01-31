/*import './styles.css';
import moment from 'moment';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState, useEffect, useContext} from 'react';
import API_URL from '../../api/serverURL';
import Pagination from './Pagination.js';
import { Hero } from "../../components";
import background from "../../assets/images/mainbackground.png";
import { SocketContext } from "../../api/logics";


function JournalBoard(){
   const { journal, book, journalState, bookState, journalPage,
      bookPage, journalContent, bookContent, JCState, BCState,
      getJournalBoard, getBookBoard, getJournalBoardPage, getBookBoardPage,
      getJournalContent, getBookContent } = useContext(SocketContext);
   const heroHeight = Math.min(window.innerWidth / 2, 220);
   const [postsPerPage, setPostsPerPage] = useState(10);
   
   useEffect(()=> {
   getJournalBoard();
   }, [])



   return (
   <div className="container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>

      <Hero background={background} height={`${heroHeight}px`} />
      <div className='Table'>
            <div className="lf-menu-nav" ><span>Journal</span></div>
               <div className="lf-contents"></div>
               
               <div style={{ padding: "20px 240px" }}></div>
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
                           {journal.values().map((post) =>
                           <tr key={post.id}>
                              <td>{post.id}</td>
                              <td className="text-left" >{post.title}</td>
                              <td>{post.filename}</td>
                              <td>{post.file}</td>
                              <td>{moment(post.upload_date).format('YYYY-MM-DD')}</td>
                              <td>{post.download_num}</td>
                           
                           </tr>
                           )}
                        </tbody>
                  </table>
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={journal.length}></Pagination>
   </div>

   )
};

export default JournalBoard;*/
import React,{useContext, useEffect, useState, Component} from 'react'
import { SocketContext } from "../../api/logics";
import API_URL from '../../api/serverURL';
import { JOURNAL_DATA } from './tempData';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from 'moment';
import axios from 'axios';





const {BoardContainer, Title} = require('./styles');



function Journal() {
    const { journal, book, journalState, bookState, journalPage,
        bookPage, journalContent, bookContent, JCState, BCState,
        getJournalBoard, getBookBoard, getJournalBoardPage, getBookBoardPage,
        getJournalContent, getBookContent } = useContext(SocketContext);
      
      

      const [selectedFile, setSelectedFile] = useState({ selectedFile: null});
      function onChangeHandler (event){
         selectedFile["selectedFile"] = event.target.files
     }

     function onClickHandler (){
      const data = new FormData()
      for(var x = 0; x<selectedFile["selectedFile"].length; x++) {
          data.append('file', selectedFile["selectedFile"][x])
      }
         const config = {
            header: {
               'content-type': 'multipart/form-data'
            },
      };
      axios.post("http://localhost:3001/upload", data, config)
            // receive two    parameter endpoint url ,form dat)
   
   .then(res => { // then print response status
       console.log(res.statusText)
    })
   
   }
      

      
      

    const [journalItems, setJournalItems] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/research/journal")
        .then(res => res.json())
        .then(
         (res)=> setJournalItems(res));
    }, []);

    console.log(journalItems);
    /*
    const downloadFileData = () => {
      fetch('http://localhost:3001/research/journal_id')
         .then(response => {
            response.blob().then(blob => {
               let url = window.URL.createObjectURL(blob);
               let a = document.createElement('a');
               a.href = url;
               a.download = 'file.json';
               a.click();
            });
            //window.location.href = response.url;
      });
   }
    */

    return(
      <div className="journalList">
        <BoardContainer>
            <TableContainer>
            
            <Title><h1>Journal</h1></Title>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

            
           

            <TableHead>
            <TableRow>
                     <TableCell align="center">번호</TableCell>
                     <TableCell align="center">제목</TableCell>
                     <TableCell align="center">파일명</TableCell>
                     <TableCell align="center">첨부파일</TableCell>
                     <TableCell align="center">작성일시</TableCell>
                     <TableCell align="center">다운로드수</TableCell>
                     
                     </TableRow>
               </TableHead>
               
               <input type="file" class="form-control" multiple onChange={onChangeHandler}/>
            <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
               <TableBody>
                {journalItems.map(item =>
                       
                        <TableRow
                          key={item.id}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row" align="center">
                          {item.id}
                          </TableCell>
                          <TableCell align="center">{item.title}</TableCell>
                          <TableCell align="center">{item.filename}</TableCell>
                          <TableCell align="center">{item.file}</TableCell>
                          <TableCell align="center">{moment(item.uploaded_date).format('YYYY-MM-DD')}</TableCell>
                          <TableCell align="center">{item.downloaded_num}</TableCell>
                          
                        </TableRow>
                      )}
            
            
            
            
               </TableBody>
            </Table>
            
            </TableContainer>
        </BoardContainer>
        </div>
    );
}
        
export default Journal;

   
   
   
   

