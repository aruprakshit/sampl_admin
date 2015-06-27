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
      var seldate = new Date(dates[0]);
      seldates = [];
      var count = 0;
      while ( count < data.interval ) {
        date = new Date();
        date.setDate(seldate.getDate() + count +1);
        seldates.push(date);
        count++;
      }
      $(this).datepick('setDate', seldates);
      console.log(seldates);
    }
    });
  });
});
