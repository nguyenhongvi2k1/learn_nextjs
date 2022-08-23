import EventList from "../componets/events/event-list";
import {getFeaturedEvents} from '../dummy_data.js'

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
        <EventList items={featuredEvents}/>
    </div>
  )
}
export default HomePage;