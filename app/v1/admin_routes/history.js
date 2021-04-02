var history = require('../admin_controllers/history'); // include history controller ////


module.exports = function (app) {
    app.route('/api/admin/history').post(history.admin_history);
    app.route('/api/admin/get_order_data').post(history.get_order_data);
    app.route('/admin/admin_history_detail').post(history.admin_history_detail);
    app.route('/api/admin/delivery_list_search_sort').post(history.delivery_list_search_sort);
    app.route('/api/admin/admin_requests_detail').post(history.admin_requests_detail);

    //app.route('/admin/get_order_detail').post(history.get_order_detail);
    app.route('/admin/view_history').post(history.view_history);
    app.route('/admin/view_provider_history').post(history.view_provider_history);
    app.route('/admin/get_request_data').post(history.get_request_data);
    app.route('/api/admin/history_export_excel').post(history.history_export_excel);
    
    app.route('/api/admin/deliveries_export_excel').post(history.deliveries_export_excel);
    
    

};





