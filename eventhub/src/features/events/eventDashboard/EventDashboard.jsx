import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import { useSelector, useDispatch } from "react-redux";
import EventFilters from "./EventFilters";
import { listenToEvents } from "../eventActions";
import { listenToEventsFromFirestore } from "../../../app/firestore/firestoreService";
import useFirestoreCollection from "../../../app/hooks/useFirestoreCollection";

export default function EventDashboard(){
    const dispatch = useDispatch();
    const {events} = useSelector((state) => state.event);
    const {loading} = useSelector((state) => state.async);

    useFirestoreCollection({
        query: () => listenToEventsFromFirestore(),
        data: events => dispatch(listenToEvents(events)),
        deps: [dispatch]
    })
    
    return(
        <Grid>
            <Grid.Column width={10}>
                {loading &&
                    <>
                        <EventListItemPlaceholder />
                        <EventListItemPlaceholder />
                    </>
                }
                <EventList events={events}/>
            </Grid.Column>

            <Grid.Column width={6}>
                <EventFilters />
            </Grid.Column>
        </Grid>
    )
}