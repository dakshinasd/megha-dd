jQuery.fn.meghadd = function(){
  var el = $(this);
  el.each(function(){
      var option = [],
          counter = 0;

      //adding all the element into one array
      $(this).find('option').each(function(){
        option[counter] = {
            name : $(this).text(),
            value : $(this).val(),

            //---- TI 1.0 Capture Attributes ----
            // attr : $(this).attr()
        };

        counter++
      });

      //hiding the original dd
      el.css('display','none');

      el.parent().append('<div class="megha-dd-wrapper"><a href="#">Hello</a></div>');

      console.log(option);
  })
}
