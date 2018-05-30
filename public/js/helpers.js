var Handlebars = require('handlebars');

Handlebars.registerHelper('getDay', function (date) {
    return date.slice(3, 5);
});

Handlebars.registerHelper('getFormattedMonthYearDate', function (date) {
    var fullDate = new Date(date);
    var locale = 'en-us';

    var monthName = fullDate.toLocaleString(locale, {month: 'short'});
    var year = fullDate.getFullYear();

    return monthName + ' ' + year;
});