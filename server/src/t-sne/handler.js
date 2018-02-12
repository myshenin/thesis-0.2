const tsnejs = require('tsne-js');

module.exports.main = (event, context, callback) => {
    const {data, dim, perplexity, earlyExaggeration, learningRate, nIter, metric} = event;
    const model = new tsnejs({
        dim,
        perplexity,
        earlyExaggeration,
        learningRate,
        nIter,
        metric,
    });

    model.init({data, type: 'dense'});
    model.run();
    callback(null, model.getOutput());
};