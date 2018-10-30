var GenPro = require('genprojs');
var Variable = GenPro.Variable;
var add = GenPro.BasicMathOperations.add;
var subtract = GenPro.BasicMathOperations.subtract;
 
var availableFunctions = [add, subtract];
 
/*....ommitted code...*/

var variables = ['x', 'y', 'z'].map(key => new Variable(key));

var trainingData = [
    {
        x: 20,
        y: 30,
        z: 50,
        output: 100
    },
    {
        x: 120,
        y: 130,
        z: 250,
        output: 500
    },
    {
        x: 2,
        y: 3,
        z: 5,
        output: 10
    }
]

var testingData = [
    {
        x: 1,
        y: 2,
        z: 3,
        output: 6
    },
    {
        x: 1,
        y: 3,
        z: 5,
        output: 9
    },
    {
        x: 2,
        y: 3,
        z: 10,
        output: 15
    }
]

var Chromosome = GenPro.Chromosome;

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


var options = {
    fitnessFn: fitnessFn,
    populationSize: 100,
    minDepth: 2,
    maxDepth: 3,
    crossoverProbability: 0.6,
    mutationProbability: 0.2,
    maxIteration: 50,
};
 
var result = GenPro.run(
    availableFunctions,
    variables,
    trainingData,
    testingData,
    options
);

// get best individual
let bestIndividual = result.stat.maxIndividual;
let bestExpr = Chromosome.toString(bestIndividual, availableFunctions, variables);
var algebra = require('algebra.js');
var exp = new algebra.parse(bestExpr);
exp = exp.simplify();
console.log("bestExpr: " + exp.toString());
// evaluate against test data
testingData.forEach(td => {
    let calculatedValue = Chromosome.val(bestIndividual, availableFunctions, variables, td);
    console.log('---------------------------');
    console.log('Predicted: ' + calculatedValue);
    console.log('Actual: ' + td.output);
    console.log('Delta: ' + Math.abs(calculatedValue - td.output));
});