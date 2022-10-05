import { Component, ReactElement } from 'react';
import { ChartProps, ChartContainerChildProps } from '../common/containers/ChartContainer';
import { ColorSchemeType } from '../common/color';
import { SankeyNodeProps, SankeyNode } from './SankeyNode';
import { SankeyLinkProps, SankeyLink } from './SankeyLink';
import { Node, Link } from './utils';
declare type Justification = 'justify' | 'center' | 'left' | 'right';
declare type NodeElement = ReactElement<SankeyNodeProps, typeof SankeyNode>;
export interface SankeyProps extends ChartProps {
    /**
     * Whether to animate the enter/update/exit. Set internally by `SankeyNode` and `SankeyLink`.
     */
    animated: boolean;
    /**
     * Color scheme for the nodes. Set internally by `SankeyNode`.
     */
    colorScheme: ColorSchemeType;
    /**
     * The node alignment method.
     */
    justification: Justification;
    /**
     * Width of the node.
     */
    nodeWidth: number;
    /**
     * Vertical padding between nodes in the same column.
     */
    nodePadding: number;
    /**
     * Nodes that are rendered.
     */
    nodes: NodeElement[];
    /**
     * Links that are rendered.
     */
    links: ReactElement<SankeyLinkProps, typeof SankeyLink>[];
}
interface SankeyState {
    activeNodes: Node[];
    activeLinks: Link[];
}
export declare class Sankey extends Component<SankeyProps, SankeyState> {
    static defaultProps: Partial<SankeyProps>;
    state: SankeyState;
    getNodeColor(node: NodeElement, index: any): any;
    onNodeActive(node: Node): void;
    onLinkActive(link: Link): void;
    onInactive(): void;
    renderNode(computedNode: Node, index: number, chartWidth: number, node?: NodeElement): JSX.Element;
    renderNodes(nodes: Node[], chartWidth: number): JSX.Element;
    renderLink(computedLink: Link, index: number, chartId: string): JSX.Element;
    renderChart(containerProps: ChartContainerChildProps): JSX.Element;
    render(): JSX.Element;
}
export {};
