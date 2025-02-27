import React, { FC } from 'react';
import { Placement } from 'rdk';
import { Node, Link, Axis } from './types';
interface NodeEventData {
    nativeEvent: any;
    node: Node;
    links: Link[];
}
interface LinkEventData {
    nativeEvent: any;
    link: Link;
}
export interface HivePlotProps {
    axis: Axis[];
    nodes: Node[];
    links: Link[];
    activeIds?: string[];
    disabled?: boolean;
    label: {
        show: boolean;
        padding?: number;
    };
    width?: number;
    height?: number;
    innerRadius: number;
    className?: any;
    onNodeClick: (data: NodeEventData) => void;
    onNodeMouseOver: (data: NodeEventData) => void;
    onLinkMouseOver: (data: LinkEventData) => void;
    onNodeMouseOut: (data: NodeEventData) => void;
    onLinkMouseOut: (data: LinkEventData) => void;
    tooltip: {
        show: boolean;
        placement: Placement;
        formatter: (axis: Axis[], nodes: Node[], link?: Link, node?: Node) => React.ReactNode;
    };
    colorScheme: {
        axis: string[];
        domain: string[];
    };
}
export declare const HivePlot: FC<Partial<HivePlotProps>>;
export {};
