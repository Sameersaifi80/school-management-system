import Appfooter from '../sharecomponets/Appfooter'
import Appheader from '../sharecomponets/Appheader'
import Appsidebar from '../sharecomponets/Appsidebar'
import { Outlet } from 'react-router-dom'

export default function Landingpage() {
  return (
    <>
      <Appheader  className="flex flex-col sm:flex-row justify-between items-center gap-3"/>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Appsidebar className="w-full lg:w-72"/>

        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </div>

      <Appfooter />
    </>
  )
}