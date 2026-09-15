import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Teacher from '../Sidebarpages/Teacher'

export default function Appsidebar() {
  return ( 

        <div className="w-64 bg-white rounded-3xl p-5 shadow">
          <h1 className="text-2xl font-bold mb-8">SchoolHub</h1>

          <ul className="space-y-3">
            <li className="p-3">
              
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-3"><Link to="teacher">Teachers</Link></li>
            <li className="p-3"><Link to="student">Students</Link></li>
            <li className="p-3"><Link to="attendance">Attendance</Link></li>
            <li className="p-3"><Link to="finance">Finance</Link></li>
            <li className="p-3"><Link to='notice'>Notice</Link></li>
          </ul>
        </div>
 
)
}