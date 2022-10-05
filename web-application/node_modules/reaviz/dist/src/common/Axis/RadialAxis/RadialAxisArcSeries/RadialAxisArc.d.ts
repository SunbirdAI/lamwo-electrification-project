import { Component } from 'react';
export interface RadialAxisArcProps {
    index: number;
    scale: any;
    stroke: ((index: number) => string) | string;
    strokeDasharray: ((index: number) => string) | string;
}
export declare class RadialAxisArc extends Component<RadialAxisArcProps> {
    static defaultProps: Partial<RadialAxisArcProps>;
    render(): JSX.Element;
}
