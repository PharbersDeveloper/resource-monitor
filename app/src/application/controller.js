import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import {A } from '@ember/array';
import ENV from "resource-monitor/config/environment";
import GenerateChartConfig from "resource-monitor/mixins/generate-chart-config";

let queryAddress = EmberObject.create({
    host: ENV.Host,
    port: ENV.Port,
    version: ENV.Version,
    db: ENV.DB
}),
dynamic = EmberObject.create({
    isDynamic: true,
    interval: 1000
}),
conditionData = function(size,type) {
    return {
        "model": "es",
        "query": {
            "search": {
                "size": size,
                "sort": ["%2Btime.keyword"],
            }
        },
        "format": [
            {
                "class": "pivot",
                "args": {
                    "yAxis": "%2Btime",
                    "xAxis": "hostname",
                    "value": type	// cpu / receive / transmit / disk / memory
                }
            }
        ]
    }
};

export default Controller.extend(GenerateChartConfig,{
    init() {
        this._super(...arguments);
        this.set('monitoring',this.generateLines("monitoringContainer","monitoringExampleForCPU",0,100));
        this.set('monitoringMemory',this.generateLines("monitoringContainer1","monitoringExampleForMemory",0,100));
        this.set('monitoringReceive',this.generateLines("monitoringContainer2","monitoringExampleForReceive"));
        this.set('monitoringTransmit',this.generateLines("monitoringContainer3","monitoringExampleForTransmit"));
        this.set('monitoringDisk',this.generateLines("monitoringContainer4","monitoringExampleForDisk"));
    }, 
    
    monitoringConditionForCPU: A([{
        queryAddress,
        dynamic,
        data: conditionData(1000,'cpu')
    }]),
   
    monitoringConditionForMemory: A([{
        queryAddress,
        dynamic,
        data: conditionData(1000,'memory')
    }]),
   
    monitoringConditionForReceive: A([{
        queryAddress,
        dynamic,
        data: conditionData(1000,'receive')
    }]),
   
    monitoringConditionForTransmit: A([{
        queryAddress,
        dynamic,
        data: conditionData(1000,'transmit')
    }]),
   
    monitoringConditionForDisk: A([{
        queryAddress,
        dynamic,
        data: conditionData(1000,'disk')
    }]),

});
