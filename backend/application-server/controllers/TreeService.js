const chopTree = require('./TreeServiceFunctions/chopTreeById');
const getTree = require('./TreeServiceFunctions/getTreeById');
const getTreeAge = require('./TreeServiceFunctions/getTreeAgeById');
const getTreeState = require('./TreeServiceFunctions/getTreeStateById');
const plantTree = require('./TreeServiceFunctions/plantTreeForUser');
const promoteTreeState = require('./TreeServiceFunctions/promoteTreeStateForUser');
const getActiveTree = require('./TreeServiceFunctions/getActiveTree');
const sprinkleActiveTree = require('./TreeServiceFunctions/sprinkleActiveTree');
const treeCondition = require('./TreeServiceFunctions/treeCondition');

module.exports = {
    chopTree,
    getTree,
    getTreeAge,
    getTreeState,
    plantTree,
    promoteTreeState,
    getActiveTree,
    sprinkleActiveTree,
    treeCondition,
};
