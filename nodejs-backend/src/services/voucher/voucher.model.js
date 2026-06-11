
    module.exports = function (app) {
        const modelName = "vouchers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            category_id: { type: [Schema.Types.ObjectId], ref: "categories", comment: "Category, dropdown, false, true, true, true, true, true, true, category, categories, one-to-many, name," },
title: { type:  String , required: true, index: true, trim: true, comment: "Title, input-text, false, true, true, true, true, true, true, , , , ," },
points: { type: Number, required: true, comment: "Points, input-number, false, true, true, true, true, true, true, , , , ," },
image: { type:  String , trim: true, comment: "Image, file-upload, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , trim: true, comment: "Description, textarea, false, true, true, true, true, true, false, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };