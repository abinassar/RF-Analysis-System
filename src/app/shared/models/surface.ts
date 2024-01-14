
export interface SurfaceData {
  surfaceCoordinates: SurfaceCoordinate[];
}

export interface SurfaceCoordinate {
  endPoint: EndPoint;
  startPoint: EndPoint;
  surfacePoints: SurfacePoints;
}

export interface SurfacePoints {
  coordinates: Coordinate[];
  linkDistance: number;
}

export interface Coordinate {
  x: number;
  y: number;
  z: number;
}

export interface EndPoint {
  lat: number;
  lng: number;
}