import { useState } from "react";

function App(){
    const [ description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);
    
    function handleAddItems(task){
        setTasks([...tasks, task]);
    }

    function handleSubmit(e){
        e.preventDefault();
    
        if(!description) return;
        const newTask = {description, done: false, id:Date.now()}

        handleAddItems(newTask)
        setDescription('');
   }

    return(
        <>
    <div className="header">
        <div className="logo">TODO</div>
        <div className="addMenu">
            <form onSubmit={handleSubmit}>
             <input type="text" placeholder="Enter Task" value={description} onChange={(e)=>setDescription(e.target.value)}/>
             <button type="submit">+</button>
            </form>
        </div>
    </div>

    <Main tasks={tasks} />
    </>
    )
}


function Main({tasks}){
    return(
        <section>
            {
                tasks.map((taskItem)=>{
                    return <div className="task-container" key={taskItem.id}>
                          <input type="checkbox"/>
                     <span >{taskItem.description}  </span>
                    </div>
                })
            }
        </section>
    )
}

























export default App;