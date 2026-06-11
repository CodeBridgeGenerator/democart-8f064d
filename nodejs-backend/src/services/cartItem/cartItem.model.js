
    module.exports = function (app) {
        const modelName = "cart_items";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            user: { type: Schema.Types.ObjectId, comment: "User, dropdown, false, true, false, true, true, true, true, user, users, many-to-one, email," },
voucher: { type: Schema.Types.ObjectId, comment: "Voucher, dropdown, false, true, true, true, true, true, true, voucher, vouchers, many-to-one, title," },
quantity: { type: Number, required: true, comment: "Quantity (Current Cart, Pre-checkout), input-number, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: false },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };