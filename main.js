// MapLibre GL JSの読み込み
import maplibregl, { LngLatBounds } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

//turf
import { point,lineString, lineStrings, multiPoint } from '@turf/helpers';
//import distance from '@turf/distance';
import bearing from '@turf/bearing';
import center from '@turf/center';
import bbox from '@turf/bbox';

const mapcoord = [
  [141.6499333, 42.8265148], //left-top ,
  [141.6642417, 42.8282033], //right-top ,
  [141.66590610, 42.82079423], //right-bottom ,
  [141.65157323, 42.81910078], //left-bottom ,
];
const mapcoordTurf = multiPoint(mapcoord);
const mapcenter = center(mapcoordTurf);
const point1 = point(mapcoord[2]);
const point2 = point(mapcoord[1]) ;
var turfbearing = bearing(point1, point2);

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

//courseCoordinates
const courseCoordinates = {
  r3_1: [
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
  ],
  r3_2: [
    [ 141.656646563798347, 42.824220461474532 ],
    [ 141.656989414641998, 42.823103198795543 ],
    [ 141.660565479138029, 42.822460206561665 ],
    [ 141.661042866388698, 42.823510635957675 ],
    [ 141.660490266648964, 42.824072336526058 ],
    [ 141.660076903650776, 42.824975596067155 ],
    [ 141.657769112185292, 42.825487644591206 ],
    [ 141.657713994653591, 42.824477018428922 ] ,
    [141.659559411269953, 42.823903574311494],
    [141.659763550276182, 42.823204354574443],
    [141.658738772464943, 42.822853993102598],
    [141.65815901768724, 42.823425949693984],
    [141.66156813909123, 42.823183392832824],
    [141.659751301935813, 42.822288020376874],
    [141.658238631899707, 42.824232968449479],
    [ 141.658222953016548, 42.8252819556525 ],
    [ 141.656586126644243, 42.824721067444926 ] 
  ],
  r3_3: [
    [141.656646563798347, 42.824220461474532],
    [141.656646563798347, 42.824220461474532],
    [141.660565479138029, 42.822460206561665],
    [141.661042866388698, 42.823510635957675],
    [141.660490266648964, 42.824072336526058],
    [141.660076903650776, 42.824975596067155],
    [141.657769112185292, 42.825487644591206],
    [141.657713994653591, 42.824477018428922],
    [141.659559411269953, 42.823903574311494],
    [141.659763550276182, 42.823204354574443],
    [141.658738772464943, 42.822853993102598],
  ],
  r3_4: [
    [141.656646563798347, 42.824220461474532],
    [141.656646563798347, 42.824220461474532],
    [141.660565479138029, 42.822460206561665],
    [141.661042866388698, 42.823510635957675],
    [141.660490266648964, 42.824072336526058],
    [141.660076903650776, 42.824975596067155],
  ]
};

map.on('load', () => {
  //地図追加
  map.addSource('r3_1', {
    type: "image",
    url: "./hokkaido/4-Sprint_one_more_R3-1.png",
    coordinates: mapcoord,
  });

  map.addSource('r3_2', {
    type: "image",
    url: "./hokkaido/4-Sprint_one_more_R3-2.png",
    coordinates: mapcoord
  });

  map.addSource('r3_3', {
    type: "image",
    url: "./hokkaido/4-Sprint_one_more_R3-3.png",
    coordinates: mapcoord
  });

  map.addSource('r3_4', {
    type: "image",
    url: "./hokkaido/4-Sprint_one_more_R3-4.png",
    coordinates: mapcoord
  });

  map.addLayer({id: "r3_1", source: "r3_1", type: "raster", paint: {}, style: {}});
  map.addLayer({id: "r3_2", source: "r3_2", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});
  map.addLayer({id: "r3_3", source: "r3_3", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});
  map.addLayer({id: "r3_4", source: "r3_4", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});

  //ルート追加
  map.addSource('route_r3_1', {
    type: 'geojson',
    data: './route/r3-1.geojson'
  });
  map.addSource('route_r3_2', {
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
    id: 'route_r3_1',
    type: 'line',
    source: 'route_r3_1',
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
    id: 'route_r3_2',
    type: 'line',
    source: 'route_r3_2',
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

  //chat gpt
  // legend all off
  function hideAllLegends() {
    var allLegends = document.querySelectorAll('.legend');
    allLegends.forEach(function(legend) {
        legend.style.display = 'none';
    });
  }

  // show selected legend
  function showSelectedLegend(selectedCourse) {
    var legendToShow = document.getElementById(selectedCourse);
    if (legendToShow) {
        legendToShow.style.display = 'block'; // もしくは 'inline-block' など、適切な表示方法に応じて設定
    }
  }

  //chatGPT
  //function to create options depending on 
  function updateSecondDropdown(targetCourseCoordinates) {
    length = targetCourseCoordinates.length-3;
    var optionsHTML = "<option value='99'>All</option>";
    optionsHTML += "<option value='0'>△-1</option>";
    for (var i = 1; i <= length; i++) {
      optionsHTML += "<option value='" + i + "'>" + i + "-" + (i + 1) + "</option>";
    }
    optionsHTML += "<option value='"+i+"'>"+ i + "-◎</option>";
    secondDropdown.innerHTML = "<label><b>Leg</b></label><br><select id= 'leg'>" + optionsHTML + "</select>";

    document.getElementById(('leg')).addEventListener('change', function() {
      //get value
      let selectedValue = parseInt(this.value);
      if (selectedValue === 99) {
        // fit map
        map.fitBounds(
          [mapcoord[3],mapcoord[1]], {bearing: turfbearing, zoom: 15}
        );
        } else {
          // fit leg
          console.log(targetCourseCoordinates[selectedValue]);
          console.log(targetCourseCoordinates[selectedValue+1]);
          let legstart = targetCourseCoordinates[selectedValue];
          let legend = targetCourseCoordinates[selectedValue+1];
          //console.log(legstart, legend);
          let legBearing = bearing(legstart,legend);
          let mulpoints = multiPoint([legstart,legend]);
          console.log(mulpoints);
          let legBbox = bbox(mulpoints);  //get geojson, infinity :D
          console.log(legBbox);
          let sw = [legBbox[0], legBbox[1]];
          let ne = [legBbox[2], legBbox[3]];
          let v3 = [sw, ne];
          console.log(v3);
          map.fitBounds(v3, {
            padding: {top: 100, bottom:100}, //, left: 40, right: 40
            bearing: legBearing}
          ); 
        }
      }
    )
  };

  //reset
  let selectedCourse = "r3_1";
  let visibleMap = "r3_1";
  let visibleRoute = "route_" + visibleMap;
  //console.log(visibleRoute);
  let targetCourseCoordinates = courseCoordinates[visibleMap];

  hideAllLegends()
  showSelectedLegend(visibleMap); 
  updateSecondDropdown(targetCourseCoordinates);

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
    
    hideAllLegends(); // hide all legend
    showSelectedLegend(selectedCourse); //show selected legend

    
    //LEG
    targetCourseCoordinates = courseCoordinates[selectedCourse];
    //console.log(targetCourseCoordinates);
    updateSecondDropdown(targetCourseCoordinates); //creating pul-down&event listner
  });
});

