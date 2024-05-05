// MapLibre GL JSの読み込み
import maplibregl, { LngLatBounds } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

//turf
import { point, multiPoint, lineString } from '@turf/helpers';
//import distance from '@turf/distance';
import bearing from '@turf/bearing';
import center from '@turf/center';
import bbox from '@turf/bbox';

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
  attributionControl: false,
});

//著作権表示
map.addControl(
  new maplibregl.AttributionControl({
    compact: true,
    customAttribution:
      '<a href="https://maplibre.org/" target="_blank">MapLibre</a> | Maps are designed by <a href="https://twitter.com/miyakawa_to" target="_blank">宮川俊哉</a>, published under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">"CC BY-SA 4.0</a>" ',
  })
);

//フルスクリーン
//map.addControl(new maplibregl.FullscreenControl());
//
//map.addControl(new FullscreenControl({container: document.querySelector('body')}));

//array of course 
/* const course_r3_1 = {
  "type": "FeatureCollection",
  "name": "course_r3_1",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
  { "type": "Feature", "properties": { "ID": 0 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.656646563798347, 42.824220461474532 ] ] } },
  { "type": "Feature", "properties": { "ID": 1 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.656989414641998, 42.823103198795543 ] ] } },
  { "type": "Feature", "properties": { "ID": 2 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.660565479138029, 42.822460206561665 ] ] } },
  { "type": "Feature", "properties": { "ID": 3 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.661042866388698, 42.823510635957675 ] ] } },
  { "type": "Feature", "properties": { "ID": 4 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.660490266648964, 42.824072336526058 ] ] } },
  { "type": "Feature", "properties": { "ID": 5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659102139895964, 42.825917342857366 ] ] } },
  { "type": "Feature", "properties": { "ID": 6 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.657769112185292, 42.825487644591206 ] ] } },
  { "type": "Feature", "properties": { "ID": 7 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.657713994653591, 42.824477018428922 ] ] } },
  { "type": "Feature", "properties": { "ID": 8 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659559411269953, 42.823903574311494 ] ] } },
  { "type": "Feature", "properties": { "ID": 9 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.658738772464943, 42.822853993102598 ] ] } },
  { "type": "Feature", "properties": { "ID": 10 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.65815901768724, 42.823425949693984 ] ] } },
  { "type": "Feature", "properties": { "ID": 11 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.66156813909123, 42.823183392832824 ] ] } },
  { "type": "Feature", "properties": { "ID": 12 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659751301935813, 42.822288020376874 ] ] } },
  { "type": "Feature", "properties": { "ID": 13 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659763550276182, 42.823204354574443 ] ] } },
  { "type": "Feature", "properties": { "ID": 14 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.658238631899707, 42.824232968449479 ] ] } },
  { "type": "Feature", "properties": { "ID": 15 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.660076903650776, 42.824975596067155 ] ] } },
  { "type": "Feature", "properties": { "ID": 16 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659143988392316, 42.825342414885135 ] ] } },
  { "type": "Feature", "properties": { "ID": 17 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.657974271886644, 42.825119329414363 ] ] } },
  { "type": "Feature", "properties": { "ID": 99 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.656586126644243, 42.824721067444926 ] ] } }
  ]
}; */
const courseCoordinates_r3_1 = [
  [141.656646563798347, 42.824220461474532],
  [141.656989414641998, 42.823103198795543],
  [141.660565479138029, 42.822460206561665],
  [141.661042866388698, 42.823510635957675],
  [141.660490266648964, 42.824072336526058],
  [141.659102139895964, 42.825917342857366],
  [141.657769112185292, 42.825487644591206],
  [141.657713994653591, 42.824477018428922],
  [141.659559411269953, 42.823903574311494],
  [141.658738772464943, 42.822853993102598],
  [141.65815901768724, 42.823425949693984],
  [141.66156813909123, 42.823183392832824],
  [141.659751301935813, 42.822288020376874],
  [141.659763550276182, 42.823204354574443],
  [141.658238631899707, 42.824232968449479],
  [141.660076903650776, 42.824975596067155],
  [141.659143988392316, 42.825342414885135],
  [141.657974271886644, 42.825119329414363],
  [141.656586126644243, 42.824721067444926]
];


const course_r3_2 ={
  "type": "FeatureCollection",
  "name": "course_r3_2",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
  { "type": "Feature", "properties": { "ID": 0 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.656646563798347, 42.824220461474532 ] ] } },
  { "type": "Feature", "properties": { "ID": 1 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.656646563798347, 42.824220461474532 ] ] } },
  { "type": "Feature", "properties": { "ID": 2 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.660565479138029, 42.822460206561665 ] ] } },
  { "type": "Feature", "properties": { "ID": 3 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.661042866388698, 42.823510635957675 ] ] } },
  { "type": "Feature", "properties": { "ID": 4 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.660490266648964, 42.824072336526058 ] ] } },
  { "type": "Feature", "properties": { "ID": 5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.660076903650776, 42.824975596067155 ] ] } },
  { "type": "Feature", "properties": { "ID": 6 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.657769112185292, 42.825487644591206 ] ] } },
  { "type": "Feature", "properties": { "ID": 7 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.657713994653591, 42.824477018428922 ] ] } },
  { "type": "Feature", "properties": { "ID": 8 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659559411269953, 42.823903574311494 ] ] } },
  { "type": "Feature", "properties": { "ID": 9 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659763550276182, 42.823204354574443 ] ] } },
  { "type": "Feature", "properties": { "ID": 10 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.658738772464943, 42.822853993102598 ] ] } },
  { "type": "Feature", "properties": { "ID": 11 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.65815901768724, 42.823425949693984 ] ] } },
  { "type": "Feature", "properties": { "ID": 12 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.66156813909123, 42.823183392832824 ] ] } },
  { "type": "Feature", "properties": { "ID": 13 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.659751301935813, 42.822288020376874 ] ] } },
  { "type": "Feature", "properties": { "ID": 14 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.658238631899707, 42.824232968449479 ] ] } },
  { "type": "Feature", "properties": { "ID": 99 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 141.656586126644243, 42.824721067444926 ] ] } }
  ]
};

//console.log(course_r3_1.features[0].geometry.coordinates);
//console.log(course_r3_2.features[0].geometry.coordinates);

map.on('load', () => {
    //地図追加
  map.addSource('r3-1', {
      type: "image",
      url: "./hokkaido/4-Sprint_one_more_R3-1.png",
      coordinates: hokkaidomapcoord,
      //attribution: '宮川俊哉'
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
  //map.addLayer({id: 'outline', type: 'line', source: 'route_r3-1', paint: {'line-width': 0.5, 'line-color': 'black', 'line-gap-width': 2.1,'line-dasharray': [1, 1]}});
  //点線じゃないからダメだった。
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
        3, '#d2691e',
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

  //chatGPT
  //leg dropdown
  //possible to optimize
  function updateSecondDropdown() {
    var secondDropdown = document.getElementById("secondDropdown");
    var optionsHTML = "<option value='blank'>全体</option>";

    if (selectedCourse === "r3-1") {
      optionsHTML += "<option value='0'>△-1</option>";
      for (var i = 1; i <= 16; i++) {
        optionsHTML += "<option value='" + i + "'>" + i + "-" + (i + 1) + "</option>";
      }
      //console.log(i); i=17
      optionsHTML += "<option value='99'>"+ i + "- ◎</option>";
      //optionsHTML += "<option value='13'>13-◎</option>";
    } else if (selectedCourse === "r3-2") {
      optionsHTML += "<option value='0'>△-1</option>";
        for (var i = 1; i <= 14; i++) {
            optionsHTML += "<option value='" + i + "'>" + i + "-" + (i + 1) + "</option>";
        }
        optionsHTML += "<option value='99'>"+ i + "- ◎</option>";
    } else if (selectedCourse === "r3-3") {
      optionsHTML += "<option value='0'>△-1</option>";
        for (var i = 1; i <= 12; i++) {
            optionsHTML += "<option value='" + i + "'>" + i + "-" + (i + 1) + "</option>";
        }
        optionsHTML += "<option value='99'>"+ i + "- ◎</option>";
    } else if (selectedCourse === "r3-4") {
      optionsHTML += "<option value='0'>△-1</option>";
        for (var i = 1; i <= 8; i++) {
            optionsHTML += "<option value='" + i + "'>" + i + "-" + (i + 1) + "</option>";
        }
        optionsHTML += "<option value='99'>"+ i + "- ◎</option>";
    }
    secondDropdown.innerHTML = "<label><b>表示</b></label><br><select>" + optionsHTML + "</select>";
  }

  //able to get "selectedCourse"&"option value", then change map view

  //初期値
  let selectedCourse = "r3-1";
  let visibleMap = "r3-1";
  let visibleRoute = "route_" + visibleMap;
  //console.log(visibleRoute);


  //display visibleLayer's legend
  hideAllLegends()
  showSelectedLegend(visibleMap); 
  updateSecondDropdown();

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
    updateSecondDropdown(); //プルダウンメニュー生成
  });

  //test
  document.getElementById(('testselection')).addEventListener('change', function() {
    let selectedLeg = parseInt(this.value);
    const legCoordinates = [courseCoordinates_r3_1[selectedLeg], courseCoordinates_r3_1[selectedLeg+1]];
    //console.log(legCoordinates);
    let legstart = point(legCoordinates[0]);
    let legend = point(legCoordinates[1]);
    let legBearing = bearing(legstart,legend);
    //map.setBearing(legBearing);
    //console.log(legBearing);
    const line = lineString(legCoordinates);
    //console.log(line);
    let legBbox = bbox(line);  //get geojson, infinity :D
    //console.log(legBbox);
    let sw = [legBbox[0], legBbox[1]];
    let ne = [legBbox[2], legBbox[3]];
    let v3 = [sw, ne];
    //console.log(v3);
    map.fitBounds(v3, {
      padding: {top: 100, bottom:100}, //, left: 40, right: 40
      bearing: legBearing});
  });
/*   //select arrays for the selected course
  const selectedcouse = "course_"+visibleMap;

  //put eventlistner to get the value of pull-down
  document.getElementById(('secondDropdown')).addEventListener('change', function() {
    let selectedLeg = secondDropdown.value; //"blank", 0-?, 99
    console.log(selectedLeg);

    //change veiw
    //get bbox from turf
    selectedcouse.features[selectedLeg].geometry.coordinates;
    map.fitBounds
  
    //レッグを選択する

  }) */
  
});

