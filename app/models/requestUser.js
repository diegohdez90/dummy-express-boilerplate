/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * User schema
 */

const RequestUserSchema = new Schema({
  requestName: {
    type: String,
    required: true,
    trim: true
  },
  hotel: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  hotelContactPhone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  },
  email: {
    type: String,
    validate: {
      validator: function(v) {
        // eslint-disable-next-line no-useless-escape
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email account!`
    },
    required: [true, 'Email contact is required']
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

RequestUserSchema.method({});

/**
 * Statics
 */

RequestUserSchema.static({});

/**
 * Register
 */

module.exports = mongoose.model('RequestUser', RequestUserSchema);
