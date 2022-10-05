import { Component, ReactElement } from 'react';
import { RadialAxisTickSeries, RadialAxisTickSeriesProps } from './RadialAxisTickSeries';
import { RadialAxisArcSeries, RadialAxisArcSeriesProps } from './RadialAxisArcSeries';
export interface RadialAxisProps {
    height: number;
    width: number;
    xScale: any;
    innerRadius: number;
    type: 'value' | 'time' | 'category';
    arcs: ReactElement<RadialAxisArcSeriesProps, typeof RadialAxisArcSeries> | null;
    ticks: ReactElement<RadialAxisTickSeriesProps, typeof RadialAxisTickSeries> | null;
}
export declare class RadialAxis extends Component<RadialAxisProps, {}> {
    static defaultProps: Partial<RadialAxisProps>;
    render(): JSX.Element;
}
