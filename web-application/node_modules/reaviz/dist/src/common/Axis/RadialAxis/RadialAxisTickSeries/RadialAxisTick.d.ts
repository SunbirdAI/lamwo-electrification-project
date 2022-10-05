import { Component, ReactElement } from 'react';
import { RadialAxisTickLineProps, RadialAxisTickLine } from './RadialAxisTickLine';
import { RadialAxisTickLabelProps, RadialAxisTickLabel } from './RadialAxisTickLabel';
export interface RadialAxisTickProps {
    scale: any;
    outerRadius: number;
    innerRadius: number;
    padding: number;
    data: any;
    index: number;
    line: ReactElement<RadialAxisTickLineProps, typeof RadialAxisTickLine> | null;
    label: ReactElement<RadialAxisTickLabelProps, typeof RadialAxisTickLabel> | null;
}
export declare class RadialAxisTick extends Component<RadialAxisTickProps> {
    static defaultProps: Partial<RadialAxisTickProps>;
    render(): JSX.Element;
}
