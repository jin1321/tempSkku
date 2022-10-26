import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import API_URL from "./serverURL";

const SocketContext = createContext();

const ContextProvider = ({ children }) => {

    const [ journal, setJournal ] = useState({});
    const [ book, setBook ] = useState({});
    const [ journalState, setJournalState ] = useState(0);
    const [ bookState, setBookState ] = useState(0);
    const [ journalPage, setJournalPage ] = useState(0);
    const [ bookPage, setBookPage ] = useState(0);
    const [ journalContent, setJournalContent ] = useState();
    const [ bookContent, setBookContent ] = useState();
    const [ JCState, setJCState ] = useState(0);
    const [ BCState, setBCState ] = useState(0);

    useEffect(() => {
        axios.post(`${API_URL}/downloadBook`, {id: 1}, (response) => {
            console.log(response.data)
        })
    }, [])

    const getJournalBoard = () => {
        setJournalState(0);
        axios.get(`${API_URL}/journal`)
        .then((response) => {
            if (response.data) {
                
                if (response.data.pageNum) {
                    setJournalPage(response.data.pageNum);
                } else setJournalPage(-1);
                
                if (response.data.boardData) {
                    setJournal(response.data.boardData);
                } else setJournal({ errMsg: "Error in /journal." })
                
                setJournalState(1);
            }
        })
    }

    const getBookBoard = () => {
        setBookState(0);
        axios.get(`${API_URL}/book`)
        .then((response) => {
            if (response.data) {

                if (response.data.pageNum) {
                    setBookPage(response.data.pageNum);
                } else setBookPage(-1);

                if (response.data.boardData) {
                    setBook(response.data.boardData);
                } else setBook({ errMsg: "Error in /book." })

                setBookState(1);
            }
        })
    }

    const getJournalBoardPage = (pageNum) => {
        setJournalState(0);
        axios.post(`${API_URL}/journal_with_pagenum`, { pageNum: pageNum })
        .then((response) => {
            if (response.data) {
                    setJournal(response.data.boardData);
                } else setJournal({ errMsg: "Error in /journal_with_pagenum" });
                setJournalState(1);
            })
    }

    const getBookBoardPage = (pageNum) => {
        setBookState(0);
        axios.post(`${API_URL}/book_with_pagenum`, { pageNum: pageNum })
        .then((response) => {
            if (response.data) {
                setBook(response.data);                
            } else setBook({ errMsg: "Error in /book_with_pagenum" });
            setBookState(1);
        })
    }

    const getJournalContent = (journalId) => {
        setJCState(0);
        axios.post(`${API_URL}/journal_id`, { id: journalId })
        .then((response) => {
            if (response.data) {
                setJournalContent(response.data)
            } else setJournalContent("Error in /journal_id");
        })
    }

    const getBookContent = (bookId) => {
        setJCState(0);
        axios.post(`${API_URL}/book_id`, { id: bookId })
        .then((response) => {
            if (response.data) {
                setBookContent(response.data)
            } else setBookContent("Error in /book_id");
        })
    }

    return (
        <SocketContext.Provider
            value={{
                journal, book, journalState, bookState, journalPage, bookPage,
                journalContent, bookContent, JCState, BCState,
                getJournalBoard, getBookBoard, getJournalBoardPage, getBookBoardPage,
                getJournalContent, getBookContent
            }}
        >
            {children}
        </SocketContext.Provider>
    )
}

export { ContextProvider, SocketContext }