jQuery.fn.meghadd = function(){
  var el = $(this);
  el.each(function(){
      var option = [],
          counter = 0;

      $(this).find('option').each(function(){
        option[counter] = {
            name : $(this).text(),
            value : $(this).val()
        };

        counter++
      });

      console.log(option);
  })
}
