import { Component, ReactElement } from 'react';
import { RadialAxisArc, RadialAxisArcProps } from './RadialAxisArc';
export interface RadialAxisArcSeriesProps {
    arc: ReactElement<RadialAxisArcProps, typeof RadialAxisArc>;
    count: number;
    innerRadius: number;
    outerRadius: number;
}
export declare class RadialAxisArcSeries extends Component<RadialAxisArcSeriesProps> {
    static defaultProps: Partial<RadialAxisArcSeriesProps>;
    render(): JSX.Element;
}
