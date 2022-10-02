const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const removeAccent = require("../util/removeAccent");

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: "Một sản phẩm từ Bros"
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: [String],
    required: true
  },
  productType: {
    main: String,
    sub: String
  },
  color: {
    type: [String],
    required: true
  },
  pattern: {
    type: [String],
    required: false
  },
  tags: {
    type: [String],
    required: false
  },
  images: {
    type: [String],
    required: true
  },
  dateAdded: {
    type: Date,
    required: false,
    default: Date.now
  },
  isSale: {
    status: {
      type: Boolean,
      default: false
    },
    percent: {
      type: Number,
      default: 0
    },
    end: {
      type: Date
    }
  },
  labels: {
    type: String,
    required: false,
    default: "Shiro"
  },
  materials: {
    type: [String],
    required: true
  },
  buyCounts: {
    type: Number,
    required: false,
    default: 0
  },
  viewCounts: {
    type: Number,
    required: false,
    default: 0
  },
  rating: {
    byUser: String,
    content: String,
    star: Number
  },
  index: {
    type: Number,
    required: false,
    default: 0
  },
  comment: {
    total: {
      type: Number,
      require: false,
      default: 0
    },
    items: [
      {
        title: {
          type: String
        },
        content: {
          type: String
        },
        name: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now
        },
        star: {
          type: Number
        }
      }
    ]
  }
});


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
