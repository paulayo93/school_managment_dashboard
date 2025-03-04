import Image from "next/image";
import EventCalendar from "./EventCalendar";
import EventList from "./EventList";

const EventCalendarContainer = async () => {
  
  return (
    <div className="bg-white p-4 rounded-md">
      <EventCalendar />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
       <div className="flex flex-col gap-4">
        <EventList dateParam={"11 oct, 2025"} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
