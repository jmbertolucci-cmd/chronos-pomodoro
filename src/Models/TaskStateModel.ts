import type { TaskModel } from "./TaskMode";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaning: number;
    formatedSecondsRemaning:string;
    activeTask: TaskModel| null;
    currentCycle: number;    
    config : {
        workTime: number ;
        shortBreakTime: number ;
        longBreakTime: number ;
    };
};