function TaskCard( { task}) {   
  return (
    <div className=" bg-zinc-700 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between"> 
        <h1 className="text-xl font-serif">{task.title} </h1>
        <div className="flex gap-x-2 items-center">
        <button onClick={()=> { console.log(task._id) }}> delete </button>
        <button> Edit</button>
        </div>
        </header>

    </div>
  )
}

export default TaskCard