import { SankeyNode, SankeyLink } from 'd3-sankey';
export interface NodeExtra {
    id?: string;
    title: string;
    color?: string;
}
export interface LinkExtra {
    color?: string;
}
export declare type Node = SankeyNode<NodeExtra, LinkExtra>;
export declare type Link = SankeyLink<NodeExtra, LinkExtra>;
export declare const DEFAULT_COLOR = "rgba(255, 255, 255, 0.2)";
