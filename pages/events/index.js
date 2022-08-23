import {useRouter} from "next/router";
import {getAllEvents} from '../../dummy_data'
import EventList from '../../componets/events/event-list'
import EventSearch from "../../componets/events/event-search";
import {router} from "next/client";

function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();
    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <>
            <EventSearch onSearch = {findEventsHandler}/>
           <EventList items={events} />
        </>
    )
}
export default AllEventsPage;