// MapLibre GL JSの読み込み
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

//turf
import { point, multiPoint } from '@turf/helpers';
//import distance from '@turf/distance';
import bearing from '@turf/bearing';
import center from '@turf/center';

const hokkaidomapcoord = [
  [141.6499333, 42.8265148], //left-top ,
  [141.6642417, 42.8282033], //right-top ,
  [141.66590610, 42.82079423], //right-bottom ,
  [141.65157323, 42.81910078], //left-bottom ,
];
const hokkaidomapcoordTurf = multiPoint(hokkaidomapcoord);
const mapcenter = center(hokkaidomapcoordTurf);
//console.log(center);  
const point1 = point(hokkaidomapcoord[2]);
const point2 = point(hokkaidomapcoord[1]) ;
var turfbearing = bearing(point1, point2);
//console.log(bearing);


const map =  new maplibregl.Map({
  container: 'map',
  style: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json', 
  center: mapcenter.geometry.coordinates, 
  zoom: 15, 
  pitch: 0,
  bearing: turfbearing,
});

map.on('load', () => {
    //地図追加
  map.addSource('r3-1', {
      type: "image",
      url: "./hokkaido/4-Sprint_one_more_R3-1.png",
      coordinates: hokkaidomapcoord
  });

  map.addSource('r3-2', {
      type: "image",
      url: "./hokkaido/4-Sprint_one_more_R3-2.png",
      coordinates: hokkaidomapcoord
  });

  map.addSource('r3-3', {
      type: "image",
      url: "./hokkaido/4-Sprint_one_more_R3-3.png",
      coordinates: hokkaidomapcoord
  });

  map.addSource('r3-4', {
      type: "image",
      url: "./hokkaido/4-Sprint_one_more_R3-4.png",
      coordinates: hokkaidomapcoord
  });

  map.addLayer({id: "r3-1", source: "r3-1", type: "raster", paint: {}, style: {}});
  map.addLayer({id: "r3-2", source: "r3-2", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});
  map.addLayer({id: "r3-3", source: "r3-3", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});
  map.addLayer({id: "r3-4", source: "r3-4", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});

/*             const bbox = map.getBounds(hokkaidomapcoord);
  console.log(bbox);
  map.fitBounds(bbox); */

  //ルート追加
  map.addSource('route_r3-1', {
    type: 'geojson',
    data: './route/r3-1.geojson'
  });
  map.addSource('route_r3-2', {
    type: 'geojson',
    data: './route/r3-2.geojson',
  });
/*   map.addSource('m21_3', {
    type: 'geojson',
    data: './route/route_m21_3.geojson'
  }); */
  map.addLayer({
    id: 'route_r3-1',
    type: 'line',
    source: 'route_r3-1',
    //"layout": {'visibility': 'none'},
    paint: {
      'line-width': 2,
      'line-color':[
        'interpolate',
        ['linear'],
        ['get', 'standing'],
        1, '#ff1493',
        2, '#0000cd',
        3, '#ff8c00',
      ],
      'line-dasharray': [3, 3],
    },
  });
  map.addLayer({
    id: 'route_r3-2',
    type: 'line',
    source: 'route_r3-2',
    "layout": {'visibility': 'none'},
    paint: {
      'line-width': 2,
      'line-color':[
        'interpolate',
        ['linear'],
        ['get', 'standing'],
        1, '#ff1493',
        2, '#0000cd',
        3, '#ff8c00',
      ],
      'line-dasharray': [3, 3],
    },
  });
/*   map.addLayer({
    id: 'm21_3',
    type: 'line',
    source: 'm21_3',
    layout: {},
    paint: {
      'line-width': 2,
      'line-color': '#ff8c00',
      'line-dasharray': [3, 3],
    },
  }); */

  //chat gpt
  // 選択されたコースに対応する ID を持つ .legend 要素を非表示にする
  function hideAllLegends() {
    var allLegends = document.querySelectorAll('.legend');
    allLegends.forEach(function(legend) {
        legend.style.display = 'none';
    });
  }

  // 選択されたコースに対応する ID を持つ .legend 要素を表示する
  function showSelectedLegend(selectedCourse) {
    var legendToShow = document.getElementById(selectedCourse);
    if (legendToShow) {
        legendToShow.style.display = 'block'; // もしくは 'inline-block' など、適切な表示方法に応じて設定
    }
  }

  //初期値
  let selectedCourse = "r3-1";
  let visibleMap = "r3-1";
  let visibleRoute = "route_" + visibleMap;
  //console.log(visibleRoute);


  //display visibleLayer's legend
  hideAllLegends()
  showSelectedLegend(visibleMap); 

  //event lister, detecting chaning pul-down
  document.getElementById(('courseSelect')).addEventListener('change', function() {
    //turn off visible map
    map.setLayoutProperty(visibleMap, 'visibility', 'none');

    //turn off visible route
    map.setLayoutProperty(visibleRoute, 'visibility', 'none');
    
    //store selected value
    selectedCourse = this.value;
    visibleRoute = "route_"+selectedCourse;

    //make selected map visible
    map.setLayoutProperty(selectedCourse, 'visibility', 'visible');
    map.setLayoutProperty(visibleRoute, 'visibility', 'visible');
  
    visibleMap = selectedCourse;    

    
    hideAllLegends(); // すべての .legend 要素を非表示にする
    showSelectedLegend(selectedCourse); // 選択されたコースに対応する .legend 要素を表示する
  })

});

