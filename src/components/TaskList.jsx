import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";

function TaskList({task,setTask,setActivity,setUpdate,setEdit}) {

    const handleRemove=(id)=>{
        const isConfirm = window.confirm("Are you sure?")
        if(isConfirm){
            
            const filterItem = task.filter((item)=>(
                id != item.id    //we are doing here just opposite of filter function here (means ki apn ek id ko hata rhe h)
            ))
            setTask(filterItem)
        }
    }

   //  // we can do same task using splice method insted of filter method

    // const handleRemove = (id) => {
    //     const newTask = [...task];
    //     newTask.splice(id, 1);           // array.splice(start, deleteCount, item1, item2, ...)
    //     setTask(newTask);
    // }
    

    const handleEdit=(id)=>{
            const findItem = task.find((elem)=>{
                return id === elem.id
            })
           setActivity(findItem.title )
           setUpdate(false)
           setEdit(id)
    }

    const handleAllRemove=()=>{
        alert("Are you sure?")
        setTask([])
    }

    const handleComplete=(id) =>{
        setTask(task.map((compItem)=>{
            if(compItem.id===id){
                return{...compItem,complete:!compItem.complete}
            }
            return compItem;
        }))

    }

  return (
    <div>
        <ul>
      {  
        task.map((taskList)=>(
        <li 
        className={`flex justify-between border-b-2 px-2 py-1 items-center ${taskList.complete ? "line-through" : ""}`}
        key={taskList.id}
         >
            <div className='flex gap-3'>
                <span className='cursor-pointer'>
                <CiSquareCheck size={25} onClick={()=>handleComplete(taskList.id)}/>
                </span>
                <span>{taskList.title}</span>
            </div>
            <div className='flex gap-3'>
                <span className='cursor-pointer'>
                <FaEdit size={25} onClick={()=>handleEdit(taskList.id)}/>
                </span>
            <span className='cursor-pointer'>
                <MdDelete size={25} onClick={()=>handleRemove(taskList.id)}/>
                </span>
            </div>
        </li>
    ))
}
        
</ul>

{
    task.length>1 && <button className='bg-[red] text-white px-3 py-2 rounded-md my-5 hover:bg-red-600' onClick={handleAllRemove}>
    Remove all
    </button>
}
    </div>
  )
}

export default TaskList
