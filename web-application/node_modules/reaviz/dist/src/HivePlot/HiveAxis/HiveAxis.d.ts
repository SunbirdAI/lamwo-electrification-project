import { FC } from 'react';
interface HiveAxisProps {
    angle: (...args: any[]) => any;
    color: (...args: any[]) => any;
    radius: any;
    index: number;
}
export declare const HiveAxis: FC<Partial<HiveAxisProps>>;
export {};
