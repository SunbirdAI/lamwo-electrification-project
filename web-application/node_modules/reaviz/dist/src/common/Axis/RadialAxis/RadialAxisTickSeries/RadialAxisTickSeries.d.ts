import { Component, ReactElement } from 'react';
import { RadialAxisTick, RadialAxisTickProps } from './RadialAxisTick';
import { TimeInterval } from 'd3-time';
export interface RadialAxisTickSeriesProps {
    scale: any;
    count?: number;
    interval?: number | TimeInterval;
    tickValues: any[];
    outerRadius: number;
    type: 'value' | 'category' | 'time' | 'duration';
    innerRadius: number;
    tick: ReactElement<RadialAxisTickProps, typeof RadialAxisTick>;
}
export declare class RadialAxisTickSeries extends Component<RadialAxisTickSeriesProps> {
    static defaultProps: Partial<RadialAxisTickSeriesProps>;
    render(): JSX.Element;
}
