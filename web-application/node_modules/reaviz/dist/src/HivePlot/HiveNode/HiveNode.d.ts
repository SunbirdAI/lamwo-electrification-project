import { FC } from 'react';
import { Node } from '../types';
interface HiveNodeProps {
    angle: (...args: any[]) => any;
    radius: (...args: any[]) => any;
    color: (...args: any[]) => any;
    node: Node;
    active?: boolean;
    disabled?: boolean;
    onClick: (...args: any[]) => any;
    onMouseOver: (...args: any[]) => any;
    onMouseOut: (...args: any[]) => any;
}
export declare const HiveNode: FC<Partial<HiveNodeProps>>;
export {};
