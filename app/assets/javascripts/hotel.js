$(function() {
  $('#hotel_booking_date').datepick({ 
    rangeSelect: true, dateFormat: 'yyyy-mm-dd', showTrigger: '#calImg'
  });

  $.get( "/admin/hotels/fetch_dates", { package_type: 'weekend' } )
  .done(function( data ) {
    console.log( data.dates );
    $('#hotel_booking_date').datepick({
      beforeShowDay: function(date){
        var string = jQuery.datepicker.formatDate('yyyy-mm-dd', date);
        console.log(data.dates.indexOf(string));
        return [ data.dates.indexOf(string) != -1 ]
      }
    });
  });
});
