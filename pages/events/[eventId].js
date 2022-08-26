import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById, getAllEvents, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../componets/event-detail/event-summary";
import EventLogistics from "../../componets/event-detail/event-logistics";
import EventContent from "../../componets/event-detail/event-content";
import ErrorAlert from "../../componets/error-alert/error-alert";
import Head from "next/head";
function EventDetails(props) {
  // const router = useRouter();
  //
  // const eventId = router.query.eventId;
  const event = props.selectedEvent;
  // if (!event) {
  //   return <ErrorAlert>
  //       <p>No event found!</p>;
  //   </ErrorAlert>
  // }

    if (!event) {
        return (
            <div className="center">
                <p>Loading...</p>
            </div>
        );
    }
  return (
    <>
        <Head>
            <title>Detail Event</title>
            <meta name="description" content={''}/>
        </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p> {event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    };
}

export async function getStaticPaths(){
    const events = await getFeaturedEvents();

    const paths = events.map((event) => ({
        params: {eventId: event.id}
    }))
    return{
        paths: paths,
        fallback: "blocking"
    }
}

export default EventDetails;
