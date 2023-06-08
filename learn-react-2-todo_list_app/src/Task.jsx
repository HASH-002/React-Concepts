export default function Task(props) {
    return (
        <div
            className="task"
            style={{
                backgroundColor: props.isCompleted ? "green" : "white",
            }}
        >
            <h1>{props.task}</h1>
            {/* 
              Big catch here is that while we are sending function inside onClick,
              we wont pass any arguments however if we want to pass arguments we pass
              another one liner function like this {()=>deleteTask(args)} inplace of
              pass writing like this {deleteTask}
            */}
            {/* we are associating key from above function */}
            <button onClick={() => props.completeTask(props.index)}>
                Complete Task
            </button>
            <button onClick={() => props.deleteTask(props.index)}>X</button>
        </div>
    );
}
