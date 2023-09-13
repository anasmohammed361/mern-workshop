import {Accordion, Spinner} from "flowbite-react";
import { TableCustom } from "../components/TableCustom"
import { ModalCustom } from "../components/ModalCustom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { groupByField } from "../scripts/groupElements";


const Root = () => {
  const [auth, setAuth] = useState(false);
  const [loading,setLoading] = useState(true) ;
  const [values,setValues] = useState({})
  useEffect(() => {
    fetch("/api/auth")
      .then((response) => {
        setLoading(false)
        setAuth(Boolean(response.status === 200));
      })
      .catch((e) => {
        setLoading(false)
        console.log(e);
        setAuth(false);
      });
  },[]);
  useEffect(()=>{
  if (!auth) {
    return
  }
  fetch('/pdf/all').then(value=>{
    const tt = groupByField(value,'parent')
    console.log(tt);
    setValues(tt)
  })
  },[auth])
  if (loading) {
   return <Spinner/>
  }

  if (!loading && !auth) {
    return <Navigate to="/signin" />
  }

  return (
  <main className="h-screen w-full bg-gradient-to-tr from-slate-900 to-slate-950 dark">
   <div className="flex items-center justify-between p-4">
    <h1 className="text-white text-5xl">All your Notes Organized in one place</h1>
   <ModalCustom/>
   </div>
    <div className="px-10">
    <Accordion >
      <Accordion.Panel>
        <Accordion.Title >
          What is Flowbite?
        </Accordion.Title>
        <Accordion.Content>
         <TableCustom/>
        </Accordion.Content>
      </Accordion.Panel>  
    </Accordion>
    </div>
  </main>
  )
}

export default Root
