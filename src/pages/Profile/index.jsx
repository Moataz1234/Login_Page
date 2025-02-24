import { useState } from "react"

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile Page</h1>
        </div>
    )
    // const renderContent = () => {
    //     switch (activeTab) {
    //         case 0:
    //             return <h1>All Courses Data</h1>
    //         case 1:
    //             return <h1>All Users Data</h1>
    //         case 2:
    //             return <h1>All Settigns Data</h1>
    //         default:
    //             return <h1>All Courses Data</h1>
    //     }
    // }
    // const [activeTab, setActivTab] = useState(2);
    // return (
    //     <div className="d-flex h-100">
    //         <div className="col-3 h-100 bg-danger">
    //             <ul>
    //                 <li onClick={() => setActivTab(0)}>Courses</li>
    //                 <li onClick={() => setActivTab(1)}>Users</li>
    //                 <li onClick={() => setActivTab(2)}>Settigns</li>
    //             </ul>
    //         </div>
    //         <div className="col-9 h-100 bg-warning">
    //             {renderContent()}
    //         </div>
    //     </div>
    // )
}
