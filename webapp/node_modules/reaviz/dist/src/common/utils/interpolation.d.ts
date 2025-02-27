export declare type InterpolationTypes = 'linear' | 'smooth' | 'step';
export declare type RadialInterpolationTypes = 'linear' | 'smooth';
/**
 * Helper function for interpolation.
 */
export declare function interpolate(type: InterpolationTypes | RadialInterpolationTypes): import("d3-shape").CurveFactory;
