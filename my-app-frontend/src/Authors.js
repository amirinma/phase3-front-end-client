import React, {useRef} from "react";

function Authors({authorList}){
    console.log("author", authorList)
    const authorFetch = "http://localhost:9292/authors"
    const getElement = useRef(null)

    function showBooks(e){
        fetch(`${authorFetch}/${e}`)
        .then((r)=>r.json())
        .then((auth)=>{
            getElement.current.textContent = `${auth.title}`
        })
        
    }
    const author = authorList.map((auth)=>{
        console.log("author id", auth.id)
        return (
            <div className="div-book">
                <table className="div-book-name hello">
                    <tr>{auth.first_name}</tr>
                    <tr>{auth.last_name}</tr>
                    
                </table>
                <button onClick={()=>showBooks(auth.id)}>Show Books</button>
                
            </div>
        )
    })

    return (
        <div>
            <button>Add Author</button>
            <table>
                <div className="div-book-name">
                    <th>Full Name</th>
                </div>
                <div className="div-book-name">
                    {author}
                </div>
            </table>
            <div className="div-book-name">
                <h3>Author's Book:</h3>
                <p ref={getElement}></p>
            </div>
        </div>
    )
}
export default Authors