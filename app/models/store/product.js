var mongoose = require('mongoose');
var schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var product = new schema({
    unique_id: Number,
    name:[{type: String,default:[]}],
    is_visible_in_store: {type: Boolean, default: false},
    store_id: {type: schema.Types.ObjectId},
    super_product_id: {type: schema.Types.ObjectId, default: null},
    group_id: {type: schema.Types.ObjectId, default: null},
    unique_id_for_store_data: {type: Number, default: 0},
    sequence_number: {type: Number, default: 0},
    product_time: {
        type: Array, default: [ 
            {
                "is_product_open" : true,
                "is_product_open_full_time" : true,
                "day" : 0,
                "day_time" : []
            }, 
            {
                "is_product_open" : true,
                "is_product_open_full_time" : true,
                "day" : 1,
                "day_time" : []
            }, 
            {
                "is_product_open" : true,
                "is_product_open_full_time" : true,
                "day" : 2,
                "day_time" : []
            }, 
            {
                "is_product_open" : true,
                "is_product_open_full_time" : true,
                "day" : 3,
                "day_time" : []
            }, 
            {
                "is_product_open" : true,
                "is_product_open_full_time" : true,
                "day" : 4,
                "day_time" : []
            }, 
            {
                "is_product_open" : true,
                "is_product_open_full_time" : true,
                "day" : 5,
                "day_time" : []
            }, 
            {
                "is_product_open" : true,
                "is_product_open_full_time" : true,
                "day" : 6,
                "day_time" : []
            }
        ]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }

}, {
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

product.index({franchise_product_id: 1}, {background: true});
product.index({store_id: 1}, {background: true});

product.plugin(autoIncrement.plugin, {model: 'product', field: 'unique_id' , startAt: 1,incrementBy: 1});
module.exports = mongoose.model('product', product);