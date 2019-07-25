<template>
    <div id="map-view">
        <h1> {{ header }} </h1>
        <div id="map">
            <l-map ref="map" :zoom="zoom" :center="center" :maxZoom="maxZoom">
                <l-tile-layer :url="mapURL" :id="mapID" :attribution="attribution"></l-tile-layer>
                <Vue2LeafletMarkerCluster>
                <LMarker v-for="event in events" v-if="event.latlng !== null" :lat-lng="event.latlng" :key="event.url+event.host">
                    <LPopup :content="event.popup" />
                </LMarker>
                </Vue2LeafletMarkerCluster>
            </l-map>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import APICaller from '../components/APICaller.vue';
import SingleEvent from '../types/SingleEvent.vue';

Vue.component('Vue2LeafletMarkerCluster', Vue2LeafletMarkerCluster);

@Component({
    components: {
        LMap, LTileLayer, LMarker, LPopup,
    },
})
export default class Map extends Vue {
    @Prop() private header!: string;
    private zoom = 4;
    private center = [65.1, 18.0];
    private mapID = 'mapbox.streets';
    // tslint:disable-next-line:max-line-length
    private attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    // tslint:disable-next-line:max-line-length
    private accessToken = 'pk.eyJ1IjoibWFkc29waGVpbSIsImEiOiJjanZhcnVwMHIxMW15NGVwOHp5aGFldGRuIn0.wHzNVsUQ_ty5tEkrB8vnLQ';
    // tslint:disable-next-line:max-line-length
    private mapURL = 'https://api.tiles.mapbox.com/v4/' + this.mapID + '/{z}/{x}/{y}.png?access_token=' + this.accessToken;
    private mapURL2 = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    private maxZoom = 20;
    private events = [] as SingleEvent[];

    constructor() {
        super();
        const caller = new APICaller((e: any) => this.createMarker(e));
    }

    private createMarker(event: SingleEvent) {
        if (event.latlng === undefined) {
            return;
        }
        this.events.push(event);
/*        'color': 'blue',
        'fillColor': '#f03',
        'fillOpacity': 0.5,
  */
    }
}

</script>

<style scoped lang="scss">

@import "~leaflet/dist/leaflet.css";
@import "~leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

@media screen and (max-width: 720px) {
    div#map {
        width: 100%;
    }
}

div#map{
    height: 30rem; // 80%
    border: 1px solid blue;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    min-width: 50vw;
    min-height: 40vw;
}
</style>