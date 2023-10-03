const { ObjectId } = require('mongodb');

async function sprinkleTree(userRepository, userId, treeId) {
    try {
        const currentDate = new Date();

        await userRepository.collection.findOneAndUpdate(
            {
                _id: new ObjectId(userId),
                'planted_trees.treeId': new ObjectId(treeId)
            },
            {
                $set: { 'planted_trees.$.last_sprinkled': currentDate }
            },
            { returnOriginal: false }
        );

        return { success: true, message: 'Tree sprinkled successfully' };
    } catch (error) {
        return { success: false, message: `Error sprinkling tree: ${error.message}` };
    }
}

module.exports = sprinkleTree;
