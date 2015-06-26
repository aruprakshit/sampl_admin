$(function() {

  $.get( "/admin/hotels/fetch_dates", { package_type: 'weekend' } )
  .done(function( data ) {
    console.log( data.dates );
    $('#hotel_booking_date').datepick({
      dateFormat: 'yyyy-mm-dd',
      multiSelect: 4,
      onDate: function(date, current){
        var date_str = $.datepick.formatDate('yyyy-mm-dd', date);
        console.log(data.dates.indexOf(date_str));
        return {selectable: ($.inArray(date_str,data.dates) != -1)};
      },
      showTrigger: '#calImg'
    });
  });
});
