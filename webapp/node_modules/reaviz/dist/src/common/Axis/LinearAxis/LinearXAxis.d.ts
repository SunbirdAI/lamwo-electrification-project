import { Component } from 'react';
import { LinearAxisTickLabelProps } from './LinearAxisTickLabel';
import { LinearAxisTickLineProps } from './LinearAxisTickLine';
import { LinearAxisTickSeriesProps } from './LinearAxisTickSeries';
import { LinearAxisProps } from './LinearAxis';
export declare class LinearXAxisTickLabel extends Component<LinearAxisTickLabelProps> {
    static defaultProps: Partial<LinearAxisTickLabelProps>;
    render(): JSX.Element;
}
export declare class LinearXAxisTickLine extends Component<LinearAxisTickLineProps> {
    static defaultProps: Partial<LinearAxisTickLineProps>;
    render(): JSX.Element;
}
export declare class LinearXAxisTickSeries extends Component<LinearAxisTickSeriesProps> {
    static defaultProps: Partial<LinearAxisTickSeriesProps>;
    render(): JSX.Element;
}
export declare class LinearXAxis extends Component<LinearAxisProps> {
    static defaultProps: Partial<LinearAxisProps>;
    render(): JSX.Element;
}
