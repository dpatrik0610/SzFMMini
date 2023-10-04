const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function sprinkleActiveTree(req, res) {
    const userId = req.user.userId;

    // Find the active tree for the user
    const activeTreeId = await treeRepository.findAliveTreeId(userId);

    if (!activeTreeId) {
        return res.status(400).json({ message: 'No active tree found for the user' });
    }

    const currentDate = new Date();
    const updatedTreeData = { last_sprinkled: currentDate };

    const result = await treeRepository.updateTreeById(activeTreeId, updatedTreeData);

    if (result) {
        return res.status(200).json({ message: 'Tree sprinkled successfully' });
    } else {
        return res.status(500).json({ message: 'Failed to sprinkle tree' });
    }
}

module.exports = sprinkleActiveTree;
