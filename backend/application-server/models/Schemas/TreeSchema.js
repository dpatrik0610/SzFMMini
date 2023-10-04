const treeSchema = {
        user_id: {type: ObjectID, ref: 'User'},
        tree_id: { type: ObjectID, ref: 'Tree' },
        plant_date: { type: Date, required: true },
        tree_type: { type: String, required: true },
        tree_state: { type: String, default: 'seedling' },
        last_sprinkled: {type: Date, required: true}
};

module.exports = { treeSchema };
  