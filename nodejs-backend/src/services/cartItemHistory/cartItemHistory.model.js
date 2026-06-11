
    module.exports = function (app) {
        const modelName = "cart_item_history";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            user: { type: Schema.Types.ObjectId, comment: "User, dropdown, false, true, false, true, false, true, true, user, users, many-to-one, email," },
voucher: { type: Schema.Types.ObjectId, comment: "Voucher, dropdown, false, true, false, true, false, true, true, voucher, vouchers, many-to-one, title," },
quantity: { type: Number, required: true, comment: "Quantity, input-number, false, true, false, true, false, true, true, , , , ," },
timestamp: { type: Date, comment: "Timestamp (Order History After Checkout), calendar, false, false, false, true, false, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: false },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };