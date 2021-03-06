$(function() {
    $.get("/admin/hotels/fetch_dates", {
            package_type: 'weekend'
        })
        .done(function(data) {
            $('#hotel_booking_date').datepick({
                dateFormat: 'yyyy-mm-dd',
                multiSelect: data.interval,
                onDate: function(date, current) {
                    var date_str = $.datepick.formatDate('yyyy-mm-dd', date);
                    return {
                        selectable: ($.inArray(date_str, data.dates) != -1)
                    };
                },
                showTrigger: '#calImg',
                onSelect: function(dates) {
                    console.log(dates);
                    var seldate = new Date(dates[0]);
                    seldates = [];
                    var count = 0;
                    while (count < data.interval) {
                        date = new Date();
                        date.setDate(seldate.getDate() + count + 1);
                        seldates.push(date);
                        count++;
                    }
                    $(this).datepick('setDate', seldates);
                    console.log(seldates);
                }
            });
        });

    var projects = [{
        value: "jquery",
        label: "jQuery",
        desc: "the write less, do more, JavaScript library",
        icon: "jquery_32x32.png"
    }, {
        value: "jquery-ui",
        label: "jQuery UI",
        desc: "the official user interface library for jQuery",
        icon: "jqueryui_32x32.png"
    }, {
        value: "sizzlejs",
        label: "Sizzle JS",
        desc: "a pure-JavaScript CSS selector engine",
        icon: "sizzlejs_32x32.png"
    }];

    $("#hotel_name").autocomplete({
            source: projects,
        })
        .autocomplete("instance")._renderItem = function(ul, item) {
            return $("<li>")
                .append(item.label + "<br>" + item.desc)
                .appendTo(ul);
        };
});
