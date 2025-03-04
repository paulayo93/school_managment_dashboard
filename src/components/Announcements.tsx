

const data = new Array(3).fill()
const Announcements = () => {
    
    return (

        <div className="bg-white p-4 rounded-md" >
        <div className="flex item-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
        </div>  

        <div className="flex flex-col gap-4 mt-4">
        {data.map((_, index) => 
            
 <div className="bg-lamaSkyLight rounded-md p-4" key={index}>
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Shcool Board Meeting </h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1">4th Aug, 2025</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">This is the meeting with the board of the school </p>
        </div>

        )

        } 
              </div>

        </div>
    );

};

export default Announcements;
