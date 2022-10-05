import { FC } from 'react';
import { Link } from '../types';
interface HiveLinkProps {
    angle: (...args: any[]) => any;
    radius: (...args: any[]) => any;
    color: (...args: any[]) => any | string;
    link: Link;
    active?: boolean;
    onMouseOver: (...args: any[]) => any;
    onMouseOut: (...args: any[]) => any;
}
export declare const HiveLink: FC<Partial<HiveLinkProps>>;
export {};
