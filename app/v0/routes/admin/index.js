var express = require('express');
var router = express.Router();
var installation_setting = require('../../controllers/admin/installation_setting'); // include installation_setting controller ////
var admin = require('../../controllers/admin/admin'); // include admin_setting controller ////
var city = require('../../controllers/admin/city'); // include city controller ////
var country = require('../../controllers/admin/country'); // include country controller ////
var delivery = require('../../controllers/admin/delivery'); // include delivery controller ////
var service = require('../../controllers/admin/service'); // include service controller ////
var vehicle = require('../../controllers/admin/vehicle'); // include vehicle controller ////
var document = require('../../controllers/admin/document');// include document controller ////

    router.post('/update_store_time',admin.update_store_time);
    router.post('/update_wallet',admin.update_wallet);
    router.post('/insert_daily_weekly_data',admin.insert_daily_weekly_data);
    router.post('/updateDatabaseTable',admin.updateDatabaseTable);
    router.post('/updateItemNewTable',admin.updateItemNewTable);
    // END AUTO UPDATE DB QUERY API.

    router.post('/admin/upload_store_data_excel',admin.upload_store_data_excel);


    // REGULAR API FOR APP.
    router.post('/api/admin/forgot_password',admin.forgot_password);
    router.post('/api/admin/otp_verification',admin.otp_verification);
    router.post('/api/admin/check_detail',admin.check_detail);
    router.post('/api/admin/new_password',admin.new_password);
    router.post('/api/admin/check_referral',admin.check_referral);
    router.post('/api/admin/get_setting_detail',admin.get_setting_detail);
    router.post('/api/admin/get_setting_detail_for_mail_config',admin.get_setting_detail_for_mail_config);
    router.post('/api/admin/get_app_keys',installation_setting.get_app_keys);
    router.post('/api/admin/check_app_keys',installation_setting.check_app_keys);
    router.post('/api/admin/get_image_setting',installation_setting.get_image_setting);

    router.post('/api/admin/get_country_list',country.get_country_list);
    router.get('/api/admin/get_country_list',country.get_country_list);
    router.post('/api/admin/get_city_list',city.get_city_list);
    router.post('/api/admin/get_city_full_detail_list',city.get_city_full_detail_list);
    router.post('/admin/get_all_city_list',city.all_city_list);
    
    router.post('/api/admin/get_vehicle_list',vehicle.get_vehicle_list);
    router.post('/api/admin/get_city_lists',vehicle.get_city_lists);
    router.post('/api/admin/get_service_list',service.get_service_list);
    router.post('/api/admin/get_delivery_list',delivery.get_delivery_list);
    router.get('/api/admin/get_delivery_list',delivery.get_delivery_list);
    router.post('/api/admin/get_delivery_list_for_city',delivery.get_delivery_list_for_city);

    router.post('/api/admin/get_document_list',document.get_document_list);
    router.post('/api/admin/upload_document',document.upload_document);

module.exports = router;
