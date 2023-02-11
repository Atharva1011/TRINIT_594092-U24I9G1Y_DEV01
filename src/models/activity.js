const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema(
  {
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      trim: true,
    },
    sector: {
      type: String,
      trim: true,
    },
    totalFundingReq: {
      type: Number,
      default: 0,
    },
    totalFundingRaised: {
      type: Number,
      default: 0,
    },
    ngoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ngo",
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    contactDetails: {
      type: Number,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    philaInvolved: [
      {
        id: {
          type: mongoose.Schema.Type.ObjectId,
          ref: "Phila",
        },
        name: {
          type: String,
          trim: true,
        },
        fundingAmtRaised: {
          type: Number,
          default: true,
        },
        ananymous: {
          type: Boolean,
        },
        donDate: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
