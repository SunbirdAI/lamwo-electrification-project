'use strict';

const POINT = 'Point';
const MULTI_POINT = 'MultiPoint';
const LINE_STRING = 'LineString';
const MULTI_LINE_STRING = 'MultiLineString';
const POLYGON = 'Polygon';
const MULTI_POLYGON = 'MultiPolygon';
const GEOMETRY_COLLECTION = 'GeometryCollection';
const FEATURE = 'Feature';
const FEATURE_COLLECTION = 'FeatureCollection';

class GeoJsonGeometries {
  /**
   * Create an instance of the geometries extractor.
   * @public
   * @param  {Object} geoJson The GeoJSON from which extract the geometries.
   * @param  {Object} [options] Optional options.
   * @param  {boolean} options.ignorePoints If true the extractor will ignore
   *  geometries of type Point.
   * @param  {boolean} options.ignoreLines If true the extractor will ignore
   *  geometries of type LineString.
   * @param  {boolean} options.ignorePolygon If true the extractor will ignore
   *  geometries of type Polygon.
   */
  constructor(geoJson, options) {
    options = typeof options === 'object' ? options : {};

    this.pointsList = options.ignorePoints === true ? undefined : [];
    this.linesList = options.ignoreLines === true ? undefined : [];
    this.polygonsList = options.ignorePolygons === true ? undefined : [];

    this._loadGeneric(geoJson);
  }

  /**
   * Returns the list of geometries of type Point found in the GeoJSON.
   * @public
   * @return {Object[]} A FeatureCollection of points with inherited properties if any.
   */
  get points() {
    return {type: FEATURE_COLLECTION, features: this.pointsList || []};
  }

  /**
   * Returns the list of geometries of type LineString found in the GeoJSON.
   * @public
   * @return {Object[]} A FeatureCollection of lines with inherited properties if any.
   */
  get lines() {
    return {type: FEATURE_COLLECTION, features: this.linesList || []};
  }

  /**
   * Returns the list of geometries of type Polygon found in the GeoJSON.
   * @public
   * @return {Object[]} A FeatureCollection of polygons with inherited properties if any.
   */
  get polygons() {
    return {type: FEATURE_COLLECTION, features: this.polygonsList || []};
  }

  _loadGeneric(geoJson, properties) {
    if (this.pointsList !== undefined) {
      switch (geoJson.type) {
        case POINT: {
          return this._loadPoint(geoJson.coordinates, properties);
        }

        case MULTI_POINT: {
          return geoJson.coordinates.forEach(coordinates =>
            this._loadPoint(coordinates, properties)
          );
        }

        default:
          break;
      }
    }

    if (this.linesList !== undefined) {
      switch (geoJson.type) {
        case LINE_STRING: {
          return this._loadLine(geoJson.coordinates, properties);
        }

        case MULTI_LINE_STRING: {
          return geoJson.coordinates.forEach(coordinates =>
            this._loadLine(coordinates, properties)
          );
        }

        default:
          break;
      }
    }

    if (this.polygonsList !== undefined) {
      switch (geoJson.type) {
        case POLYGON: {
          return this._loadPolygon(geoJson.coordinates, properties);
        }

        case MULTI_POLYGON: {
          return geoJson.coordinates.forEach(coordinates =>
            this._loadPolygon(coordinates, properties)
          );
        }

        default:
          break;
      }
    }

    switch (geoJson.type) {
      case FEATURE: {
        return this._loadGeneric(geoJson.geometry, geoJson.properties);
      }

      case FEATURE_COLLECTION: {
        return geoJson.features.forEach(feature =>
          this._loadGeneric(feature.geometry, feature.properties)
        );
      }

      case GEOMETRY_COLLECTION: {
        return geoJson.geometries.forEach(geometry =>
          this._loadGeneric(geometry, properties)
        );
      }

      default:
        break;
    }
  }

  _loadPoint(coordinates, properties) {
    this.pointsList.push({
      type: FEATURE,
      geometry: {type: POINT, coordinates},
      properties
    });
  }

  _loadLine(coordinates, properties) {
    this.linesList.push({
      type: FEATURE,
      geometry: {type: LINE_STRING, coordinates},
      properties
    });
  }

  _loadPolygon(coordinates, properties) {
    this.polygonsList.push({
      type: FEATURE,
      geometry: {type: POLYGON, coordinates},
      properties
    });
  }
}

module.exports = GeoJsonGeometries;
