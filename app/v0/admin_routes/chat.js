var chat = require('../admin_controllers/chat'); // include ads controller ////


module.exports = function (app) {
    app.route('/admin/send_chat').post(chat.send_chat);
    app.route('/admin/read_chat').post(chat.read_chat);
};





