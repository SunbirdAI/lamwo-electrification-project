import { Component } from 'react';
import { LinearAxisTickLabelProps } from './LinearAxisTickLabel';
import { LinearAxisTickLineProps } from './LinearAxisTickLine';
import { LinearAxisTickSeriesProps } from './LinearAxisTickSeries';
import { LinearAxisProps } from './LinearAxis';
export declare class LinearYAxisTickLabel extends Component<LinearAxisTickLabelProps> {
    static defaultProps: Partial<LinearAxisTickLabelProps>;
    render(): JSX.Element;
}
export declare class LinearYAxisTickLine extends Component<LinearAxisTickLineProps> {
    static defaultProps: Partial<LinearAxisTickLineProps>;
    render(): JSX.Element;
}
export declare class LinearYAxisTickSeries extends Component<LinearAxisTickSeriesProps> {
    static defaultProps: Partial<LinearAxisTickSeriesProps>;
    render(): JSX.Element;
}
export declare class LinearYAxis extends Component<LinearAxisProps> {
    static defaultProps: Partial<LinearAxisProps>;
    render(): JSX.Element;
}
