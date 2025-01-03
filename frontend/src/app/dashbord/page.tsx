// import DefaultCard from "@/components/common/Card/DefaultCard";

//     export default function dashboard() {
//         return (
          
//           <DefaultCard>
//             <div></div>
//           </DefaultCard>
//         );
//       }
      

import DefaultCard from "@/components/common/Card/DefaultCard";
import Layout from "./layout";

export default function Home() {
  return (
    <>
   {/* Employees Section */}
   <div className="grid grid-cols-2 gap-4">
   <div className="bg-white p-4 rounded-lg shadow">
     <h2 className="font-bold text-lg mb-4">Employees</h2>
     <ul className="space-y-2">
       <li className="flex items-center justify-between">
         <span>Anthony Lewis</span>
         <span className="text-gray-500">Finance</span>
       </li>
       <li className="flex items-center justify-between">
         <span>Brian Villalobos</span>
         <span className="text-gray-500">Development</span>
       </li>
     </ul>
   </div>
   <div className="bg-white p-4 rounded-lg shadow">
     <h2 className="font-bold text-lg mb-4">Employees</h2>
     <ul className="space-y-2">
       <li className="flex items-center justify-between">
         <span>Stephan Parekh</span>
         <span className="text-gray-500">Marketing</span>
       </li>
       <li className="flex items-center justify-between">
         <span>Douglas Martin</span>
         <span className="text-gray-500">Manager</span>
       </li>
     </ul>
   </div>
 </div>

 {/* Attendance Overview */}
 <div className="grid grid-cols-3 gap-4">
   <div className="bg-white p-4 rounded-lg shadow text-center">
     <h3 className="font-bold">Attendance Overview</h3>
     <div className="w-24 h-24 mx-auto bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
       120
     </div>
     <p className="text-gray-500 mt-2">Total Attendance</p>
   </div>
   {/* Duplicate for other overviews */}
 </div>
    </>
  );
}
