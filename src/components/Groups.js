import { useStateContext, useDispatchContext } from "../store/context"


export default function Groups(){
  const state = useStateContext()
  // const dispatch = useDispatchContext()
  return (<>
    In Groups
    {console.log("state in Groups: ", state)}
  </>)
}