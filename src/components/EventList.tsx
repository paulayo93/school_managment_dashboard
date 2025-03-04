const data = [
 {
    id: 1,
    title: "Lake Trip",
    time: "12:00PM  - 2:00PM",
    description: "make a trip to the lake side",

 },
 {
    id: 2,
    title: "Lake Trip",
    time: "12:00PM  - 2:00PM",
    description: "make a trip to the lake side",

 },
 {
    id: 3,
    title: "Lake Trip",
    time: "12:00PM  - 2:00PM",
    description: "make a trip to the lake side",

 },
 {
    id: 4,
    title: "Lake Trip",
    time: "12:00PM  - 2:00PM",
    description: "make a trip to the lake side",

 }





]
const EventList = () => {

    //const date = dateParam ? new Date(dateParam) : new Date();

   return data.map((event) => (
    <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
    <div className="flex items-center justify-between" > 
    <h1 className="font-semibold text-gray-600">{event.title} </h1>
    <span className="text-gray-300 text-xs"> 

    </span>

    </div>

    <p className="mt-2 text-gray-400 text-sm">{event.description} </p>
    </div>

   )) 
 
}

export default EventList;
