import bigInt from 'big-integer';
export declare const generateData: (count: any, minVal?: number, maxVal?: number) => any;
export declare const largeDateData: {
    id: string;
    key: Date;
    data: number;
}[];
export declare const medDateData: {
    id: string;
    key: Date;
    data: number;
}[];
export declare const smallDateData: {
    id: string;
    key: Date;
    data: number;
}[];
export declare const singleDateData: {
    id: string;
    key: Date;
    data: number;
}[];
export declare const multiDateData: {
    key: string;
    data: {
        key: Date;
        id: string;
        data: number;
    }[];
}[];
export declare const nonZeroDateData: {
    key: Date;
    data: number[];
}[];
export declare const singleDateBigIntData: {
    key: Date;
    data: bigInt.BigInteger;
}[];
