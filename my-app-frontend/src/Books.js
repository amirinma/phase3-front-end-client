import { useEffect, useState, useRef } from "react"
import { ReactDOM } from "react"

function Books ({bookList, setBookList}){
    const book = "http://localhost:9292/books"
    const [newBook, setNewBook] = useState('')
    const [newDate, setNewDate] = useState('')
    const changeTitle = useRef(null)
    function addBook(event){
        event.preventDefault()
        console.log(newBook)
        const addB  = {
          title: newBook,
          publish_date: newDate
        }
        fetch(book, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          }, 
          body: JSON.stringify(addB)
        })
        .then((e)=>e.json())
        // .then((data)=>setBookList(data))
      }
    console.log("test it out", bookList)
    //==============================

    function deleteBook(e){
        const bookDeleted = bookList.filter((book)=>book.id !== e)
        setBookList(bookDeleted)
    }
    function deleteBookFetch(id){
        fetch(`${book}/${id}`, {
            method: "DELETE"
        })
        deleteBook(id)
    }
    //============================== Working now
    function updatingBook(e){
        e.preventDefault()
        console.log(changeTitle.current.value)

    }

    //=======================
    const allBooks = bookList.map((book)=>{
        console.log("test for id", book.id)
        return (
            <div className="div-book">
                <h2 id={book.id} className="div-book-name" value={book.title}>{book.title}</h2>
                <form onClick={updatingBook}>
                    <input ref={changeTitle} type="text" placeholder="update title" />
                    <button type="submit" >Change title!</button>
                </form>
                <button onClick={()=>deleteBookFetch(book.id)}>Remove</button>
            </div>
        )
    })
    return (
        <div>
            <form onClick={addBook}>
                <label>Title </label>
                <input type="text" placeholder="enter the title" onChange={(e)=>setNewBook(e.target.value)} />
                <label>Published Date </label>
                <input type="text" placeholder="d-m-year" onChange={(e)=>setNewDate(e.target.value)}></input>
                <button type="submit" onClick={addBook}>Add Book</button>
            </form>
            {allBooks}
        </div>
        
    )
}

export default Books