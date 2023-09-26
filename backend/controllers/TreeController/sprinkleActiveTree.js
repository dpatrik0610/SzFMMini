const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function sprinkleActiveTree(req, res) {
    const userId = req.user.userId;

    // Find the active tree for the user
    const activeTreeId = await treeRepository.findAliveTreeId(userId);

    if (!activeTreeId) {
        return res.status(400).json({ message: 'No active tree found for the user' });
    }

    const result = await treeRepository.sprinkleTree(userId, activeTreeId);

    if (result.success) {
        return res.status(200).json({ message: 'Tree sprinkled successfully' });
    } else {
        return res.status(500).json({ message: result.message });
    }
}

module.exports = sprinkleActiveTree;
