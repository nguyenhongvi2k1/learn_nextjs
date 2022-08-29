import EventItem from "./event-item";


function EventList(props) {

  const { items } = props;
  //
  console.log('all: ', items)

  return (
    <ul>
      hi

      {/*{items.map((event) => (*/}
      {/*  <EventItem*/}
      {/*    key={event.id}*/}
      {/*    id={event.id}*/}
      {/*    title={event.attributes.title}*/}
      {/*    location={event.attributes.location}*/}
      {/*    date={event.attributes.date}*/}
      {/*  />*/}
      {/*))}*/}
    </ul>
  );
}
export default EventList;
