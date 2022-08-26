import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy_data";
import EventList from "../../componets/events/event-list";
import ResultsTitle from "../../componets/results-title/results-title";
import Button from "../../componets/ui/button";
import ErrorAlert from "../../componets/error-alert/error-alert";
import Head from "next/head";

function filteredEventsPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData){
        return <p className='center'>Loading...</p>
    }
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const pageHeadData = (
        <Head>
            <title>
                Filtered Events
            </title>
            <meta name="desciption" content={`All events for ${numMonth}/${numYear}`}/>
        </Head>
    )
    if(isNaN(numYear) || isNaN(numMonth) || filteredYear > 2030 || numYear <2021 || numYear <1 || numMonth > 12) {
        return(
            <>
                {pageHeadData}
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values</p>
                </ErrorAlert>
                <Button link='/events'>Show all Events</Button>
            </>

        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });
    if(!filteredEvents || filteredEvents.length === 0){
        return (
            <>
                {pageHeadData}
                <ErrorAlert>
                    <p>No Events found for the chosen filter</p>

                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show all Events</Button>
                </div>
            </>
        )
    }

    const date = new Date(numYear, numMonth-1);
    return(
        <>
            {pageHeadData}
          <ResultsTitle date = {date}/>
         <EventList items = {filteredEvents}/>
        </>
    )
}
export default filteredEventsPage;