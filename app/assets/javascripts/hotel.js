$(function() {
  $.get( "/admin/hotels/fetch_dates", { package_type: 'weekend' } )
  .done(function( data ) {
    $('#hotel_booking_date').datepick({
      dateFormat: 'yyyy-mm-dd',
      multiSelect: data.interval,
      onDate: function(date, current){
        var date_str = $.datepick.formatDate('yyyy-mm-dd', date);
        return {selectable: ($.inArray(date_str,data.dates) != -1)};
      },
      showTrigger: '#calImg',
      onSelect: function(dates) {
        console.log(dates);
        $(this).datepick('setDate', [dates[0], date.interval]);
      }
    });
  });
});
