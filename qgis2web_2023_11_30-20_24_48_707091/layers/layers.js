var wms_layers = [];

var format_KecBangunrejo_0 = new ol.format.GeoJSON();
var features_KecBangunrejo_0 = format_KecBangunrejo_0.readFeatures(json_KecBangunrejo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecBangunrejo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecBangunrejo_0.addFeatures(features_KecBangunrejo_0);
var lyr_KecBangunrejo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecBangunrejo_0, 
                style: style_KecBangunrejo_0,
                interactive: true,
                title: '<img src="styles/legend/KecBangunrejo_0.png" /> Kec.  Bangunrejo'
            });
var format_KecTegineneng_1 = new ol.format.GeoJSON();
var features_KecTegineneng_1 = format_KecTegineneng_1.readFeatures(json_KecTegineneng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecTegineneng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecTegineneng_1.addFeatures(features_KecTegineneng_1);
var lyr_KecTegineneng_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecTegineneng_1, 
                style: style_KecTegineneng_1,
                interactive: true,
                title: '<img src="styles/legend/KecTegineneng_1.png" /> Kec. Tegineneng'
            });
var format_KecGunungsugih_2 = new ol.format.GeoJSON();
var features_KecGunungsugih_2 = format_KecGunungsugih_2.readFeatures(json_KecGunungsugih_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecGunungsugih_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecGunungsugih_2.addFeatures(features_KecGunungsugih_2);
var lyr_KecGunungsugih_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecGunungsugih_2, 
                style: style_KecGunungsugih_2,
                interactive: true,
                title: '<img src="styles/legend/KecGunungsugih_2.png" /> Kec. Gunungsugih'
            });
var format_KecBekri_3 = new ol.format.GeoJSON();
var features_KecBekri_3 = format_KecBekri_3.readFeatures(json_KecBekri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecBekri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecBekri_3.addFeatures(features_KecBekri_3);
var lyr_KecBekri_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecBekri_3, 
                style: style_KecBekri_3,
                interactive: true,
                title: '<img src="styles/legend/KecBekri_3.png" /> Kec. Bekri'
            });
var format_KecBumiratu_4 = new ol.format.GeoJSON();
var features_KecBumiratu_4 = format_KecBumiratu_4.readFeatures(json_KecBumiratu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecBumiratu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecBumiratu_4.addFeatures(features_KecBumiratu_4);
var lyr_KecBumiratu_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecBumiratu_4, 
                style: style_KecBumiratu_4,
                interactive: true,
                title: '<img src="styles/legend/KecBumiratu_4.png" /> Kec. Bumiratu'
            });
var format_KecAnakTuha_5 = new ol.format.GeoJSON();
var features_KecAnakTuha_5 = format_KecAnakTuha_5.readFeatures(json_KecAnakTuha_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecAnakTuha_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecAnakTuha_5.addFeatures(features_KecAnakTuha_5);
var lyr_KecAnakTuha_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecAnakTuha_5, 
                style: style_KecAnakTuha_5,
                interactive: true,
                title: '<img src="styles/legend/KecAnakTuha_5.png" /> Kec.AnakTuha'
            });
var format_KecPadangratu_6 = new ol.format.GeoJSON();
var features_KecPadangratu_6 = format_KecPadangratu_6.readFeatures(json_KecPadangratu_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecPadangratu_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecPadangratu_6.addFeatures(features_KecPadangratu_6);
var lyr_KecPadangratu_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecPadangratu_6, 
                style: style_KecPadangratu_6,
                interactive: true,
                title: '<img src="styles/legend/KecPadangratu_6.png" /> Kec. Padangratu'
            });

lyr_KecBangunrejo_0.setVisible(true);lyr_KecTegineneng_1.setVisible(true);lyr_KecGunungsugih_2.setVisible(true);lyr_KecBekri_3.setVisible(true);lyr_KecBumiratu_4.setVisible(true);lyr_KecAnakTuha_5.setVisible(true);lyr_KecPadangratu_6.setVisible(true);
var layersList = [lyr_KecBangunrejo_0,lyr_KecTegineneng_1,lyr_KecGunungsugih_2,lyr_KecBekri_3,lyr_KecBumiratu_4,lyr_KecAnakTuha_5,lyr_KecPadangratu_6];
lyr_KecBangunrejo_0.set('fieldAliases', {'id': 'id', });
lyr_KecTegineneng_1.set('fieldAliases', {'id': 'id', });
lyr_KecGunungsugih_2.set('fieldAliases', {'id': 'id', });
lyr_KecBekri_3.set('fieldAliases', {'id': 'id', });
lyr_KecBumiratu_4.set('fieldAliases', {'id': 'id', });
lyr_KecAnakTuha_5.set('fieldAliases', {'id': 'id', });
lyr_KecPadangratu_6.set('fieldAliases', {'id': 'id', });
lyr_KecBangunrejo_0.set('fieldImages', {'id': '', });
lyr_KecTegineneng_1.set('fieldImages', {'id': '', });
lyr_KecGunungsugih_2.set('fieldImages', {'id': '', });
lyr_KecBekri_3.set('fieldImages', {'id': '', });
lyr_KecBumiratu_4.set('fieldImages', {'id': '', });
lyr_KecAnakTuha_5.set('fieldImages', {'id': '', });
lyr_KecPadangratu_6.set('fieldImages', {'id': '', });
lyr_KecBangunrejo_0.set('fieldLabels', {'id': 'no label', });
lyr_KecTegineneng_1.set('fieldLabels', {'id': 'no label', });
lyr_KecGunungsugih_2.set('fieldLabels', {'id': 'no label', });
lyr_KecBekri_3.set('fieldLabels', {'id': 'no label', });
lyr_KecBumiratu_4.set('fieldLabels', {'id': 'no label', });
lyr_KecAnakTuha_5.set('fieldLabels', {'id': 'no label', });
lyr_KecPadangratu_6.set('fieldLabels', {'id': 'no label', });
lyr_KecPadangratu_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});