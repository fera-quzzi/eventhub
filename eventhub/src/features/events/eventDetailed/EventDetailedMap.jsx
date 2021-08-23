import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

function Marker(){
    return (
        <Icon name='marker' size='big' color='red'/>
    )
}

export default function EventDetailedMap({latLng}){
    const zoom = 14;
    return(
        <Segment attached='bottom' style={{padding: 0}}>
            <div style={{ height: 100, width: '100%'}}>
                <GoogleMapReact 
                    bootstrapURLKeys={{ key: "AIzaSyC9g6lV2Gv3WR4mGRp22obYmSKyWXP3FWI" }}
                    center={latLng}
                    zoom={zoom}

                >
                    <Marker lat={latLng.lat} lng={latLng.lng} />
                </GoogleMapReact>
            </div>
        </Segment>
    )
}