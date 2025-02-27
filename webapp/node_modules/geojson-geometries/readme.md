<h1 align="center">
  <b>geojson-geometries</b>
</h1>
<p align="center">
  <!-- Version - npm -->
  <a href="https://www.npmjs.com/package/geojson-geometries">
    <img src="https://img.shields.io/npm/v/geojson-geometries.svg" alt="Latest version on npm" />
  </a>
  <!-- Downloads - npm -->
  <a href="https://npm-stat.com/charts.html?package=geojson-geometries">
    <img src="https://img.shields.io/npm/dt/geojson-geometries.svg" alt="Downloads on npm" />
  </a>
  <!-- License - MIT -->
  <a href="https://github.com/simonepri/geojson-geometries/tree/master/license">
    <img src="https://img.shields.io/github/license/simonepri/geojson-geometries.svg" alt="Project license" />
  </a>

  <br/>

  <!-- Lint -->
  <a href="https://github.com/simonepri/geojson-geometries/actions?query=workflow:lint+branch:master">
    <img src="https://github.com/simonepri/geojson-geometries/workflows/lint/badge.svg?branch=master" alt="Lint status" />
  </a>
  <!-- Test - macOS -->
  <a href="https://github.com/simonepri/geojson-geometries/actions?query=workflow:test-macos+branch:master">
    <img src="https://github.com/simonepri/geojson-geometries/workflows/test-macos/badge.svg?branch=master" alt="Test macOS status" />
  </a>
  <!-- Test - Ubuntu -->
  <a href="https://github.com/simonepri/geojson-geometries/actions?query=workflow:test-ubuntu+branch:master">
    <img src="https://github.com/simonepri/geojson-geometries/workflows/test-ubuntu/badge.svg?branch=master" alt="Test Ubuntu status" />
  </a>
  <!-- Test - Windows -->
  <a href="https://github.com/simonepri/geojson-geometries/actions?query=workflow:test-windows+branch:master">
    <img src="https://github.com/simonepri/geojson-geometries/workflows/test-windows/badge.svg?branch=master" alt="Test Windows status" />
  </a>

  <br/>

  <!-- Coverage - Codecov -->
  <a href="https://codecov.io/gh/simonepri/geojson-geometries">
    <img src="https://img.shields.io/codecov/c/github/simonepri/geojson-geometries/master.svg" alt="Codecov Coverage report" />
  </a>
  <!-- DM - Snyk -->
  <a href="https://snyk.io/test/github/simonepri/geojson-geometries?targetFile=package.json">
    <img src="https://snyk.io/test/github/simonepri/geojson-geometries/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" />
  </a>
  <!-- DM - David -->
  <a href="https://david-dm.org/simonepri/geojson-geometries">
    <img src="https://david-dm.org/simonepri/geojson-geometries/status.svg" alt="Dependency Status" />
  </a>

  <br/>

  <!-- Code Style - XO-Prettier -->
  <a href="https://github.com/xojs/xo">
    <img src="https://img.shields.io/badge/code_style-XO+Prettier-5ed9c7.svg" alt="XO Code Style used" />
  </a>
  <!-- Test Runner - AVA -->
  <a href="https://github.com/avajs/ava">
    <img src="https://img.shields.io/badge/test_runner-AVA-fb3170.svg" alt="AVA Test Runner used" />
  </a>
  <!-- Test Coverage - Istanbul -->
  <a href="https://github.com/istanbuljs/nyc">
    <img src="https://img.shields.io/badge/test_coverage-NYC-fec606.svg" alt="Istanbul Test Coverage used" />
  </a>
  <!-- Init - ni -->
  <a href="https://github.com/simonepri/ni">
    <img src="https://img.shields.io/badge/initialized_with-ni-e74c3c.svg" alt="NI Scaffolding System used" />
  </a>
  <!-- Release - np -->
  <a href="https://github.com/sindresorhus/np">
    <img src="https://img.shields.io/badge/released_with-np-6c8784.svg" alt="NP Release System used" />
  </a>
</p>
<p align="center">
  ⛏ Extract elementary geometries from a GeoJSON inheriting properties.

  <br/>

  <sub>
    Coded with ❤️ by <a href="#authors">Simone Primarosa</a>.
  </sub>
</p>

## Install
```bash
$ npm install --save geojson-geometries
```

## Usage
```javascript
const GeoJsonGeometries = require('geojson-geometries');

const geojson = {type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [102.0, 0.5]
    },
    properties: {prop0: 'value0'}
  }, {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [[102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]]
    },
    properties: {prop1: 'value1'}
  }, {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
      ]
    },
    properties: {prop2: 'value2'}
  }]
};

const extracted = new GeoJsonGeometries(geojson);

extracted.points
// => {
//   type: "FeatureCollection",
//   features: [{
//     type: "Feature",
//     geometry: {
//       type: "Point",
//       coordinates: [102, 0.5]
//     },
//     properties: {prop0: 'value0'}
//   }]
// }

extracted.lines
// => {
//   type: "FeatureCollection",
//   features: [{
//     type: "Feature",
//     geometry: {
//       type: "LineString",
//       coordinates: [[[102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]]]
//     },
//     properties: {prop1: 'value1'}
//   }]
// }

extracted.polygons
// => {
//   type: "FeatureCollection",
//   features: [{
//     type: "Feature",
//     geometry: {
//       type: "Polygon",
//       coordinates: [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]]
//     },
//     properties: {prop2: 'value2'}
//   }]
// }
```

## API
<a name="new_GeoJsonGeometries_new"></a>

### new GeoJsonGeometries(geoJson, [options])
Create an instance of the geometries extractor.


| Param | Type | Description |
| --- | --- | --- |
| geoJson | <code>Object</code> | The GeoJSON from which extract the geometries. |
| [options] | <code>Object</code> | Optional options. |
| options.ignorePoints | <code>boolean</code> | If true the extractor will ignore  geometries of type Point. |
| options.ignoreLines | <code>boolean</code> | If true the extractor will ignore  geometries of type LineString. |
| options.ignorePolygon | <code>boolean</code> | If true the extractor will ignore  geometries of type Polygon. |

<a name="GeoJsonGeometries+points"></a>

### geoJsonGeometries.points ⇒ <code>Array.&lt;Object&gt;</code>
Returns the list of geometries of type Point found in the GeoJSON.

**Kind**: instance property of [<code>GeoJsonGeometries</code>](#GeoJsonGeometries)  
**Returns**: <code>Array.&lt;Object&gt;</code> - A FeatureCollection of points with inherited properties if any.  

<a name="GeoJsonGeometries+lines"></a>

### geoJsonGeometries.lines ⇒ <code>Array.&lt;Object&gt;</code>
Returns the list of geometries of type LineString found in the GeoJSON.

**Kind**: instance property of [<code>GeoJsonGeometries</code>](#GeoJsonGeometries)  
**Returns**: <code>Array.&lt;Object&gt;</code> - A FeatureCollection of lines with inherited properties if any.  

<a name="GeoJsonGeometries+polygons"></a>

### geoJsonGeometries.polygons ⇒ <code>Array.&lt;Object&gt;</code>
Returns the list of geometries of type Polygon found in the GeoJSON.

**Kind**: instance property of [<code>GeoJsonGeometries</code>](#GeoJsonGeometries)  
**Returns**: <code>Array.&lt;Object&gt;</code> - A FeatureCollection of polygons with inherited properties if any.  

## Authors
- **Simone Primarosa** - *Github* ([@simonepri][github:simonepri]) • *Twitter* ([@simoneprimarosa][twitter:simoneprimarosa])

See also the list of [contributors][contributors] who participated in this project.

## License
This project is licensed under the MIT License - see the [license][license] file for details.


<!-- Links -->
[contributors]: https://github.com/simonepri/geojson-geometries-lookup/contributors

[license]: https://github.com/simonepri/geojson-geometries-lookup/tree/master/license

[github:simonepri]: https://github.com/simonepri
[twitter:simoneprimarosa]: http://twitter.com/intent/user?screen_name=simoneprimarosa
