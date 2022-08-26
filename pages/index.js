import EventList from "../componets/events/event-list";
import {getFeaturedEvents} from '../dummy_data.js'
import Head from "next/head";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
        <Head>
            <title>Home</title>
            <meta  name='description' content={''}/>
        </Head>
        <EventList items={featuredEvents}/>
    </>
  )
}
export default HomePage;