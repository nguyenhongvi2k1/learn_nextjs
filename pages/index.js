import EventList from "../componets/events/event-list";
// import {getFeaturedEvents} from '../helpers/api-util.js'
import {fetchAPI} from "../lib/api";
import Head from "next/head";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  console.log("props:", props)
  return (
    <>
        <Head>
            <title>Home</title>
            <meta  name='description' content="Home"/>
        </Head>
        <EventList items={props.events}/>
    </>
  )
}

export async function getStaticProps(){

    const [events] = await Promise.all([
        fetchAPI("/restaurant", {
            data: {
                id: "*",
                attributes: "*",
            }
        })
    ])
    console.log(events)
    // const featuresEvents = await getFeaturedEvents()
    return {
        props: {
            events: events.data,
            // form: forms.data
        },
        revalidate: 1
    }
}
export default HomePage;