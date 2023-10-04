const chopTree = require('./TreeServiceFunctions/chopTreeById');
const getTree = require('./TreeServiceFunctions/getTreeById');
const plantTree = require('./TreeServiceFunctions/plantTreeForUser');
const promoteTreeState = require('./TreeServiceFunctions/promoteTreeStateForUser');
const getActiveTree = require('./TreeServiceFunctions/getActiveTree');
const sprinkleActiveTree = require('./TreeServiceFunctions/sprinkleActiveTree');

module.exports = {
    chopTree,
    getTree,
    plantTree,
    promoteTreeState,
    getActiveTree,
    sprinkleActiveTree,
};
