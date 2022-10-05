import React, { Component, ReactElement } from 'react';
import { Tooltip, TooltipProps } from 'realayers';
import { SankeyLabel, SankeyLabelProps } from '../SankeyLabel';
import { Node } from '../utils';
export interface SankeyNodeProps extends Node {
    /**
     * Whether the element is active or not. Set internally by `Sankey`.
     */
    active: boolean;
    /**
     * Whether to animate the enter/update/exit.
     */
    animated: boolean;
    /**
     * Width of the chart. Set internally by `Sankey`.
     */
    chartWidth?: number;
    /**
     * CSS class to apply.
     */
    className?: string;
    /**
     * Whether the node is disabled. Set internally by `Sankey`.
     */
    disabled: boolean;
    /**
     * Label element.
     */
    label: ReactElement<SankeyLabelProps, typeof SankeyLabel>;
    /**
     * Opacity callback for the node.
     */
    opacity: (active: boolean, disabled: boolean) => number;
    /**
     * Whether to show the label or not.
     */
    showLabel: boolean;
    /**
     * CSS styles to apply.
     */
    style?: object;
    /**
     * Tooltip element.
     */
    tooltip: ReactElement<TooltipProps, typeof Tooltip>;
    /**
     * Width of the node. Set internally by `Sankey`.
     */
    width?: number;
    /**
     * Event for when the node is clicked.
     */
    onClick: (event: React.MouseEvent<SVGRectElement>) => void;
    /**
     * Event for when the node has mouse enter.
     */
    onMouseEnter: (event: React.MouseEvent<SVGRectElement>) => void;
    /**
     * Event for when the node has mouse leave.
     */
    onMouseLeave: (event: React.MouseEvent<SVGRectElement>) => void;
}
interface SankeyNodeState {
    hovered?: boolean;
}
export declare class SankeyNode extends Component<SankeyNodeProps, SankeyNodeState> {
    static defaultProps: Partial<SankeyNodeProps>;
    state: SankeyNodeState;
    rect: React.RefObject<SVGRectElement>;
    getNode(): {
        id: string;
        title: string;
        color: string;
        sourceLinks: import("d3-sankey").SankeyLink<import("../utils").NodeExtra, import("../utils").LinkExtra>[];
        targetLinks: import("d3-sankey").SankeyLink<import("../utils").NodeExtra, import("../utils").LinkExtra>[];
        value: number;
        index: number;
        x0: number;
        x1: number;
        y0: number;
        y1: number;
    };
    onMouseEnter(event: React.MouseEvent<SVGRectElement>): void;
    onMouseLeave(event: React.MouseEvent<SVGRectElement>): void;
    renderNode(): JSX.Element;
    renderTooltipContent(): JSX.Element;
    render(): JSX.Element;
}
export {};
