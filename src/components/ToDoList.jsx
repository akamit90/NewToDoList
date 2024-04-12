import React, { useState } from 'react'
import TaskList from './TaskList'
import todoimg from '../assets/todoimg.jpg'
import { v4 as uuidv4 } from 'uuid';
function ToDoList() {

    const [activity,setActivity] =useState("")
    const [task,setTask]=useState([])
    const [update,setUpdate]=useState(true)
    const [edit,setEdit]=useState(null)

    const handleUpdate =()=>{

        if(activity===""){
            alert("Please Enter Activity")
        }

        else if(!update){
            setTask(task.map((newElem)=>{
                if(newElem.id===edit){
                return{...newElem,title:activity,complete:false}
                }
                return newElem;
            }))
             setUpdate(true)
             setActivity("")
             setEdit(null)  // bcoz wps de id na jaye task update krne ke baad
        }else{
            const allActivity= {id:uuidv4(),title:activity}
            console.log(allActivity)
            setTask([...task,allActivity])
            setActivity("") 
        }
    }
  return (
    <div>
    <section className='text-grey-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
            <div className='w-[85%] mx-auto flex flex-wrap'>
                <div className='lg:w-[40%] md:w-1/2 mx-auto bg-grey-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0'>
                    <h2 className='text-grey-900 font-bold mb-5 text-center text-5xl bg-black text-white'>
                        Todo List
                    </h2>
                    <div className='mb-4'>
                        <input
                            type="text"
                            value={activity}
                            onChange={(e)=>setActivity(e.target.value)}
                            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-grey-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                            placeholder='Enter Task'
                        />
                    </div>
                    {
                        update ? <button className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleUpdate}>
                            Add
                        </button>
                        :
                        <button className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleUpdate}>
                            Update
                        </button>
                    }
                    
                    <TaskList 
                        task={task} 
                        setTask={setTask} 
                        setActivity={setActivity} 
                        setUpdate={setUpdate} 
                        setEdit={setEdit}
                    />
                </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default ToDoList
