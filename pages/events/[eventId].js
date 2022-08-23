import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy_data";
import EventSummary from "../../componets/event-detail/event-summary";
import EventLogistics from "../../componets/event-detail/event-logistics";
import EventContent from "../../componets/event-detail/event-content";
import ErrorAlert from "../../componets/error-alert/error-alert";
function EventDetails() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <ErrorAlert>
        <p>No event found!</p>;
    </ErrorAlert>
  }

  return (
    <Fragment>
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
    </Fragment>
  );
}
export default EventDetails;