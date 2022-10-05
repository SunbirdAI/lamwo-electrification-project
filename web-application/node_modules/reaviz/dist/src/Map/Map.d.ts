import { ReactElement, FC } from 'react';
import { ChartProps } from '../common/containers/ChartContainer';
import { MapMarkerProps, MapMarker } from './MapMarker';
declare type MarkerElement = ReactElement<MapMarkerProps, typeof MapMarker>;
interface MapProps extends ChartProps {
    markers?: MarkerElement[];
    data: any;
    fill?: string;
}
export declare const Map: FC<MapProps>;
export {};
