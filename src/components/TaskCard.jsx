function TaskCard( { task }) {   
  return (
    <div className="  bg-zinc-700 max-w-md w-full p-10 rounded-md">
      <div >
        <header className="flex justify-between">
          <h1 className="text-xl font-serif" >{task.title}</h1>
          <div className="flex gap-x-2 items-center" >
            <button className= " bg-red-500 gap-1 ps-2 pr-2  px-4  rounded-md text-xl  text-white"> Delete</button>
            <button className= " bg-teal-600  gap-1 ps-2 pr-2  px-4  rounded-md text-xl  text-white">Edit</button>            
          </div>
          </header>
          <p className="text-slate-300"> {task.description} </p>
          <p>{new Date(task.date).toLocaleDateString()} </p>
        </div>

    </div>
  )
}

export default TaskCard




{/* <header className="flex justify-between"> 
<h1 className="text-xl font-serif">{task.title} </h1>
<div className="flex gap-x-2 items-center">
<button onClick={()=> { console.log(task._id) }}> delete </button>
<button> Edit</button>
</div>
</header> */}