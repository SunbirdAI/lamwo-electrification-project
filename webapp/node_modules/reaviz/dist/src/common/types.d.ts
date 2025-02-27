/**
 * branch between showing something and providing a spec,
 * or not showing it
 */
export declare type Visible<T> = {
    show: true;
} & T;
export declare type Invisible<T> = {
    show: false;
} & Partial<T>;
export declare type Shown<T> = Visible<T> | Invisible<T>;
