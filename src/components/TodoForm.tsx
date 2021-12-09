import { title } from "process"
import { ChangeEvent, useRef, useState } from "react"

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm = ({onAdd}: TodoFormProps) =>{
    
    // const [title, setTitle] = useState('')

    // const changeHandler = (e: ChangeEvent <HTMLInputElement>) =>{
    //     setTitle(e.target.value)
    // }
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (e:  React.KeyboardEvent) =>{

        if(e.key === "Enter"){
            onAdd(ref.current!.value)
            ref.current!.value = ""
            // console.log(title)
            // setTitle('')
        }
    }


    return(
        <div className="input-field mt2">
            <input 
            ref={ref}
            // value={title} onChange={changeHandler}  
            type="text" id="title" placeholder="Enter you task"
            onKeyPress={keyPressHandler}/>
            <label htmlFor="title" className="active">Enter you task</label>
        </div>
    )
}