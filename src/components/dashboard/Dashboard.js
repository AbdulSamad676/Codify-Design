import React from 'react'
import Sidebar from './Sidebar';
import Mainsec from './Mainsec';
const Dashboard = () => {
    return (
        <div>
         <div className="flex flex-wrap ">
            <div className=" w-full h-screen sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 bg-purpleb font-bold">
              <Sidebar/>
            </div>
            <div className=" bg-black text-white w-full sm:w-1/2 md:w-1/3 lg:w-4/5  mb-4 ">
                <Mainsec/>        
            </div>
        </div> 
        </div>
    )
}

export default Dashboard;
