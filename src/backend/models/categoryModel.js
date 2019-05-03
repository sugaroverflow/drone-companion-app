const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoryModel = new Schema(
  {
    // category_id: { type: String },
    // titleEng: { type: String },
    // titleFra: { type: String },
    // descEng: { type: String },
    // descFra: { type: String },
    // bannerUrl: { type: String },
    // icon: { type: String },
    // orderNum: { type: Number },
    // createdDate: { type: Date },
    // deletedDate: { type: Date },
    // updatedDate: { type: Date },
    // lastUpdatedUserId: { type: Number },
    category_id: { type: Number },
    CATEGORY_TITLE_ETXT: { type: String },
    CATEGORY_TITLE_FTXT: { type: String },
    CATEGORY_DESCRIPTION_ETXT: { type: String },
    CATEGORY_DESCRIPTION_FTXT: { type: String },
    BANNER: { type: String },
    ICON: { type: String },
    DISPLAY_ORDER_NUM: { type: Number },
    DATE_CREATED_DTE: { type: Date },
    DATE_DELETED_DTE: { type: Date },
    DATE_LAST_UPDATE_DTE: { type: Date },
    USER_LAST_UPDATE_ID: { type: Number },
  }
);

module.exports = mongoose.model('ta001_categories', categoryModel);
