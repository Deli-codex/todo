function App(){
    return(
        <>
    <div className="header">
        <div className="logo">TaskADD📑✏🗓</div>
        <div className="addMenu">
            <input type="text" placeholder="enter task"/>
            <button>Add+</button>
        </div>
    </div>

    <Main/>
    </>
    )
}

function Main(){
    return(
        <section>
           <div className="task-container">

            </div>
            <span className="plus">+</span>
        </section>
    )
}

























export default App;