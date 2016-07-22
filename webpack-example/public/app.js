let { View, ViewModel } = require('../components/calendar/');

$(function () {
    let WVM = new ViewModel();
    WVM.createDefaultWeek();
    $('body').append(View(WVM.getWeek()));
});
