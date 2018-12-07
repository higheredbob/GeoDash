
config = {
    hoverProperty: "pickuptime",
    hoverPropertyTwo: 'dist4'
};
$('#geolink').hide();
$('#tablelink').hide();
$('#functionlink').hide();
$('#menuWrangle').hide();
$('#animlink').hide();

$(document).ready(function(){
var mapboxOSM = L.tileLayer("https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token={access_token}", {
  maxZoom: 19,
  access_token: 'pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ',
  subdomains: ["a", "b", "c", "d"],
  attribution: 'Basemap <a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>'
});

var  mapboxDark = L.tileLayer("https://{s}.tiles.mapbox.com/v3/mapbox.world-dark/{z}/{x}/{y}.png", {
  attribution: 'Basemap <a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>'
});

var mapboxSat = L.tileLayer("https://{s}.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token={access_token}", {
  maxZoom: 19,
  access_token: 'pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ',
  subdomains: ["a", "b", "c", "d"],
  attribution: 'Basemap <a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>'
});
var mapboxStyled = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp0uuubn0lks2smif2xgf4cy/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqcDFqb3owcjAxdHUzd2xieW1mcnFxZzQifQ.SglahG2gZ66A7orjOxzWKg', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var mapboxBluebox = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp1ep6bn14452smi9uk1nvon/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqcDFqb3owcjAxdHUzd2xieW1mcnFxZzQifQ.SglahG2gZ66A7orjOxzWKg', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var mapboxGreybox = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp2q1xgr11822rnsd5oael0q/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var mapboxDecimal = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp1ep6bn14452smi9uk1nvon/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var OSM = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });

var OSM_hot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
});

var OSM_topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var open_grey = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
  maxZoom: 19,
  attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var hyda_street = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var stamen_terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png'
});

var esri_street = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var esri_delohme = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
  minZoom: 1,
  maxZoom: 18
});

var esri_satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var carto_dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
});

var hike_bike = L.tileLayer('http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});



function getColor(n) {
    return n > 3.4 ? '#94f0ff' :
           n > 2.5 ? '#7fd5f0' :
           n > 1.75 ? '#71c3e6' :
           n > 1.2 ? '#63b1dc' :
           n > 0.60 ? '#559fd2' :
           n > 0.25 ? '#478dc8' :
           n > 0.12 ? '#397bbe' :
           n > 0.08 ? '#2b69b4' :
           n > 0.04 ? '#164ea5' :
           n > 0.02 ? '#013396' :
                    '#002588';
}
function getColorR(n) {
    return n > 3.4 ? '#ff7272' :
           n > 2.5 ? '#f06363' :
           n > 1.75 ? '#e65959' :
           n > 1.2 ? '#dc4f4f' :
           n > 0.60 ? '#d24545' :
           n > 0.25 ? '#c83b3b' :
           n > 0.12 ? '#be3131' :
           n > 0.08 ? '#af2222' :
           n > 0.04 ? '#a51818' :
           n > 0.02 ? '#960909' :
                    '#8c0303';
}
function getColorO(n) {
    return n > 3.4 ? '#ffd487' :
           n > 2.5 ? '#fdca7b' :
           n > 1.75 ? '#fbc06f' :
           n > 1.2 ? '#f9b663' :
           n > 0.60 ? '#f7ac57' :
           n > 0.25 ? '#f5a24b' :
           n > 0.12 ? '#f3983f' :
           n > 0.08 ? '#f0892d' :
           n > 0.04 ? '#ed7a1b' :
           n > 0.02 ? '#ea6b09' :
                    '#ee6700';
}


highlightLayer = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            color: '#536dfe',
            weight: 2,
            opacity: 1,
            fillColor: '#536dfe',
            fillOpacity: 1,
            clickable: false
        });
    },
    style: function (feature) {
        return {
            color: '#536dfe',
            weight: 2,
            opacity: 1,
            fillColor: '#536dfe',
            fillOpacity: 0.5,
            clickable: false
        };
    }
});
highlightLayerTwo = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            color: '#536dfe',
            weight: 2,
            opacity: 1,
            fillColor: '#536dfe',
            fillOpacity: 1,
            clickable: false
        });
    },
    style: function (feature) {
        return {
            color: '#536dfe',
            weight: 2,
            opacity: 1,
            fillColor: '#536dfe',
            fillOpacity: 0.5,
            clickable: false
        };
    }
});
featureLayer = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            weight: 2,
            fillColor: getColor(feature.properties.dist4),
            color: getColor(feature.properties.dist4),
            opacity: 1,
            fillOpacity: 1
        });
    },
    onEachFeature: function(feature, layer) {
        //console.log(layer);
        layer.on({
            mouseover: function (e) {

                $(".info-control").html(feature.properties[config.hoverProperty]);
                $('.info-control').html(["Pickup: "+feature.properties[config.hoverProperty]+"<br />","distance: "+ feature.properties[config.hoverPropertyTwo]]);
                $('.info-control').show();
            },
            mouseout: function (e) {

                $('.info-control').hide();
            },
            click: function(e) {
                identifyFeature(L.stamp(layer));
                highlightLayer.clearLayers();
                highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
            }
        });
    }

});
featureLayerAlt = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            weight: 2,
            fillColor: getColorR(feature.properties.dist4),
            color: getColorR(feature.properties.dist4),
            opacity: 1,
            fillOpacity: 1
        });
    },
    onEachFeature: function(feature, layer) {
        //console.log(layer);
        layer.on({
            mouseover: function (e) {

                $(".info-control").html(feature.properties[config.hoverProperty]);
                $('.info-control').html(["Pickup: "+feature.properties[config.hoverProperty]+"<br />","distance: "+ feature.properties[config.hoverPropertyTwo]]);
                $('.info-control').show();
            },
            mouseout: function (e) {

                $('.info-control').hide();
            },
            click: function(e) {
                identifyFeature(L.stamp(layer));
                highlightLayer.clearLayers();
                highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
            }
        });
    }

});
featureLayerAlt2 = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            weight: 2,
            fillColor: getColorO(feature.properties.dist4),
            color: getColorO(feature.properties.dist4),
            opacity: 1,
            fillOpacity: 1
        });
    },
    onEachFeature: function(feature, layer) {
        //console.log(layer);
        layer.on({
            mouseover: function (e) {

                $(".info-control").html(feature.properties[config.hoverProperty]);
                $('.info-control').html(["Pickup: "+feature.properties[config.hoverProperty]+"<br />","distance: "+ feature.properties[config.hoverPropertyTwo]]);
                $('.info-control').show();
            },
            mouseout: function (e) {

                $('.info-control').hide();
            },
            click: function(e) {
                identifyFeature(L.stamp(layer));
                highlightLayer.clearLayers();
                highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
            }
        });
    }

});
featureLayerTwo = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            weight: 2,
            fillColor: getColor(feature.properties.dist4),
            color: getColor(feature.properties.dist4),
            opacity: 1,
            fillOpacity: 1
        });
    },
    onEachFeature: function(feature, layer) {
        layer.on({
            mouseover: function (e) {
                $('.info-control2').html(['PoI: '+feature.properties.name]+'<br />','type: '+feature.properties.bus)
                $(".info-control2").html(["Pickup: "+feature.properties[config.hoverProperty]+"<br />","distance: "+ feature.properties[config.hoverPropertyTwo]]);
                $('.info-control2').show();
            },
            mouseout: function (e) {

                $('.info-control2').hide();
            },
            click: function(e) {
                identifyFeatureTwo(L.stamp(layer));
                highlightLayerTwo.clearLayers();
                highlightLayerTwo.addData(featureLayerTwo.getLayer(L.stamp(layer)).toGeoJSON());
            }
        });
    }

});

var baseLayers = {
  "Street Map": mapboxOSM,
  "Dark Map": mapboxDark,
  "Aerial Imagery": mapboxSat,
  "bluebox": mapboxBluebox,
  "decimal": mapboxDecimal,
  "greybox": mapboxGreybox,
  "styled": mapboxStyled,
  "osm street": OSM,
  "osm hot": OSM_hot,
  "osm topo": OSM_topo,
  "openmaps": open_grey,
  "hyda": hyda_street,
  "stamen terrain": stamen_terrain,
  "esri street": esri_street,
  "esri delohme": esri_delohme,
  "esri satellite": esri_satellite,
  "carto dark": carto_dark,
  "hike bike": hike_bike
};

var TlIcon = L.Icon.Default.extend({
  options: {
        iconUrl: 'maker.svg'
  }
});
var tlicon = new TlIcon();
L.Map.include({
  'clearLayers': function (){
    this.eachLayer(function (layer) {
      this.removeLayer(layer);
    }, this);
  }
});

var overlayLayers = {
  "<span id='layer-name'>GeoJSON Layer</span>": featureLayer
};
var overlayLayersR = {
   "<span id='layer-name'>GeoJSON Red</span>": featureLayerAlt
};
var overlayLayersO = {
   "<span id='layer-name'>GeoJSON Orange</span>": featureLayerAlt2
};
var overlayLayersTwo = {
  "<span id='layer-name2'>GeoJSON Layer2</span>": featureLayerTwo
};

var map = L.map('map', {
    layers: [mapboxGreybox, featureLayer, highlightLayer],
    center: [33.44332, -111.6743],
    zoom: 12,
    maxZoom: 19,
    zoomControl: false
});

var maptwo = L.map('maptwo', {
    layers: [mapboxBluebox, featureLayerTwo, highlightLayerTwo],
    center: [33.44332, -111.6743],
    zoom: 12,
    maxZoom: 19,
    zoomControl: false
});

layerControl = L.control.layers(baseLayers, overlayLayers);
layerControlR = L.control.layers( overlayLayersR);
layerControlO = L.control.layers( overlayLayersO);
layerControlTwo = L.control.layers(baseLayers, overlayLayersTwo);
L.control.zoom({zoomInText: '', zoomOutText: '',position: 'topleft'}).addTo(map);
L.control.zoom({zoomInText: '', zoomOutText: '',position: 'topleft'}).addTo(maptwo);
layerControl.addTo(map);
layerControlTwo.addTo(maptwo);
layerControlR.addTo(map);
layerControlO.addTo(map);
setHeights();

 $(window).resize(function(){
        setTextareaWidth();
        setHeights();
    });



function setTextareaWidth() {
        var widthMaps = $('#map').width() - 2;
        $('#geoInput').width(widthMaps);
        $('#geoOutput').width(widthMaps);
    }


function setHeights() {
        var w = $(window).width();

        if (w > 770) {
            var viewportHeight = $(window).height();
            var navbarHeight = $('.navbar').height();
            var availableHeight = viewportHeight - navbarHeight - 8 - 17 - 21 - 34;
            var equalParts = Math.floor(availableHeight / 2);

            $('#map').css('height',equalParts + 160);
            $('#geoInput').css('height',equalParts);
            $('#maptwo').css('height',equalParts + 160);
            $('#geoOutput').css('height',equalParts);
            $('#chloromap').css('height', equalParts);
            // add margin, in case navbar is higher
            if (navbarHeight > 50) {
                $('body').css('margin-top','100px');
            } else {
                $('body').css('margin-top','8px');
            }
        } else {
            $('.buttonsAlign').css('margin-bottom','15px');
        }
        map.invalidateSize();
        maptwo.invalidateSize();
    }

 setTextareaWidth();

function identifyFeatureTwo(id) {
  var featureProperties = featureLayerTwo.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
      value = "<a href='" + value + "' target='_blank'>" + value + "</a>";
    }
    content += "<tr><th>" + key + "</th><td>" + value + "</td></tr>";

    });

  content += "<table>";
  $("#feature-info2").html(content);
  $("#featureModal2").modal("show");
}
function identifyFeature(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
      value = "<a href='" + value + "' target='_blank'>" + value + "</a>";
    }
    //console.log(key);
    //console.log(value);
    content += "<tr><th>" + key + "</th><td>" + value + "</td></tr>";
  });
  content += "<table>";
  $("#feature-info").html(content);
  $("#featureModal").modal("show");
}
map.on("click", function(e) {
    highlightLayer.clearLayers();
});
maptwo.on('click', function(e) {
  highlightLayerTwo.clearLayers();
});
featuresOut = L.geoJson();
featuresIn = L.geoJson();


function identifyData(ray, config){
  if(config.addProperties != ""){
    f = config.addProperties;
    props = ray.f;
  } else {
    f = {};
    props = ray.f;
  }
 var  redef = {
              "type": "FeeatureCollection",
              "features": [
              {
                "type": "Feature",
                "properties" : props,
                "type": config.geoType,
                "coordinates": [
                  [
                    ray.geometry.coordinates,
                  ]
                ]
              }
            ]
          };
var newray = [];
for(var i = 0; i < redef.features.length; i++){
    f = redef.features[i];
  }
if(config.geoType == "Polygon") {

  newray.push(turf.featureCollection(turf.polygon(f.geometry.coordinates, f.properties)));
} else if(config.geoType == "multiPolygon") {
  newray.push(turf.featureCollection(turf.multiPolygon(f.geometry.coordinates, f.properties)));
} else if(config.geoType == "lineString") {
  newray.push(turf.featureCollection(turf.lineString(f.geometry.coordinates, f.properties)));
} else if(config.geoType == "multiLineString") {
  newray.push(turf.featureCollection(turf.multiLineString(f.geometry.coordinates, f.properties)));
}
return newray;
}
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info-control'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = "";
};
var infoTwo = L.control();

infoTwo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info-control2'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
infoTwo.update = function (props) {
    this._div.innerHTML = "";
};
info.addTo(map);
infoTwo.addTo(maptwo);
//info.addTo(maptwo);
$(".info-control").hide();
$(".info-control2").hide();

custBar = L.control.custom({
            position: 'bottomleft',
            content : '<div class="btn-toolbar" role="toolbar">'+
                        '<div class="btn-group mr-2" role="group" aria-label="first group">'+
                      '    <button id="lyrbtn" class="btn btn-sm btn-danger type="button">'+
                      '       <i class="material-icons" >layers</i>'+
                      '    </button>'+
                      '    <button id="drawbtn" class="btn btn-sm btn-info" type="button" id="styleditorbtn">'+
                      '       <i class="mdi mdi-marker" ></i>'+
                      '    </button>'+
                      //'    <button class="btn btn-sm btn-primary" type="button">'+
                      //'       <i class="material-icons">local_offer</i>'+
                      //'    </button>'+
                      //'    <button class="btn btn-sm btn-rose" type="button">'+
                      //'       <i class="material-icons">location_history</i>'+
                      //'    </button>'+
                      //'    <button class="btn btn-sm btn-success" type="button">'+
                      //'       <i class="material-icons">my_location</i>'+
                      //'    </button>'+
                      //'    <button class="btn btn-sm btn-warning" type="button">'+
                      //'       <i class="material-icons">map</i>'+
                      //'    </button>'+
                      '  </div>'+
                      '</div>',
            classes : 'btn-group-vertical btn-group-sm',
            style   :
            {
                margin: '8px 10px 8px',
                width: '15px',
                padding: '0',
                cursor: 'pointer'
            },
            datas   :
            {
                'foo': 'bar',
            },
            events:
            {
                click: function(data)
                {
                    console.log('wrapper div element clicked');
                    console.log(data);
                },
                dblclick: function(data)
                {
                    console.log('wrapper div element dblclicked');
                    console.log(data);
                },
                contextmenu: function(data)
                {
                    console.log('wrapper div element contextmenu');
                    console.log(data);
                },
            }
        });
        custBar.addTo(maptwo);

custSearch = L.control.custom({
            position: 'topleft',
            content : '<div id="inputdiv" class="input-group">'+
                      '    <input id="inputsearch" type="text" class="form-control input-sm" placeholder="Search">'+
                      '    <span class="input-group-btn">'+
                      '        <button id="inputbtn" class="btn btn-warning btn-sm" type="button">Go!</button>'+
                      '    </span>'+
                      '</div>',
            classes : '',
            style   :
            {
                position: 'absolute',
                left: '60px',
                top: '0px',
                width: '200px',
            },
        });
        custSearch.addTo(maptwo);

        custTime = L.control.custom({
            position: 'topleft',
            content : '<a tabindex="0" id="poptime" class="btn btn-sm btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content=""></a>',
            classes : '',
            style :
            {
              position: 'absolute',
              left: '10px',
              top: '130px',
              width: '50px'
            },

        });
        custTime.addTo(maptwo);
        /*
        L.control.custom({
            position: 'bottomleft',
            content : '<div class="panel-body">'+
                      '    <div class="progress" style="margin-bottom:0px;">'+
                      '        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="41" '+
                      '             aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: 41%">'+
                      '            41% Completed'+
                      '        </div>'+
                      '    </div>'+
                      '</div>',
            classes : 'panel panel-default',
            style   :
            {
                width: '200px',
                margin: '20px',
                padding: '0px',
            },
        })
        .addTo(map);

        L.control.custom({
            position: 'bottomright',
            content : '<img src="custom/images/mobile.png" class="img-thumbnail" id="demoImage">',
            classes : '',
            style   :
            {
                margin: '0px 20px 20px 0',
                padding: '0px',
            },
        })
        .addTo(map);
         */
        /*
        L.control.custom({
            position: 'bottomright',
            content : '<button class="btn btn-default btn-sm" id="changeImg">'+
                      '    <i class="fa fa-refresh"></i> Change Image'+
                      '</button>',
            classes : '',
            style   :
            {
                margin: '5px 20px',
                padding: '0px',
            },
        })
        .addTo(map);

        $('#changeImg').click(function(){
            $('#demoImage').attr('src','http://lorempixel.com/105/105/');
        });
        */
//$('#stepper-main').hide();


var tl = new TimelineMax({paused:true}),
  markall = $('.leaflet-marker-icon'),
  markbbox = $('#markerBbox'),
  markshad = $('#markerShad'),
  mark = $('#markerBackground'),
  markcirshad = $('#markerCirShad'),
  markcir = $('#markerCir'),
  markroad = $('#markerRoad'),
  markRshad = $('#markerRoadShad');
  TweenMax.set(markall, {autoAlpha:0})
  tl
    .to(markall, 0.3, {autoAlpha:1},0.25)
    .to(markall, 0.6, {scale:1.3, transformOrigin:'50% 50%', repeat:4, yoyo:true, ease:Expo.easeOut}, 0.45)
    .to(markroad, 0.6, {fill:'#006d76', ease:Circ.easeOut}, 0.55)
    .to(markcir, 0.6, {fill:'#bbdefb', ease:Circ.easeOut}, 0.55)
    .to(markall, 0.6, {fill:'#f5f5f5', backgroundColor: '#f5f5f5', ease:Circ.easeOut}, 0.55)


var directionField = document.getElementById('date-label');
var slider = document.getElementById('date-slider');
var mileslider = document.getElementById('mile-slider');
var mileField = document.getElementById('mile-label');


$('#reload').click(function(){
    location.reload();
});

$('#poptime').hide();


noUiSlider.create(slider, {
  start: 240,
 // tooltips: [slider({decimals: 1 })],
  connect: [true,false],
  step: 1,
  range: {
    min: 0,
    max: 500
  }
});
noUiSlider.create(mileslider, {
  start: 60,
 // tooltips: [slider({decimals: 1 })],
  connect: [true,false],
  step: 1,
  range: {
    min: 0,
    max: 250
  }
});

slider.classList.add('s1-slide');

slider.noUiSlider.on('update', function (values, handle) {
    directionField.innerHTML = values[handle];
    sliderVal = values[handle]
})
mileslider.noUiSlider.on('update', function (values, handle) {
    mileField.innerHTML = values[handle];
    mileVal = values[handle]
})

 featuresdata = [];
var ltlng = [];
var featuresIn = L.layerGroup();
var featuresOut = L.layerGroup();
var result;
var intersectL = [];
var bufferL = [];
var layerIn = '<ul id="ul">';
var layerOut = '<div id="layerOut">';
var count = 0;
$('#btnInput').click(function(){

$('#functionlink').show();
$('#menuWrangle').show();
$('#animlink').show();
    count += 1;
    getFeatures = $('#geoInput').val();
    features1 = jQuery.parseJSON(getFeatures);
    featuresdata.push(features1);
    features = $.map(features1.features, function(feature) {
        return feature.properties;
    });

    if (count == 1) {
    features2 = L.geoJson(features1);
    featureLayer.addData(features1);
    map.fitBounds(features2.getBounds());
    maptwo.fitBounds(features2.getBounds());
    //pathing.addTo(map);
    layerIn += '<li id="listInone"><div id="layerColorIn" style="background-color: blue; color: blue;"><p id="listInText" style="color: black;">' + 'Layer ' + count + '</p></div></li>';
    } else if (count == 2) {
     features2 = L.geoJson(features1);
    featureLayerAlt.addData(features1);
    map.fitBounds(features2.getBounds());
    maptwo.fitBounds(features2.getBounds());
    layerIn += '<li id="listIntwo"><div id="layerColorIntwo" style="background-color: red; color: red;"><p id="listInText" style="color: black;">' + 'Layer ' + count + '</p></div></li>';

    } else if (count == 3) {
    features2 = L.geoJson(features1);
    featureLayerAlt2.addData(features1);
    map.fitBounds(features2.getBounds());
    maptwo.fitBounds(features2.getBounds());
    layerIn += '<li id="listInthree"><div id="layerColorInthree" style="background-color: orange; color: orange;"><p id="listInText" style="color: black;">' + 'Layer ' + count + '</p></div></li>';

    } else {alert('Too many Layers!');}
    layerIn += '</ul>';
    $('#layerIn').html(layerIn);
    $('#layerIn').css('visibility','visible');
    $('#map .leaflet-control-zoom').css('margin-left','5px');

});
function loadpleth(){

function getColor(d){
    return  d > 3200 ? '#fff9c4' :
            d > 2800 ? '#fff4a0' :
            d > 2000 ? '#fff280' :
            d > 1800 ? '#fff060':
            d > 1200 ? '#ffee40' :
            d > 980 ? '#ffec20' :
            d > 860 ? '#ffea00' :
            d > 740 ? '#ffc969' :
            d > 620 ? '#ffb754' :
            d > 500 ? '#ffa53f' :
            d > 380 ? '#ff932a' :
            d > 280 ? '#ff8a65' :
            d > 180 ? '#f67a56' :
            d > 108 ? '#f06f49' :
            d > 84 ? '#ea643c' :
            d > 62 ? '#e4592f' :
            d > 32 ? '#de4e22' :
            d > 24 ? '#d84315' :
            d > 16 ? '#bf360c' :
            d > 10 ? '#b3300a' :
            d > 6 ? '#aa2e0a' :
            d > 4 ? '#a12c0a' :
            d > 2 ? '#982a0a' :
            d > 1 ? '#8f280a' :
                    '#86260a';
}

$.getJSON('custom/finished.geojson', function (geojson) {
var geojsonlayer;
// ... our listeners
geojsonlayer = L.geoJson();
function plethstyle(feature) {
    return {
        fillColor: getColor(feature.visits),
        weight: 3,
        opacity: 0.15,
        color: '#c12700',
        dashArray: '1',
        fillOpacity: 0.75
    };
}

function plethhighlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        dashArray: '',
        fillOpacity: 0.5
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    plethinfo.update(layer.feature);
}
function plethresetHighlight(e) {
    geojsonlayer.resetStyle(e.target);
    plethinfo.update();
}
function plethzoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function plethonEachFeature(feature, layer) {
    layer.on({
        mouseover: plethhighlightFeature,
        mouseout: plethresetHighlight,
        click: plethzoomToFeature
    });
}

geojsonlayer = L.geoJson(geojson, {
    style: plethstyle,
    onEachFeature: plethonEachFeature
}).addTo(map);

var plethinfo = L.control();

plethinfo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
plethinfo.update = function (props) {
    this._div.innerHTML = '<h4>Visits to Locations</h4>' +  (props ?
        '<b>' + props.visits + '</b><br />' + props.visits / 30 + ' hours / loc<sup></sup>'
        : 'Hover over a Tract');
};

  plethinfo.addTo(map);
  });
}
$('#chorostart').click(function(){
  loadpleth();
});

$('#menuWrangle').click(function(){

});
$('#animateRoute').click(function(){
   var t = "path";
   animationGenerator(t);
});
function animationGenerator(type){
 var truckpic =  L.control.custom({
                    position: 'bottomright',
                    content : '<img src="custom/images/mobile.png" height="90vh" width="100vw" class="img-thumbnail" id="demoImage">',
                    classes : '',
                    style   :
                    {
                        margin: '0px 20px 20px 0',
                        padding: '0px',
                    },
                });

  $('#geolink').show();
$('#tablelink').show();
  tweenToggle = 0;
  feat = features1.features;
  stringcount = 0;
  lines = 1;
  lineholder = [];
  propsholder = [];
  proplen = {};
  proplen[0] = 0;
  timelen = {};
  timelen[0] = 0;
  pp = 0;
  turfline = {};
  turfline[0] = [];
  miDiv = 12;
  timeout = {};
  timeout[0] = [];
  timeholderIn = [];
  timeholderOut = [];
  timecount = 0;
  linestring = {};
  stringsout = [];
  propsout = {};
  propsout[0] = [];
  len = features1.features.length;
  for(var i = 0; i < len; i++){
    var f = features1.features[i].geometry.coordinates;
    var b = features1.features[i].properties;
    var t = features1.features[i].properties.pickuptime;
    var to = features1.features[i].properties.dropofftime;
    lineholder.push(f);
    propsholder.push(b);
    timeholderIn.push([t, to]);
  }
  function pathstepper(){
  for(var i = 0; i < propsholder.length; i++){
    if(proplen[pp] <= mileVal) {
      proplen[pp] += propsholder[i].dist4;
      turfline[pp].push(lineholder[i]);
      propsout[pp].push(propsholder[i]);
    } else {
      pp += 1;
      proplen[pp] = 0;
      turfline[pp] = [];
      propsout[pp] = [];
    }
  }
}
  timeArray = [];
  function timestepper(){

  var len = timeholderIn.length;
    for(var i = 0; i < len; i++){
      dateA = timeholderIn[i][0];
      dateB = timeholderIn[i][1];
      convertA = Date.parse(dateA);
      convertB = Date.parse(dateB);
      duration = convertB - convertA;
      timeArray.push({id: i, pickup: dateA, dropoff: dateB, duration: duration});
    }
    dropcoord = {};
   dropcoord[0] = [];
    for(var it = 0; it < propsholder.length; it++){
      if(proplen[pp] <= mileVal) {
        proplen[pp] += propsholder[it].dist4;
        timelen[pp] += timeArray[it].duration;
        timeout[pp].push(timeArray[it]);
        dropcoord[pp].push([propsholder[it].dropoffx, propsholder[it].dropoffy]);
        if(lineholder[it+1] !== undefined){
        turfline[pp].push(lineholder[it], lineholder[it+1]);
        } else {
          turfline[pp].push(lineholder[it], lineholder[it]);
        }
        propsout[pp].push(propsholder[it]);
      } else {
      pp += 1;
      proplen[pp] = 0;
      timelen[pp] = 0;
      timeout[pp] = [];
      turfline[pp] = [];
      propsout[pp] = [];
      dropcoord[pp] = [];
      }

    }

  }

  if(type == "stepper"){
    timestepper();
    for(var key in turfline){
    stringsout.push(turf.lineString(turfline[key], {id: key, dropcoords: dropcoord[key], distance: proplen[key], areaItems: propsout[key], time:timelen[key], timeFeatures:timeout[key]}));
  }
  } else {
  pathstepper();
  for(var keya in turfline){
    stringsout.push(turf.lineString(turfline[keya], {id: keya, distance: proplen[keya]}));
  }
}

  collect = turf.featureCollection(stringsout);
  truckpic.addTo(maptwo);
  if(type == "path") {
    animPolyPath();
  } else if(type == "marker") {
    animD3Marker();
  } else if(type == "stepper") {

    animStepper();
  }
}
function animPolyPath(){


 addMarkers();
}


function addMarkers() {
  var markers = new L.MarkerClusterGroup();

   for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.geometry) {
      var marker = new L.marker(
            new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id }
    );


      marker.on('click', function(event){
        showRunPath(event);

      });
      markers.addLayer(marker);
    }
  }

  maptwo.addLayer(markers);
  tlplay();
}

function durCount(n){
  return n < 13 ? 63 * sliderVal:
         n < 17 ? 115 * sliderVal:
          166 * sliderVal;
}
function showRunPath(event) {

    var geoPath;

  for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.properties.id === event.target.options.id) {
      geoPath = f;
      break;
    }
  }


  if (geoPath) {
    if (!(geoPath.geometry.coordinates[0] instanceof Array) ) {
      minifier = new GeojsonMinifier({ precision: 6 });
      geoPath.geometry.coordinates = minifier.decodeGeometry(geoPath.geometry.coordinates);
  }
    //maptwo.fitBounds(new L.GeoJSON(geoPath).getBounds());
    var duration = durCount(geoPath.properties.distance); //< 13 ? 11300 : < 17 ? 22600 : 32900;
    //var duration = 8000;
    drawPath(geoPath, duration);
    }

}

function updateDahsboard(data, duration) {
  //data should be at collect.features.properties
  /*
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('locality').innerText = data.medallion;
  document.getElementById('date').innerText = data.pickuptime.split(' ')[0];
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour *24;
  var timer;
  var endT = duration;
  var addate = Date();
  var paddate = Date.parse(addate);
  var upDate = paddate + endT;
  function showRemaining() {
    var now = new Date();
    var getDate = new Date(upDate);
    var distance = getDate - now;
    if (distance < 1 ) {
       // handle expiry here..
       clearInterval( timer ); // stop the timer from continuing ..
       //alert('Expired'); // alert a message that the timer has expired..
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor( (distance % _day ) / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;
    var countdownElement = document.getElementById('time');
    countdownElement.innerHTML = days  + 'd ' +
                                 hours + 'h ' +
                                 minutes + 'm ' +
                                 seconds + 's ' +
                                 milliseconds + 'ms';
  }
  timer = setInterval(showRemaning, 15);
  var start = data.pickuptime.split(" ")[1];
  var end = data.dropofftime.split(" ")[1];
  var start1a = start.split(":")[0];
  var start1b = start.split(":")[1];
  var end1a = end.split(":")[0];
  var end1b = end.split(":")[1];
  var mins = end1b - start1b;
  var hours = end1a - start1a;
  var totalMinutes = (hours * 60) + mins;
  //var totalMinutes = data.run_time.split(":")[0];
  var hours = Math.floor(totalMinutes / 60);

  var minutes = totalMinutes % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  //var seconds = data.run_time.split(":")[1];
  //seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById('time').innerText = "0" + hours + ":" + minutes;

  var meters = data.dist4*1000,
      i = 0,
      timeout = Math.floor((3000 / meters) * 10);
*/
i = 0;
  var distanceLabel = document.querySelector('#distance > span');
    meters = 8000;
     timeout = Math.floor((3000 / meters) * 10);
  function printText() {
    distanceLabel.innerText = i;
    i += 202;

    if (i < meters) {
      setTimeout(printText, timeout);
    } else {
      distanceLabel.innerText = meters;
    }
  }

  printText();
}

function drawPath(geoPath, duration) {
  tweenToggle = 0;
  var pane = d3.select(maptwo.getPanes().overlayPane);
  pane.selectAll("svg.running-path").remove();
  var svg = pane.append("svg").attr("class", "running-path"),
      g = svg.append("g").attr("class", "leaflet-zoom-hide");

  var transform = d3.geo.transform({point: projectPoint});
  var path = d3.geo.path().projection(transform);
  var coll =  { type: "FeatureCollection", features: [geoPath] };
  var output = JSON.stringify(geoPath, null, '\t');
  var outputText = $('#geoOutput').val(output);

  var line = g.selectAll(".line")
                .data([geoPath])
                .enter()
                .append("path")
                .attr("class", "line");



  function reset() {
    var bounds = path.bounds(coll),

        topLeft = bounds[0],
        bottomRight = bounds[1];

    topLeft[0] -= 2;
    topLeft[1] -= 2;
    bottomRight[0] += 2;
    bottomRight[1] += 2;

    svg.attr("width", bottomRight[0] - topLeft[0] + 6)
        .attr("height", bottomRight[1] - topLeft[1] + 6)
        .style("left", topLeft[0] + "px")
        .style("top", topLeft[1] + "px");

    g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

    line.attr("d", path).call(transition);
  }

  function transition(path) {
    console.log(path);
    path.transition()
        .duration(duration)
        .attrTween("stroke-dasharray", tweenDash);
  }

  function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l);
    var x = this;

    return function(t) {
      var p = x.getPointAtLength(t * l);
      if(tweenToggle == 0){
        tweenToggle = 1;
        var newCenter = maptwo.layerPointToLatLng(new L.Point(p.x,p.y));
        maptwo.panTo(newCenter, 12);
      } else {
        tweenToggle = 0;
      }
      return i(t); };
  }

  maptwo.on("viewreset", reset);
  //maptwo.on("zoomend", reset);
  reset(line, path);
  reset();
}

function projectPoint(x, y) {
  var point = maptwo.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

function animStepper(){
$('#stepper-main').show();
 addStepMarkers();
}

function addStepMarkers() {
  var markers = new L.MarkerClusterGroup();

   for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.geometry) {
      var marker = new L.marker(
            new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id, icon: tlicon }
    );


      marker.on('click', function(event){
        showStepRunPath(event);
      });
      markers.addLayer(marker);
    }

  }

  maptwo.addLayer(markers);
  tl.restart();
}

function showStepRunPath(event) {

    stepPath = [];


  for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.properties.id === event.target.options.id) {
      stepPath = f;
      break;
    }
  }

    //maptwo.fitBounds(new L.GeoJSON(stepPath).getBounds());
    dur = (stepPath.properties.time / 60000) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;

    animateStep(stepPath, dur);
    updateDashboard(stepPath.properties, dur);
    }

//}
  function updateDashboard(props, dur){
  $('#poptime').show();
  $('#poptime').popover('show');
  var dis = Math.round(props.distance);
  var tilen = props.timeFeatures.length;
  var starttime = props.timeFeatures[0].pickup;
  var endtime = props.timeFeatures[tilen - 1].pickup;
  var acttime = props.time / 60000;
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour *24;
  var timer;

  var addate = Date();
  var paddate = Date.parse(addate);
  var upDate = paddate + dur;
  function showRemaining() {
    var now = new Date();
    var getDate = new Date(upDate);
    var distance = getDate - now;
    if (distance < 1 ) {
       // handle expiry here..
       clearInterval( timer ); // stop the timer from continuing ..
       //alert('Expired'); // alert a message that the timer has expired..
    }
    //var days = Math.floor(distance / _day);
    var hours = Math.floor( distance  / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;
    var parentElement = $('h3.popover-header');
    //var countdownElement = document.getElementById('time');
        parentElement.html(hours + 'h ' + //days  + 'd ' +
                           minutes + 'm ' +
                           seconds + 's ' +
                           milliseconds + 'ms');
  }
  $('div.popover-body').html('Total Mi: ' + dis + '<br>' +
                             'start: ' + starttime + '<br>' +
                             'arrival: ' + endtime + '<br>' +
                             'act duration: ' + acttime);
  timer = setInterval(showRemaining, 15);

  }

    function animateStep(stepPath, dur){




      console.log(stepPath);
      var d3overlay = d3.select(maptwo.getPanes().overlayPane);
      d3overlay.selectAll("svg.running-marker").remove();
      //var minsvg = d3.select(maptwo.getPanes().overlayPane).append("svg");
      var svg = d3overlay.append("svg").attr("class", "running-marker");
      g = svg.append("g").attr("class", "leaflet-zoom-hide");
      var transform = d3.geo.transform({point: projectStep});
      var path = d3.geo.path().projection(transform);
      var markerCol = { type: "FeatureCollection", features: [stepPath]};
      var output = JSON.stringify(stepPath, null, '\t');
  var outputText = $('#geoOutput').val(output);



    var linePath = g.selectAll('.line')
              .data([stepPath])
              .enter()
              .append("path")
              .attr("class", "stepConnect");


      var ptFeatures = g.selectAll('circle')
          .data(stepPath)
          .enter()
          .append('circle')
          .attr("r", 4)
          .attr("class", "waypoints");


      var marker = g.append("circle")
          .attr("r", 7)
          .attr("id", "marker")
          .attr("class", "stepMarker");



      function newreset() {
            var bounds = path.bounds(markerCol),

              topLeft = bounds[0],
              bottomRight = bounds[1];

          topLeft[0] -= 2;
          topLeft[1] -= 2;
          bottomRight[0] += 2;
          bottomRight[1] += 2;

          svg.attr("width", bottomRight[0] - topLeft[0] + 100)
              .attr("height", bottomRight[1] - topLeft[1] + 100)
              .style("left", topLeft[0]-50 + "px")
              .style("top", topLeft[1]-50  + "px");



          g.attr("transform", "translate(" + (-topLeft[0]+50) + "," + (-topLeft[1]+50)+ ")");
          linePath.attr("d", path).call(sttransition);
          //linePath.attr("d", path).call(transition)
          //line.attr("d", path).call(transition);
        }

        function sttransition(path) {

          path.transition()
              .duration(dur)
              .attrTween("stroke-dasharray", sttweenDash);

        }

        function sttweenDash() {
          var x = this;

          return function(t) {

            var l = x.getTotalLength();
            var i = d3.interpolateString("0," + l, l + "," + l);
            //var markerPulse = d3.select('.pulseMarker')
            var marker = d3.select('#marker');
            var p = x.getPointAtLength(t * l);

            //markerPulse.attr('transform', "translate(" + p.x + "," + p.y + ")");
            marker.attr('transform', "translate(" + p.x + "," + p.y + ")");

            if(tweenToggle == 0){
              tweenToggle = 1;
              var newCenter = maptwo.layerPointToLatLng(new L.Point(p.x,p.y));
              maptwo.panTo(newCenter, 10);
            } else {
              tweenToggle = 0;
            }
            return i(t);
          };
        }

          maptwo.on("viewrest", newreset);
          newreset(linePath, path);
          newreset();
        function projectStep(x, y) {

            var point = maptwo.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);

        }


      }

function applyStepLatLngToLayer(d) {
       var y = d.geometry.coordinates[1];
       var x = d.geometry.coordinates[0];
       return maptwo.latLngToLayerPoint(new L.LatLng(y, x));
}

function translatePoint(d) {
    var point = maptwo.latLngToLayerPoint(new L.LatLng(d[1],d[0]));

    return "translate(" + point.x + "," + point.y + ")";
}

function coordToLatLon(coord) {
var point = maptwo.layerPointToLatLng(new L.Point(coord[0],coord[1]));
return point;
}

$('#d3stepper').click(function(){

  var t = "stepper";
  animationGenerator(t);
});

$('#geoInput').focus(function(){
        $(this).val('');
    });

    // Button to clear map and input text area:
    $('#btnInputClear').click(function(){
        count = 0;
        featuresIn.clearLayers();
        featureLayer.clearLayers();
        featuresdata = [];
        layerIn = '';
        $('#geoInput').val('');
        $('#layerIn').html('');
    });

    // Generate output geojson:
    $('#btnOutput').click(function(){
        var output = JSON.stringify(result, null, '\t');
        var outputText = $('#geoOutput').val(output);
    });
    $('#poilink').click(function() {

      var AirIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'airport.png'
        }
      });
      var EatIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'dining.png'
        }
      });
      var BarIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'bar.png'
        }
      });
      var ShopIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'shopping.png'
        }
      });
      var CasIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'casino.png'
        }
      });
      var SportIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'sport.png'
        }
      });
      var UnivIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'univ.png'
        }
      });
      var GenIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'blue-marker.png'
        }
      });
      var airicon = new AirIcon(),
          eaticon = new EatIcon(),
          baricon = new BarIcon(),
          shopicon = new ShopIcon(),
          univicon = new UnivIcon(),
          sporticon = new SportIcon(),
          casicon = new CasIcon(),
          genicon = new GenIcon();
      var poimarkers = [];
      var plen = poi.features.length;
      for(var i = 0; i < plen; i++) {
        var p = poi.features[i];
        if(p.properties.bus == 'nightlife'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:baricon, id: i}).addTo(maptwo))
      } else if(p.properties.bus == 'shopping'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:shopicon, id: i}).addTo(maptwo))
      } else if(p.properties.bus == 'sports'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:sporticon, id: i}).addTo(maptwo))
        } else if(p.properties.bus == 'dining'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:eaticon, id: i}).addTo(maptwo))
        } else if(p.properties.bus == 'airport'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:airicon, id: i}).addTo(maptwo))
        } else if(p.properties.bus == 'casino'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:casicon, id: i}).addTo(maptwo))
        } else if(p.properties.bus == 'university'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:univicon, id: i}).addTo(maptwo))
        } else {
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:genicon, id: i}).addTo(maptwo))
        }
      }
      featureLayerTwo.addData(poimarkers);

    })
    // Clear button to clear output map and output geojson text area:
    $('#btnOutputClear').click(function(){
        maptwo.clearLayers();
        featuresOut.clearLayers();
        featureLayerTwo.clearLayers();
        $('#demoImage').parent().remove();
        $('#geoOutput').val('');
        intersectL = [];
        bufferL = [];
    });
function routingInit(caller){
  var len = collect.features.length;
  ltlgs = [];
  routes = [];
  farray = [];
  function sortgeom(array) {
    raylen = array.geometry.coordinates.length;
    returnray = [];
    console.log(array.geometry.coordinates);
    for( var w = 0; w < raylen; w++){
      returnray.push(new L.latLng(array.geometry.coordinates[w][1], array.geometry.coordinates[w][0]))
    }
    return returnray;
  }
  function sortRoute(array) {
    var arrlen = array.length;
    var copyray = [];
    for(var w = 0; w < arrlen; w++) {
      copyray.push(array[w])
    }
    return copyray
  }
  for(var i = 0; i < len; i++) {

    routes[i] = [];
    ltlgs[i] = [];
  }
  for(var i = 0; i < len; i++) {
     r = collect.features[i];
     //ltlgs[i].push(sortgeom(r))
     routes[i].push(L.Routing.control({waypoints: sortgeom(r), geocoder: L.Control.Geocoder.nominatim()}).addTo(maptwo))

  }

  /*
for(var i = 0; i < len; i++) {

  routes[i].push(L.Routing.control(L.extend(window.lrmConfig, {

      geocoder: L.Control.Geocoder.nominatim(),
      routeWhileDragging: true,
      reverseWaypoints: true,
      showAlternatives: true,
      altLineOptions: {
        styles: [
          {color: 'black', opacity: 0.15, weight: 9},
          {color: 'white', opacity: 0.8, weight: 6},
          {color: 'blue', opacity: 0.5, weight: 2}
        ]
      }
    }))).addTo(maptwo);
  L.Routing.errorControl(routes[i]).addTo(maptwo);
  }
*/
}
    $('#clean').click(function(){
        var len = features1.features.length;
        result = [];
        for(var i = 0; i < len; i++){
            result.push(turf.cleanCoords(features1.features[i]).geometry.coordinates);
        }
        resultOut = {
            "type": "FeatureCollection",
            "features": result
        };
        //result = turf.cleanCoords(features1.geometry.coordinates).geometry.coordinates;
        var resultShow = L.marker(result, {
            style: style,
            onEachFeature: onEachFeature
        });
        featuresLayerTwo.addLayer(resultShow).addTo(maptwo);
        //maptwo.fitBounds(resultShow.getBounds());

    });

    //to polyline
    $('#toPolyline').click(function(){
        var len = features1.features.length;
        geo = features1.features;
        result = [];
        for(var i = 0; i < len; i++){

            result.push(new L.LatLng(geo[i].geometry.coordinates[1], geo[i].geometry.coordinates[0]));
        }
      //res = turf.featurecollection(result);
      featureLayerTwo.addLayer(L.marker(result[0]));
      featureLayerTwo.addLayer(L.marker(result[len - 1]));
      var resultShow = L.polyline(result);
      featureLayerTwo.addLayer(resultShow).addTo(maptwo);

  });

map.on("click", function(e) {
  highlightLayer.clearLayers();
});
maptwo.on("click", function(e) {
  highlightLayerTwo.clearLayers();
});
    $('#clusterKmeans').click(function(){
        var options = {numberOfClusters: 25};
        result = [];
        var len = features1.features.length;
            clustered = turf.clustersKmeans(features1, options);
        for(var i = 0; i < clustered.features.length; i++){
            result.push(new L.LatLng(clustered.features[i].properties.centroid[1], clustered.features[i].properties.centroid[0]));
        }
        console.log(result);
        for(var i = 0; i < result.length; i++){
        featureLayerTwo.addLayer(L.circleMarker(result[i]));
    }
    });
    function clusterDbscan(){
      var maxDistance = 75;
      var result = [];
      var len = features1.features.length;
      var clustered = turf.clustersDbscan(features1, maxDistance);
      for(var i = 0; i < clustered.features.length; i++) {
        result.push(new L.latLng(clustered.features[i].properties.centroid[1], clustered.features[i].properties.centroid[0]));
        featureLayerTwo.addData(L.circleMarker(result[i]));
      }
    }
    function measurePointDist(){
      var measured = [];
      var len = features1.features.length;
      var opts = {units: 'miles'};
      for(var i = 0; i < len; i++) {
        var f = features1.features;
        var from = f[i].geometry.coordinates;
        var to = f[i+1].geometry.coordinates;
        measured.push(turf.distance(from, to, opts))
      }
      featureLayerTwo.addData(measured);
    }
    $('#clusterDBscan').click(function(){
      clusterDbscan();
    });
    $('#distPoint').click(function(){
      measurePointDist();
    })
    /*
$('#ralphtoggle').click(function(){
  initRalph();
});


function initRalph(){
  var latlngs = [];
  var ralphProps = [];
  var ralphTravel = [];
  var ralphDist = {};
  var ralphLen = {};
  var ralphMark = {};
  var ralphId = {};
  var ralphPP = 0;
  var Rdiv = 18;
  //ralphLen[ralphPP];
  ralphLen[ralphPP] = 0;
  ralphId[ralphPP] = [];
  ralphDist[ralphPP] = [];
  ralphMark[ralphPP] = [];
  ralphId[0].push({id: 0});
  len = features1.features.length;
  for(var i = 0; i < len; i++){
    var b = features1.features[i].properties;
    var t = features1.features[i].properties.pickuptime;
    var to = features1.features[i].properties.dropofftime;
    latlngs.push(features1.features[i].geometry.coordinates);
    ralphProps.push(b);
    ralphTravel.push([t, to]);

  }
  for(var i = 0; i < ralphProps.length; i++){
    if(ralphLen[ralphPP] <= Rdiv) {
      ralphLen[ralphPP] += ralphProps[i].dist4;
      ralphMark[ralphPP].push(latlngs[i]);
      ralphDist[ralphPP].push(ralphProps[i]);
    } else {
      ralphPP += 1;
      ralphId[ralphPP] = [];
      ralphId[ralphPP].push({id: ralphPP});
      ralphLen[ralphPP] = 0;
      ralphMark[ralphPP] = [];
      ralphDist[ralphPP] = [];
    }
  }
  ralphDist.push([ralphId, ralphLen]);
  collect = {"type": "Feature", "geometry": {"type": "multiPoint", "coordinates": ralphMark},"properties": ralphDist};
  ralphMarkers();
}
function ralphMarkers(){
  for(var i = 0; i < collect.geometry.length; i++){
    f = collect.geometry[i];
    p = collect.properties[i];
    if(f){
      var rMarker = new R.Marker(
          new L.LatLng(f.coordinates[1],f.coordinates[0], { id: p.id })
        );
      rMarker.on('click', function(e){
        showRalph(e);
      });
        featureLayerTwo.addLayer(rMarker).addTo(maptwo);
    }
  }
}
function showRalph(e){
    var ralphGeo;
    var ralphVerify;
    for(var i = 0; i < collect.geometry.length; i++){
      var f = collect.geometry[i];
      var  p = collect.properties[i];
      console.log(e.target);
      if(p.id === e.target.options.id){
        ralphGeo = f;
        ralphVerify = p;
        break;
      }
    }
    if (ralphGeo){
      minifier = new GeojsonMinifier({precision: 6});
      ralphGeo.coordinates = minifier.decodeGeometry(ralphGeo.coordinates);
    }
    var durationR = ralphVerify.distance > 19 ? 24000 : 36000;
    drawRalph(ralphGeo, durationR, e);

}
function drawRalph(ralphGeo, durationR, e){
  var b = new R.BezierAnim([e.latlng, ralphGeo.coordinates[0][1]], {}, function() {
    var dd = new R.Pulse(
        ralphGeo.coordinates[0][1],
        6,
        {'stroke': '#e96603', 'fill': '#fcc575'},
        {'stroke': '#fcc575', 'stroke-width': 4});
      featureLayerTwo.addData(dd);
      setTimeout(function(){
        featureLayerTwo.removeLayer(dd).removeLayer(b);
      }, 3000);
  });
  featureLayerTwo.addData(b);
}

*/

function animD3Marker(){
   $('.slower').click(function(){
      if(timeFactor > 1){
        timeFactor -= 1;
      }
      $('.timeFactor').html(timeFactor);
    });
    $('.faster').click(function(){
        timeFactor += 1;
      $('.timeFactor').html(timeFactor);
    });
    $('.reload').click(function(){
      location.reload();
    });
    $('.about').click(function(){
      $('.aboutPopup').fadeIn();
    });

 addD3Markers();
}


function addD3Markers() {
  var markers = new L.MarkerClusterGroup();
  strtarray = [];
  endarray = [];
   for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.geometry) {
      var marker = new L.marker(
            new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id }
    );
      var newlen = f.geometry.coordinates.length;
      strtarray.push(f.geometry.coordinates[0]);
      endarray.push(f.geometry.coordinates[newlen - 1]);

      marker.on('click', function(event){
        showD3RunPath(event);

      });
      markers.addLayer(marker);
    }
  }

  maptwo.addLayer(markers);
  tlplay();
}

function durd3Count(n){
  return n < 18 ? 63 * sliderVal:
         n < 28 ? 115 * sliderVal:
          166 * sliderVal;
}
function showD3RunPath(event) {

    var markerPath;

  for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.properties.id === event.target.options.id) {
      markerPath = f;
      break;
    }
  }


  if (markerPath) {
    if (!(markerPath.geometry.coordinates[0] instanceof Array) ) {
      d3minifier = new GeojsonMinifier({ precision: 6 });
      markerPath.geometry.coordinates = d3minifier.decodeGeometry(markerPath.geometry.coordinates);
  }
    //maptwo.fitBounds(new L.GeoJSON(markerPath).getBounds());
    var duration = durd3Count(markerPath.properties.distance); //< 13 ? 11300 : < 17 ? 22600 : 32900;
    animateMarker(markerPath, duration);
    //updateDahsboard(r);
    }

}

  function areaChartBuild(){
    var margin = {top: 10, right:8, bottom:8, left:14},
    areaChartWidth = $(window).width() - margin.left - margin.right - 40,
    areaChartHeight = 140 - margin.top - margin.bottom;
    var x = d3.scale.linear()
      .range([0, areaChartWidth]);
    var y = d3.scale.linear()
      .range([areaChartHeight, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(4);
    var areaChartSvg = d3.select(".areaChartBox").append("svg")
      .attr("width", areaChartWidth + margin.left + margin.right)
      .attr("height", areaChartHeight + margin.top + margin.bottom)
      .attr("class", "areaChart")
      .append("g")
      .attr("transform", "translate("+margin.left+","+margin.top+")");
  }


    function animateMarker(markerPath, duration){
      var pulseData = [
        {"r": 1, "pulse": false},
        {"r": 3, "pulse": false}
      ];
      console.log(markerPath);
      var d3overlay = d3.select(maptwo.getPanes().overlayPane);
      d3overlay.selectAll("svg.running-marker").remove();
      var minsvg = d3.select(maptwo.getPanes().overlayPane).append("svg");
      var svg = d3overlay.append("svg").attr("class", "running-marker");
      g = svg.append("g").attr("class", "leaflet-zoom-hide");
      var transform = d3.geo.transform({point: d3projectPoint});
      var path = d3.geo.path().projection(transform);
      var markerCol = { type: "FeatureCollection", features: [markerPath]};

      var ptFeatures = g.selectAll('circle')
          .data(markerPath)
          .enter()
          .append('circle')
          .attr("r", 2)
          .attr("class", "waypoints");

      var linePath = g.selectAll('.line')
          .data([markerPath])
          .enter()
          .append("path")
          //.attr("class", "line")
          .attr("class", "lineConnect");



      var marker = g.append("circle")
          .attr("r", 5)
          .attr("id", "marker")
          .attr("class", "travelMarker");

      var markerPulse = g.selectAll("circle").data(pulseData);
          markerPulse.enter()
          .append('circle')

          .attr("opacity", 0.3)
          .attr("class", "pulseMarker");
      g.selectAll('circle')
          .attr('r', function(d) {
            d.pulse = !d.pulse;
            if (d.pulse) {
              sel = d3.select(this);
              pulsate(sel);
            }
          });

      var upd = markerPath.geometry.coordinates.length;
      var startAndEnd = [markerPath.geometry.coordinates[0], markerPath.geometry.coordinates[upd - 1]];
      var begend = g.selectAll('.srtend')
          .data(startAndEnd)
          .enter()
          .append("circle", ".srtend")
          .attr("r", 35)
          .style('fill', '#d500f9')
          .style('opacity', ".3");


      function reset() {
            var bounds = path.bounds(markerCol),

              topLeft = bounds[0],
              bottomRight = bounds[1];

          topLeft[0] -= 2;
          topLeft[1] -= 2;
          bottomRight[0] += 2;
          bottomRight[1] += 2;

          svg.attr("width", bottomRight[0] - topLeft[0] + 100)
              .attr("height", bottomRight[1] - topLeft[1] + 100)
              .style("left", topLeft[0]-50 + "px")
              .style("top", topLeft[1]-50  + "px");



          g.attr("transform", "translate(" + (-topLeft[0]+50) + "," + (-topLeft[1]+50)+ ")");
          linePath.attr("d", path).call(transition);
          //line.attr("d", path).call(transition);
        }

        function transition(path) {

          path.transition()
              .duration(duration)
              .attrTween("stroke-dasharray", tweenDash);

        }

        function tweenDash() {
          var x = this;

          return function(t) {

            var l = x.getTotalLength();
            var i = d3.interpolateString("0," + l, l + "," + l);
            var markerPulse = d3.select('.pulseMarker');
            var marker = d3.select('#marker');
            var p = x.getPointAtLength(t * l);
            markerPulse.attr('transform', "translate(" + p.x + "," + p.y + ")");
            marker.attr('transform', "translate(" + p.x + "," + p.y + ")");

            if(tweenToggle == 0){
              tweenToggle = 1;
              var newCenter = maptwo.layerPointToLatLng(new L.Point(p.x,p.y));
              maptwo.panTo(newCenter, 12);
            } else {
              tweenToggle = 0;
            }
            return i(t);
          };
        }
        function pulsate(selection) {
              recursive_transitions();

              function recursive_transitions(){
                if (selection.data()[0].pulse) {
                  selection.transition()
                  .duration(25)
                  .attr("r", function(d){
                    return d.r * 0.25;
                  })
                  .attr('opacity', 1)
                  .ease('sin-in')
                  .transition()
                  .duration(1200)
                  .attr('opacity', 0)
                  .attr('r', function(d){
                    return d.r * 7;
                  })
                  .ease('ease-out')
                  .each("end", recursive_transitions);
                } else {
                  selection.transition()
                    .duration(200)
                    .attr('r', 1)
                    .attr('opacity', 1);
                }
              }
            }
        maptwo.on("viewrest", reset);
        reset(linePath, path);
        reset(begend, path);
        reset();


      }

function d3projectPoint(x, y) {
            var point = maptwo.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        } //end d3projectPoint

function applyLatLngToLayer(d) {
        console.log(d);
        var y = d.geometry.coordinates[1];
        var x = d.geometry.coordinates[0];
        return maptwo.latLngToLayerPoint(new L.LatLng(y, x));
      }



$('#d3modal').click(function(){
  var t = "marker";
  animationGenerator(t);
});


$('#styleditorbtn').click(function(){
  let styleEditor = L.control.styleEditor({
    position: 'topleft',
    useGrouping: false
  });
  maptwo.addControl(styleEditor);
  let drawnItems = new L.FeatureGroup();
  featureLayerTwo.addLayer(drawnItems);

  let drawControl = new L.Control.Draw({
    draw: {
      position: 'topleft',
      polygon: {
        title: 'Draw a sexy polygon!',
        allowIntersection: false,
        drawError: {
          color: '#b00b00',
          timeout: 1000
        },
        shapeOptions: {
          color: '#bada55'
        },
        showArea: true
      },
      polyline: {
        metric: false
      },
      circle: {
        shapeOptions: {
          color: '#662d91'
        }
      },
      marker: {
        icon: styleEditor.getDefaultIcon()
      }
    },
    edit: {
      featureGroup: drawnItems
    }
  });
  maptwo.addControl(drawControl);
  maptwo.on('draw:created', function(e){
    let type = e.layerType,
    layer = e.layer;
    if(type === 'marker') {
      layer.bindPopup('A popup');
    }
    drawnItems.addLayer(layer);
  });
});
//$('#menuchart').removeClass('show');
//  $('#chartDrop').attr('aria-expanded', "false");
$("[name='menu']").click(function() {

  $(".mm, .active").removeClass("mm active");
  if (this.id === "menuWrangle") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "maplink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "tablelink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "geolink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "hchartlink") {
    $(this).addClass('mm active');
    $("#chartDrop").attr("aria-expanded", "true");
    $("#menuchart").addClass('show');
    return false;
  } else if (this.id === "infolink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "animlink") {
    $(this).addClass('mm active');
    return false;
  }
});
$('#menuWrangle').click(function(){
  $('#wrangleModal').modal('show');
});
$('#clusterDBscan').click(function(){

});
$('#geocodingbtn').click(function(){
  //$('#georoutes').show();
  var caller = "generic";
  routingInit(caller);
});



    $('#kinks').click(function(){
        var data = [];

        $.each(featuresdata[0].features, function(i1,v1){
            kinks = turf.kinks(v1.geometry).intersections;

            for (var i=0; i<kinks.features.length; i++) {
                data.push(kinks.features[i]);
            }
        });

        result = {
            "type": "FeatureCollection",
            "features": data
        };

        // Add result to output map:
        var resultShow = L.geoJson(result, {
            width: 5,
            color: 'red',
        });
        featuresOut.addLayer(resultShow).addTo(maptwo);

        var showFeatures = L.geoJson(featuresdata[0], {
            width: 5,
            color: 'red',
        });
        featuresOut.addLayer(showFeatures).addTo(maptwo);
    });

     var dropElement = document.getElementById('geoInput');
    dropElement.addEventListener('dragover', handleDragOver, false);
    dropElement.addEventListener('drop', handleDrop, false);

    reader = new FileReader();

    reader.onload = function(event){
        var geojson = JSON.parse(reader.result);
        var fileContent = reader.result;
        $('#geoInput').val(fileContent);
    };

    function handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        f = files[0];
        reader.readAsText(f);
    }

    function handleDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }
$("#geo-stats").click(function(){
  if(timeArray){

    var result = {};

    var traveladd = 0;
    var timeadd = 0;
    for(key in timelen) {

      timeadd = timeadd +  timelen[key];
      traveladd = traveladd +  proplen[key];
    }
    var minutes = timeadd/60000;
    var hours = minutes/60;
    var reportRange = timeout[0][0].pickup;
    var travelDist = traveladd;

    result = {minutes: minutes, hours: hours, daterange:reportRange, travelDistance:travelDist};

  } else if(geojson){
    var visitcount = 0;
    for(var i = 0; i < geojson.features.length; i++){
      counting = geojson.features[i].visits;
      visitcount = visitcount + counting;

    }
    result = {totalVisits: visitcount};
  }
   var output = JSON.stringify(result, null, '\t');
    var outputText = $('#geoOutput').val(output);
});

});

