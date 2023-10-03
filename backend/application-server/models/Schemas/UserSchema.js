const userSchema = {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    registration_date: { type: Date, default: new Date() },
    last_login_date: { type: Date, default: new Date() },
    planted_trees: [
      {
        tree_id: { type: ObjectID, ref: 'Tree' },
        plant_date: { type: Date, required: true },
        tree_type: { type: String, required: true },
        tree_state: { type: Number, default: 1 },
        last_sprinkled: {type: Date, required: true}
      },
    ],
};

module.exports = { userSchema };