import {useRouter} from "next/router";
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../componets/events/event-list'
import EventSearch from "../../componets/events/event-search";
import Head from "next/head";

function AllEventsPage(props) {
    const router = useRouter();
    const { events } = props;
    // console.log(props)


    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <>
            <Head>
                <title>All Event</title>
                <meta name= "description" content='Find a lot of great events that allow you to evolve...' />
            </Head>
            <EventSearch onSearch = {findEventsHandler}/>
           <EventList items={events[0]} />
        </>
    )
}

export async function getStaticProps(){
    const events = await getAllEvents();

    return{
        props:{
            events:events
        },
        revalidate: 60
    }
}

// export async function getStaticPaths(){
//
// }

export default AllEventsPage;