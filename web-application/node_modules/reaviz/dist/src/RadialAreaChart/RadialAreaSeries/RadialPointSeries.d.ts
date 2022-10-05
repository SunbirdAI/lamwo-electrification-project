import { ReactElement, FC } from 'react';
import { RadialScatterPoint, RadialScatterPointProps } from '../../RadialScatterPlot';
import { ChartInternalShallowDataShape } from '../../common/data';
export interface RadialPointSeriesProps {
    /**
     * Whether the points are animated or not.
     */
    animated: boolean;
    /**
     * Color scheme.
     */
    color: any;
    /**
     * Active values set by parent.
     */
    activeValues?: any;
    /**
     * Parsed data object.
     */
    data: ChartInternalShallowDataShape[];
    /**
     * D3 X-Scale.
     */
    yScale: any;
    /**
     * D3 Y-Scale.
     */
    xScale: any;
    /**
     * When to show the point.
     */
    show: boolean | 'hover' | 'first' | 'last';
    /**
     * Point react component.
     */
    point: ReactElement<RadialScatterPointProps, typeof RadialScatterPoint>;
}
export declare const RadialPointSeries: FC<Partial<RadialPointSeriesProps>>;
