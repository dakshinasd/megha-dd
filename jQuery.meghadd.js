jQuery.fn.meghadd = function(config){
  var el        = $(this);
  var container = el.parent();

  el.each(function(){
      var option = [],
          counter = 0,
          printOptions = "";

      //adding all the element into one array
      $(this).find('option').each(function(){
        option[counter] = {
            name : $(this).text(),
            value : $(this).val(),

            //---- TI 1.0 Capture Attributes ----
            // attr : $(this).attr()
        };

        counter++;
      });

      for(var i=0; i < option.length; i++){
        printOptions = printOptions + "<li class='megha-dd-item' data-value='" + option[i]['value'] + "'>" + option[i]['name'] + "</li>";
      }

      //hiding the original dd
      el.css('display','none');

      $(this).parent().append('<div class="megha-dd-wrapper"><a class="megha-dd-placeholder" href="#">Hello</a><ul class="megha-dd-items">' + printOptions + '</ul></div>');
  });

  // drop down click event
  container.find('a.megha-dd-placeholder').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('in');
  })
}
