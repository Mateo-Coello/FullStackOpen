const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {">"} {props.title} - Exercises: {props.numExercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part title={props.parts[0].name} numExercises={props.parts[0].exercises}/>
      <Part title={props.parts[1].name} numExercises={props.parts[1].exercises}/>
      <Part title={props.parts[2].name} numExercises={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  const numExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Number of exercises {numExercises}.</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App