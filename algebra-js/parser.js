"use strict";

var GenPro = require('genprojs');
var Variable = GenPro.Variable;
var Chromosome = GenPro.Chromosome;



class Sovler{

    getInfos(){
        return this._infos;
    }

    setInfos(infos){
        this._infos = infos;
    }

     getSimplifyExprString(expr){
        let exprStr = Chromosome.toString(expr, this.getAvailableFunctions(), this.getVariables());
        var algebra = require('algebra.js');
        var exp = new algebra.parse(exprStr);
        exp = exp.simplify();
        return exp.toString();
    }
    
     getVariables(){
        return ['holeSiteX', 'holeSiteY', 'holeSiteZ','collsionPointX','collsionPointY','collsionPointZ'].map(key => new Variable(key));
    }
    
     getAvailableFunctions(){
        var add = GenPro.BasicMathOperations.add;
        var subtract = GenPro.BasicMathOperations.subtract;
        return [add, subtract];
    }
    
     getTrainingData(){
        var trainingData = [];
        var infos = this.getInfos();
        for(var i in infos){
            var info = infos[i];
            trainingData.push({
                holeSiteX:parseFloat(info.input['hole.SiteX']),
                holeSiteY:parseFloat(info.input['hole.SiteY']),
                holeSiteZ:parseFloat(info.input['hole.SiteZ']),
                collsionPointX:parseFloat(info.input['collsionPoint.x']),
                collsionPointY:parseFloat(info.input['collsionPoint.y']),
                collsionPointZ:parseFloat(info.input['collsionPoint.z']),
                output:eval(info.output[this.getOutputKey()])
            })
        }
        return trainingData;
    }
    
    getOutputKey(){
        return  this._outputKey;
    }
    
    setOuputKey(key){
        this._outputKey = key;
    }
    
     sovle(){
    
        var fitnessFn = (individual, functions, variables, data) => {
            //均方根误差 https://blog.csdn.net/qq_27584277/article/details/80185362
            let distanceSum = data.reduce((sum, vt) => {
                let val = Chromosome.val(individual, functions, variables, vt);
                return sum + Math.pow((vt.output - val), 2);
            }, 0);
            let error = Math.sqrt(distanceSum / data.length);
            //var complex = Chromosome.toString(individual, functions, variables).length;
            return (1 / error);
        };
        
        var data = this.getTrainingData();
     
        var options = {
            fitnessFn: fitnessFn,
            populationSize: 100,
            minDepth: 1,
            maxDepth: 8,
            crossoverProbability: 0.4,
            mutationProbability: 0.2,
            maxIteration: 100,
        };
         
    
        var result = GenPro.run(
            this.getAvailableFunctions(),
            this.getVariables(),
            data,
            data,
            options
        );
        return result.stat.maxIndividual;
    }
    
     test(individual){
        var data = this.getTrainingData();
        data.forEach(td => {
            let calculatedValue = Chromosome.val(individual, this.getAvailableFunctions(), this.getVariables(), td);
            console.log('---------------------------');
            console.log('Predicted: ' + calculatedValue);
            console.log('Actual: ' + td.output);
            console.log('Delta: ' + Math.abs(calculatedValue - td.output));
        });
    }

}



// var solver = new Sovler();
// solver.setInfos(infos);
// solver.setOuputKey('hole.SiteX');
// var result = solver.sovle();
// console.log('result: ' ,solver.getSimplifyExprString(result));
// solver.test(result);