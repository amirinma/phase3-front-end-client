import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom"
import Books from './Books'
import Authors from './Authors'
import Header from './Header';
import Readers from './Readers';
import './App.css';

function App() {
  const book = "http://localhost:9292/books"
  const author = "http://localhost:9292/authors"
  const [bookList, setBookList] = useState([])
  
  useEffect(()=>{
    fetch(book)
    .then((r)=>r.json())
    .then((book)=>setBookList(book))
  }, [])
  const [authorList, setAuthorList] = useState([])
  useEffect(()=>{
    fetch(author)
    .then((r)=>r.json())
    .then((auth)=>setAuthorList(auth))
  }, [])

 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element = {<Books  bookList = {bookList} setBookList ={setBookList}/>} path= '/books' />
        <Route element = {<Authors authorList = {authorList} />} path = '/authors' />
        <Route element = {<Readers />} path = '/readers' />
      </Routes>
    </div>
  );
}

export default App;
