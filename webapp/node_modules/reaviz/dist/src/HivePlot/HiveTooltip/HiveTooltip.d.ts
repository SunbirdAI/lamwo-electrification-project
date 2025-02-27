import { FC } from 'react';
import { Axis, Node } from '../types';
interface HiveTooltipProps {
    axis: Axis[];
    node: Node;
    nodes: Node[];
}
export declare const HiveTooltip: FC<Partial<HiveTooltipProps>>;
export {};
