import {Spinner} from 'reactstrap';

export default function Loading(){
  return (
    <div className = 'callback-container'>
        <h1>Loading...</h1>
        <Spinner style = {{width: '3rem', height: '3rem'}} type = "grow" />
      </div>
  )
}
