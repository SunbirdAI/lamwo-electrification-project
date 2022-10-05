import { PureComponent } from 'react';
export interface RadialAxisTickLineProps {
    size?: number;
    stroke: string;
    innerRadius: number;
    outerRadius: number;
    position: 'inside' | 'outside';
}
export declare class RadialAxisTickLine extends PureComponent<RadialAxisTickLineProps> {
    static defaultProps: Partial<RadialAxisTickLineProps>;
    render(): JSX.Element;
}
