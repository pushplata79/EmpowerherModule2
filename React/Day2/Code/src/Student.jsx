// read only properties
//shared component
// parent to child
function Student(props){

  return(
    <div className="student">
      <p> Name:{props.nname}</p>
      <p>Age:{props.age}</p>
      <p>Student: {props.isStudent?"Yes":"no"}</p>

    </div>
  )
}


export default Student;