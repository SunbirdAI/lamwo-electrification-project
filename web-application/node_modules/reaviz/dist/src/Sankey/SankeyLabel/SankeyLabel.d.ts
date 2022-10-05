import { Component } from 'react';
import { Node } from '../utils';
export declare type Location = 'inside' | 'outside';
export interface SankeyLabelProps {
    active: boolean;
    chartWidth?: number;
    className?: string;
    fill: string;
    location: Location;
    node?: Node;
    opacity: (active: boolean) => number;
    padding?: string | number;
    visible: boolean;
}
export declare class SankeyLabel extends Component<SankeyLabelProps> {
    static defaultProps: Partial<SankeyLabelProps>;
    render(): JSX.Element;
}
