const TSNE = require('tsne-js');
const model = new TSNE({
    dim: 2,
    perplexity: 30.0,
    earlyExaggeration: 4.0,
    learningRate: 100.0,
    nIter: 1000,
    metric: 'euclidean'
});

module.exports.main = (event, context, callback) => {
    callback(null, event.map(period => {
        model.init({
            data: period,
            type: 'dense'
        });
        for(let k = 0; k < 500; k++) {
            tsne.step();
        }
        return tsne.getSolution();
    }));
};
