webpackJsonp([1],{"/I2/":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("travels-modal"),t._m(0,!1,!1),a("div",{staticClass:"travel-info"},[a("div",{staticClass:"current"},[a("i",{staticClass:"icon ion-ios-location"}),a("p",[t._v(t._s(t.currentPosition))])]),a("div",{staticClass:"next"},[a("i",{staticClass:"icon ion-android-share"}),a("p",[t._v(t._s(t.nextTravel))])])]),a("div",{staticClass:"statistics"},[a("p",{on:{click:t.showCountriesModal}},[t._v(t._s(t.countriesCount)+" Countries - "+t._s(t.citiesCount)+" Cities")])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-icons"},[a("a",{attrs:{href:"https://tucci.me",target:"_blank"}},[a("i",{staticClass:"icon ion-home"})]),a("a",{attrs:{href:"https://twitter.com/TucciMatias",target:"_blank"}},[a("i",{staticClass:"icon ion-social-twitter"})]),a("a",{attrs:{href:"https://github.com/MatiasTucci/travels",target:"_blank"}},[a("i",{staticClass:"icon ion-social-github"})])])}],r={render:o,staticRenderFns:n};e.a=r},"/yRs":function(t,e,a){"use strict";function o(t){a("T/Ix")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("diQi"),r=a.n(n),i=a("FIJ3"),s=a("VU/8"),l=o,c=s(r.a,i.a,!1,l,null,null);e.default=c.exports},"1p26":function(t,e,a){"use strict";var o=a("QtpQ"),n=a.n(o);e.a={name:"listModal",data:function(){return{travels:n.a.oldTravels.reverse()}}}},"3GDu":function(t,e,a){"use strict";function o(t){a("3OCb")}var n=a("fGNU"),r=a("SVci"),i=a("VU/8"),s=o,l=i(n.a,r.a,!1,s,"data-v-1e3a36fd",null);e.a=l.exports},"3OCb":function(t,e){},"3y59":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("span",{domProps:{textContent:t._s(t.label)}}),t._v(" "),a("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},n=[],r={render:o,staticRenderFns:n};e.a=r},"5ZbH":function(t,e,a){"use strict";function o(t){a("Ybha")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("kXiA"),r=a.n(n),i=a("KrRW"),s=a("VU/8"),l=o,c=s(r.a,i.a,!1,l,null,null);e.default=c.exports},"5cLx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Vj7G"),n=a.n(o),r=a("r/ZB"),i=a("VU/8"),s=i(n.a,r.a,!1,null,null,null);e.default=s.exports},"7DBO":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("custom-header"),a("router-view",{staticClass:"router-view"})],1)},n=[],r={render:o,staticRenderFns:n};e.a=r},"9KLx":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"travels-modal"}},[a("div",{staticClass:"container"},t._l(t.travels,function(e,o){return a("div",{key:o,staticClass:"item"},[a("div",{staticClass:"flag"},[a("span",[t._v(t._s(e.flag))])]),a("div",{staticClass:"city"},[a("span",[t._v(t._s(e.city)+",")])]),a("div",{staticClass:"country"},[a("span",[t._v(t._s(e.country))])])])}))])},n=[],r={render:o,staticRenderFns:n};e.a=r},"9frk":function(t,e){},FIJ3:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-street-view-pano-container"},[a("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._v(" "),t._t("default")],2)},n=[],r={render:o,staticRenderFns:n};e.a=r},HCTz:function(t,e,a){"use strict";var o=a("QtpQ"),n=a.n(o),r=a("nDMa"),i=a("NsEx");e.a={name:"header",components:{travelsModal:i.a},data:function(){return{currentPosition:n.a.current,nextTravel:n.a.next,countriesCount:r.a.countriesCount(),citiesCount:n.a.oldTravels.length}},methods:{showCountriesModal:function(){this.$modal.show("travels-modal")}}}},KrRW:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-map-container"},[a("div",{ref:"vue-map",staticClass:"vue-map"}),t._v(" "),a("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._v(" "),t._t("visible")],2)},n=[],r={render:o,staticRenderFns:n};e.a=r},M93x:function(t,e,a){"use strict";function o(t){a("9frk")}var n=a("xJD8"),r=a("7DBO"),i=a("VU/8"),s=o,l=i(n.a,r.a,!1,s,null,null);e.a=l.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n=a("M93x"),r=a("YaEn"),i=a("sA6N"),s=(a.n(i),a("rifk")),l=a.n(s),c=a("TJR/");o.a.config.productionTip=!1,o.a.use(i,{load:{key:c.a.map.key,libraries:"places"}}),o.a.use(l.a),new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},NsEx:function(t,e,a){"use strict";function o(t){a("vMso")}var n=a("1p26"),r=a("9KLx"),i=a("VU/8"),s=o,l=i(n.a,r.a,!1,s,"data-v-6dec883b",null);e.a=l.exports},QtpQ:function(t,e){t.exports={current:"Brussels, BEL",next:"Barcelona, ESP",oldTravels:[{year:"2007",city:"Santiago",country:"CHL",flag:"🇨🇱",coordinates:{lat:-33.4378305,lng:-70.65044920000003}},{year:"2007",city:"Chillan",country:"CHL",flag:"🇨🇱",coordinates:{lat:-36.60626179999999,lng:-72.1023351}},{year:"2014",city:"La Paz",country:"BOL",flag:"🇧🇴",coordinates:{lat:-15.0892416,lng:-68.52471489999999}},{year:"2014",city:"Copacabana",country:"BOL",flag:"🇧🇴",coordinates:{lat:-16.1662935,lng:-69.08615680000003}},{year:"2014",city:"Cusco",country:"PER",flag:"🇵🇪",coordinates:{lat:-13.53195,lng:-71.96746259999998}},{year:"2005",city:"Santa Helena",country:"BRA",flag:"🇧🇷",coordinates:{lat:-24.8584188,lng:-54.336434800000006}},{year:"2015",city:"Cartagena",country:"COL",flag:"🇨🇴",coordinates:{lat:10.400234,lng:-75.50852499999996}},{year:"2016",city:"Madrid",country:"ESP",flag:"🇪🇸",coordinates:{lat:40.4167754,lng:-3.7037901999999576}},{year:"2016",city:"Amsterdam",country:"NLD",flag:"🇳🇱",coordinates:{lat:52.3702157,lng:4.895167899999933}},{year:"2016",city:"Rome",country:"ITA",flag:"🇮🇹",coordinates:{lat:41.90278349999999,lng:12.496365500000024}},{year:"2016",city:"Florence",country:"ITA",flag:"🇮🇹",coordinates:{lat:43.7695604,lng:11.25581360000001}},{year:"2016",city:"Venice",country:"ITA",flag:"🇮🇹",coordinates:{lat:45.4930475,lng:12.417700299999979}},{year:"2016",city:"Paris",country:"FRA",flag:"🇫🇷",coordinates:{lat:48.85661400000001,lng:2.3522219000000177}},{year:"2016",city:"Cavtat",country:"HRV",flag:"🇭🇷",coordinates:{lat:42.5812683,lng:18.217594100000042}},{year:"2016",city:"Dubrovnik",country:"HRV",flag:"🇭🇷",coordinates:{lat:42.65066059999999,lng:18.09442379999996}},{year:"2016",city:"Split",country:"HRV",flag:"🇭🇷",coordinates:{lat:43.5081323,lng:16.440193499999964}},{year:"2016",city:"Sesimbra",country:"PRT",flag:"🇵🇹",coordinates:{lat:38.44421699999999,lng:-9.101490300000023}},{year:"2016",city:"Naples",country:"ITA",flag:"🇮🇹",coordinates:{lat:40.901975,lng:14.33264399999996}},{year:"2016",city:"Pompeii",country:"ITA",flag:"🇮🇹",coordinates:{lat:40.7466508,lng:14.4761726}},{year:"2016",city:"Kuala Lumpur",country:"MYS",flag:"🇲🇾",coordinates:{lat:3.139003,lng:101.68685499999992}},{year:"2016",city:"Tioman",country:"MYS",flag:"🇲🇾",coordinates:{lat:2.7902494,lng:104.16984630000002}},{year:"2016",city:"Ko Samui",country:"THA",flag:"🇹🇭",coordinates:{lat:9.5120168,lng:100.01359290000005}},{year:"2016",city:"Ko Tao",country:"THA",flag:"🇹🇭",coordinates:{lat:10.0993587,lng:99.83004840000001}},{year:"2017",city:"New York",country:"USA",flag:"🇺🇸",coordinates:{lat:40.7127837,lng:-74.00594130000002}},{year:"2017",city:"Los Angeles",country:"USA",flag:"🇺🇸",coordinates:{lat:34.0522342,lng:-118.2436849}},{year:"2017",city:"San Francisco",country:"USA",flag:"🇺🇸",coordinates:{lat:37.7749295,lng:-122.41941550000001}},{year:"2017",city:"Las Vegas",country:"USA",flag:"🇺🇸",coordinates:{lat:36.1699412,lng:-115.13982959999998}},{year:"2017",city:"New Jersey",country:"USA",flag:"🇺🇸",coordinates:{lat:40.0583238,lng:-74.4056612}},{year:"2017",city:"Palermo",country:"ITA",flag:"🇮🇹",coordinates:{lat:38.1156879,lng:13.361267099999964}},{year:"2017",city:"Montevideo",country:"URY",flag:"🇺🇾",coordinates:{lat:-34.9011127,lng:-56.16453139999999}},{city:"Mendoza",country:"ARG",flag:"🇦🇷",coordinates:{lat:-32.8894587,lng:-68.84583859999998}},{city:"Iguazú, Misiónes",country:"ARG",flag:"🇦🇷",coordinates:{lat:-25.8482523,lng:-54.346715200000006}},{city:"Entre Rios",country:"ARG",flag:"🇦🇷",coordinates:{lat:-31.7746654,lng:-60.49564609999999}},{city:"Córdoba",country:"ARG",flag:"🇦🇷",coordinates:{lat:-31.42008329999999,lng:-64.18877609999998}},{city:"Entre Rios",country:"ARG",flag:"🇦🇷",coordinates:{lat:-31.7746654,lng:-60.49564609999999}},{city:"Villa La Angostura",country:"ARG",flag:"🇦🇷",coordinates:{lat:-40.7627426,lng:-71.64179839999997}},{city:"Budapest",country:"HUN",flag:"🇭🇺",coordinates:{lat:47.497912,lng:19.04023499999994}},{city:"Prague",country:"CZE",flag:"🇨🇿",coordinates:{lat:50.0596696,lng:14.4656239}},{city:"Athens",country:"GRC",flag:"🇬🇷",coordinates:{lat:37.9908997,lng:23.7033199}},{city:"Jerusalem",country:"ISR",flag:"🇮🇱",coordinates:{lat:31.7964453,lng:35.1053188}},{city:"Tel Aviv",country:"ISR",flag:"🇮🇱",coordinates:{lat:32.109487,lng:34.7390367}},{city:"Bethlehem",country:"ISR",flag:"🇮🇱",coordinates:{lat:31.7053996,lng:35.1936877}},{city:"Amman",country:"JOR",flag:"🇯🇴",coordinates:{lat:31.8360368,lng:35.6674417}},{city:"Jerash",country:"JOR",flag:"🇯🇴",coordinates:{lat:32.2701107,lng:35.8244375}},{city:"Sofia",country:"BGR",flag:"🇧🇬",coordinates:{lat:42.6390604,lng:23.1838628}},{city:"Bansko",country:"BGR",flag:"🇧🇬",coordinates:{lat:41.8389995,lng:23.4835627}},{city:"Brussels",country:"BEL",flag:"🇧🇪",coordinates:{lat:50.8387874,lng:4.2933653}}]}},SVci:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.mapsLoaded?a("div",{staticClass:"map-container"},[a("transition",{attrs:{name:"fade"}},[t.selectedTravel?a("div",{staticClass:"travel-info",style:t.tooltipPos},[a("p",[t._v(t._s(t.selectedTravel.city)+", "+t._s(t.selectedTravel.country)+" "+t._s(t.selectedTravel.flag))])]):t._e()]),a("div",{staticClass:"zoom-control"},[a("i",{staticClass:"icon ion-ios-minus",on:{click:function(e){t.lessZoom()}}}),a("i",{staticClass:"icon ion-ios-plus",on:{click:function(e){t.moreZoom()}}})]),a("gmap-map",{ref:"gmap",staticStyle:{width:"100%",height:"100%"},attrs:{center:t.mapOptions.center,zoom:t.mapOptions.zoom,options:t.mapOptions.options},on:{drag:function(e){t.hideTooltip()},click:function(e){t.hideTooltip()},zoomChanged:function(e){t.hideTooltip()}}},t._l(t.travels,function(e,o){return a("gmap-marker",{key:o,attrs:{icon:t.getMarkerIcon(o),animation:t.getMarkerAnimation(o),position:e.coordinates,clickable:!0,zIndex:t.getMarkerZIndex(o)},on:{mouseover:function(a){t.showTooltip(e)},click:function(a){t.showTooltip(e)}}})}))],1):t._e()},n=[],r={render:o,staticRenderFns:n};e.a=r},"T/Ix":function(t,e){},"TJR/":function(t,e,a){"use strict";var o=a("jq9O"),n={map:{key:"AIzaSyDXQlZgfsVbKIP_G_DgL0X60wZs2BEVmf4",style:o.a}};e.a=n},YI6p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("jIen"),n=a.n(o),r=a("3y59"),i=a("VU/8"),s=i(n.a,r.a,!1,null,null,null);e.default=s.exports},YaEn:function(t,e,a){"use strict";var o=a("7+uW"),n=a("/ocq"),r=a("3GDu");o.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Map",component:r.a}]})},Ybha:function(t,e){},doCN:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})},n=[],r={render:o,staticRenderFns:n};e.a=r},fGNU:function(t,e,a){"use strict";var o=a("TJR/"),n=a("QtpQ"),r=a.n(n);e.a={name:"map",data:function(){return{mapsLoaded:!1,interval:void 0,timeout:void 0,selectedTravel:void 0,map:void 0,travels:r.a.oldTravels,mapOptions:{center:{lat:0,lng:0},zoom:3,options:{styles:o.a.map.style,mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!1,zoomControl:!1}},tooltipPos:{left:0,bottom:0}}},created:function(){this.interval=setInterval(this.checkIfMapsLoaded,500)},methods:{checkIfMapsLoaded:function(){var t=this;window.google&&(this.mapsLoaded=!0,this.$nextTick(function(){t.$refs.gmap.$mapCreated.then(function(e){t.map=e})}),clearInterval(this.interval))},hideTooltip:function(){this.selectedTravel=void 0},moreZoom:function(){this.mapOptions.zoom=this.mapOptions.zoom+1},lessZoom:function(){2!==this.mapOptions.zoom&&(this.mapOptions.zoom=this.mapOptions.zoom-1)},getMarkerIcon:function(t){return 0===t?{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#e6e7e9",fillOpacity:1,strokeWeight:1}:void 0},getMarkerAnimation:function(t){return 0===t?window.google.maps.Animation.BOUNCE:null},getMarkerZIndex:function(t){return 0===t?99999:90},showTooltip:function(t){var e=this;clearTimeout(this.timeout);var a=new window.google.maps.LatLng(t.coordinates.lat,t.coordinates.lng),o=this.fromLatLngToPoint(a);this.tooltipPos.left=o.x-125+"px",this.tooltipPos.top=o.y+60+"px",this.selectedTravel=t,this.timeout=setTimeout(function(){e.hideTooltip()},1500)},fromLatLngToPoint:function(t){var e=this.map.getProjection().fromLatLngToPoint(this.map.getBounds().getNorthEast()),a=this.map.getProjection().fromLatLngToPoint(this.map.getBounds().getSouthWest()),o=Math.pow(2,this.map.getZoom()),n=this.map.getProjection().fromLatLngToPoint(t);return new window.google.maps.Point((n.x-a.x)*o,(n.y-e.y)*o)}}}},jq9O:function(t,e,a){"use strict";e.a=[{elementType:"geometry",stylers:[{color:"#191b1d"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#191b1d"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#EF2D56"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#EF2D56"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#EF2D56"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]},nDMa:function(t,e,a){"use strict";var o=a("QtpQ"),n=a.n(o),r={};r.countriesCount=function(){var t=[];return n.a.oldTravels.forEach(function(e){-1===t.indexOf(e.country)&&t.push(e.country)}),t.length},e.a=r},preG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("osty"),n=a.n(o),r=a("doCN"),i=a("VU/8"),s=i(n.a,r.a,!1,null,null,null);e.default=s.exports},"r/ZB":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"flyaway"},[t._t("default")],2)])},n=[],r={render:o,staticRenderFns:n};e.a=r},rpYK:function(t,e){},teIl:function(t,e,a){"use strict";function o(t){a("rpYK")}var n=a("HCTz"),r=a("/I2/"),i=a("VU/8"),s=o,l=i(n.a,r.a,!1,s,null,null);e.a=l.exports},vMso:function(t,e){},xJD8:function(t,e,a){"use strict";var o=a("teIl");e.a={name:"app",components:{customHeader:o.a}}}},["NHnr"]);
//# sourceMappingURL=app.ec2f2b4499544bd233df.js.map