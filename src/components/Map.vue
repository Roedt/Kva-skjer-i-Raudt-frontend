<template>
    <div id="map-view">
        <h1> {{ header }} </h1>
        <div id="map">
            <l-map ref="map" :zoom="zoom" :center="center" :maxZoom="maxZoom">
                <l-tile-layer :url="mapURL" :id="mapID" :attribution="attribution"></l-tile-layer>
            </l-map>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import L, { LatLng } from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import axios from 'axios';
import ConcertEvent from './ConcertEvent.vue';

@Component({
    components: {
        LMap, LTileLayer, LMarker,
    },
    methods: {
        createMarker(event: ConcertEvent) {
            const marker = L.marker(new LatLng(event.getLat(), event.getLon()));
        },
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

    constructor() {
        super();
        this.createMarker(new ConcertEvent(66.1, 10.4));
    }

    private makeAPICall(url: string, callback: any) {
        axios
        .get(url)
        .then((response: any) => callback(response));
    }

    private createMarker(event: ConcertEvent) {
        const marker = L.marker(new LatLng(event.getLat(), event.getLon()));
        this.$nextTick(() => {
            const ref: any = this.$refs.map;
            const map = ref.mapObject;
            marker.addTo(map);
        });

/*        'color': 'blue',
        'fillColor': '#f03',
        'fillOpacity': 0.5,
  */
    }
}

</script>

<style scoped lang="scss">

@import "~leaflet/dist/leaflet.css";

div#map{
    height: 25rem; // 80%
    width: 50vw;
    border: 1px solid blue;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
</style>