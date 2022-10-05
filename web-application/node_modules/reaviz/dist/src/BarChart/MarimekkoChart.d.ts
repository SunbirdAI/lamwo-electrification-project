import { FC } from 'react';
import { BarChartProps } from './BarChart';
import { ChartNestedDataShape } from '../common/data';
interface MarimekkoChartProps extends BarChartProps {
    data: ChartNestedDataShape[];
}
export declare const MarimekkoChart: FC<Partial<MarimekkoChartProps>>;
export {};
