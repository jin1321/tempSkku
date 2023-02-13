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
      
      /*
      
      const [selectedFile, setSelectedFile] = useState({});
      
      const onChangeHandler = (event) => {
         
         selectedFile["selectedFile"]= event.target.files;
     }

     

     function onClickHandler ()
     {
      /*
      if (!selectedFile) {
         return;
      }
      const data = new FormData();
      for (const file of selectedFile["selectedFile"] ){
         data.append(`file`, file)
      }
      
      
      const formData = new FormData();
      formData.append("name", selectedFile["selectedFile"].name);
      for(let i =0; i < selectedFile["selectedFile"].length; i++) {
            formData.append("files", selectedFile["selectedFile"].files[i]);
      }
      
      
      fetch("http://localhost:3001/upload", {method: 'POST', body: formData, headers: {
         "Content-Type": "multipart/form-data"
       }})
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

   }
   */
   
    const [journalItems, setJournalItems] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/research/journal")
        .then(res => res.json())
        .then(
         (res)=> setJournalItems(res));
    }, []);
    
   
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

   
   
   
   

