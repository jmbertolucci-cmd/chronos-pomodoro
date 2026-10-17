import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../Models/TaskMode";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm(){
    //const [taskName, setTaskName] = useState(''); 
    const {state, setState} = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);
    
    function handleCreateNewTask(event:React.SubmitEvent) {
      event.preventDefault();

      if (taskNameInput.current === null) return;

      const taskName = taskNameInput.current.value.trim();

      if (!taskName) {
        alert('Digite o nome da tarefa.');
        return;  
      }

      const newTask:TaskModel = {
        id:Date.now().toString(),
        name:taskName,
        startDate:Date.now(),
        completeDate:null,
        interruptDate:null,
        duration:state.config[nextCycleType],
        type:nextCycleType
      } 

      const secondsRemaning = newTask.duration * 60;

      setState( prevState => {
        return {
          ...prevState,
          config: {...prevState.config},
          activeTask: newTask,
          currentCycle: nextCycle,
          secondsRemaning,
          formatedSecondsRemaning:formatSecondsToMinutes(secondsRemaning),
          tasks: [...prevState.tasks, newTask]          
        }        

      } )   

    }

    return (
        <form onSubmit={handleCreateNewTask} className='form'>
            <div className='formRow'>    
              <DefaultInput id='meuInput' 
                            type='text' 
                            labelText='Label Text' 
                            title='Titulo' 
                            placeholder='Digite algo'
                            // value={taskName}
                            // onChange={e => setTaskName(e.target.value)}
                            ref={taskNameInput}
                            />
            </div>

            <div className='formRow'>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='formRow'>
              <Cycles/>
            </div>

            <div className='formRow'>
              <p>000000</p>
            </div>

            <div className='formRow'>
              <DefaultButton icon={<PlayCircleIcon/>} color='green'/>              
            </div>

          </form>
    );
}