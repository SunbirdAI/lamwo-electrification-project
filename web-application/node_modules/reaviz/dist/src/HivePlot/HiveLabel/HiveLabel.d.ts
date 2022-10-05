import { FC } from 'react';
interface HiveLabelProps {
    index: number;
    text: string;
    label: any;
    outerRadius: number;
    angle: (...args: any[]) => any;
}
export declare const HiveLabel: FC<Partial<HiveLabelProps>>;
export {};
