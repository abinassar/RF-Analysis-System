
export interface GeoPoint {
    lat: number;
    lng: number;
}

export const defaultPoints: GeoPoint = {
    lat: 10.469391,
    lng: -66.900354
}

export interface ElevationData {
    elevations: number[];
    linkDistance: number;
}