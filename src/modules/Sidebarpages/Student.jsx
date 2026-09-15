import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Student() {
    const [a,b]=useState([])

    
const myuserdata = ()=>{
    axios.get("http://localhost:5400/students").then((d)=>{
        console.log(d.data);
        b(d.data);
    })

}

useEffect(()=>{
    myuserdata();
},[])
    
const userDelete = (d)=>{
    console.log(d);
    axios.delete(`http://localhost:5400/students/${d}`).then((r)=>{
        toast.success("user is deleted", {autoClose:800,theme:'dark'});
        myuserdata();
    })
    
}
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1>List of Students</h1>
                <button className='bg-blue-500 rounded p-1'><Link to="adduser">Add User</Link></button>
            </div>
            <div className="">
                <div className="overflow-x-auto p-4 ">
                    <table className="text-center border-separate border-spacing-3 w-full border-collapse border border-blue-500 p-3 [&_td]:border-r [&_td]:border-blue-500">
                        <thead>
                            <tr className=''>
                                <th>Sno</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Dob</th>
                                <th>gender</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>ZipCode</th>
                                <th>Phone</th>
                            </tr>
                        </thead>

                        <tbody className='border border-blue-500'>
                            {a.map((u)=>{
                                return(
                            <tr>
                                <td className=" font-semibold">
                                   {u.id}
                                </td>
                                <td>{u.Firstname}</td>
                                <td>{u.Lastname}</td>
                                <td>{u.Dob}</td>
                                <td>{u.gender}</td>
                                <td>{u.Email}</td>
                                <td>{u.Address}</td>
                                <td>{u.City}</td>
                                <td>{u.State}</td>
                                <td>{u.zip}</td>
                                <td>{u.number}</td>
                                <td className='flex gap-2'>
                                    <button className='bg-red-500 rounded hover:bg-red-700 cursor-pointer' onClick={()=>userDelete(u.id)}>Del</button>
                                    <Link to={"useredit/"+u.id} className='bg-green-500 rounded hover:bg-green-700'>Edit</Link>
                                </td>
                           </tr>
                                )
                           })}
                        </tbody>
                    </table>
                </div>        </div>
        </div>
    )
}
