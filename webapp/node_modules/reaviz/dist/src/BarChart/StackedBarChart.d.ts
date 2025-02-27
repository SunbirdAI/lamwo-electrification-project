import { FC } from 'react';
import { BarChartProps } from './BarChart';
import { ChartNestedDataShape } from '../common/data';
interface StackedBarChartProps extends BarChartProps {
    data: ChartNestedDataShape[];
}
export declare const StackedBarChart: FC<Partial<StackedBarChartProps>>;
export {};
