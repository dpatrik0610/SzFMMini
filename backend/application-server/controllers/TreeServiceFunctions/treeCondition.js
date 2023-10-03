const { TreeRepository } = require('../../models/TreeRepository');
const treeRepository = new TreeRepository();

async function treeCondition(req, res) {
  const userId = req.user.userId;
  const treeId = await treeRepository.findAliveTreeId(userId);
  if (!treeId) {
    return res.status(400).json({ message: "You don't have any alive trees!" });
  }
  try {
    // Get the last sprinkled date of the tree
    const lastSprinkleDate = await treeRepository.getSprinkleDate(userId, treeId);
    if (!lastSprinkleDate) {
      return res.status(404).json({ success: false, message: 'Tree not found' });
    }

    // Calculate the time elapsed since the last sprinkling
    const currentTime = new Date();
    const timeElapsed = currentTime - lastSprinkleDate;
    const wateringThreshold = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (timeElapsed >= wateringThreshold) {
      // Perform chopping action if the tree hasn't been sprinkled within the threshold
      const chopped = await treeRepository.chopTree(userId, treeId);

      if (chopped) {
        res.status(200).json({ success: false, message: 'You forgot to sprinkle your tree :(' });
      } else {
        res.status(500).json({ message: 'Failed to chop tree' });
      }
    } else {
      // The tree was sprinkled within the threshold, no action required
      res.status(200).json({ success: true, message: 'Tree is well-watered' });
    }
  } catch (error) {
    res.status(500).json({ message: `Error evaluating sprinkle status: ${error.message}` });
  }
}

module.exports = treeCondition;
