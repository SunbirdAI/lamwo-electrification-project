import { PureComponent } from 'react';
export interface RadialAxisTickLabelProps {
    data: any;
    lineSize: number;
    fill: string;
    fontSize: number;
    rotation: number;
    fontFamily: string;
    index: number;
    padding: number;
    point: any;
    autoRotate: boolean;
    format?: (value: any, index: number) => any | string;
}
export declare class RadialAxisTickLabel extends PureComponent<RadialAxisTickLabelProps> {
    static defaultProps: Partial<RadialAxisTickLabelProps>;
    getPosition(): {
        transform: any;
        textAnchor: any;
    };
    render(): JSX.Element;
}
