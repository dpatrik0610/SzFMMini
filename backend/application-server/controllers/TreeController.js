const chopTree = require('./TreeController/chopTreeById');
const getTree = require('./TreeController/getTreeById');
const getTreeAge = require('./TreeController/getTreeAgeById');
const getTreeState = require('./TreeController/getTreeStateById');
const plantTree = require('./TreeController/plantTreeForUser');
const promoteTreeState = require('./TreeController/promoteTreeStateForUser');
const getActiveTree = require('./TreeController/getActiveTree');
const sprinkleActiveTree = require('./TreeController/sprinkleActiveTree');
const treeCondition = require('./TreeController/treeCondition');

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
