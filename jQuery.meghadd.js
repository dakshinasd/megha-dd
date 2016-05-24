jQuery.fn.meghadd = function(config){
  var el            = $(this);
  var container     = el.parent();
  var _conBaseText  = ""


  //================ processing config values ====================//
  if(config.baseText != undefined){
    _conBaseText = config.baseText;
  }
  else{
    _conBaseText = "Please select a value";
  }
  //============== EOF processing config values ==================//

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
        printOptions = printOptions + "<li class='megha-dd-item'><a href='#' data-value='" + option[i]['value'] + "' >" + option[i]['name'] + "</a></li>";
      }

      //hiding the original dd
      el.css('display','none');

      $(this).parent().append('<div class="megha-dd-wrapper"><a class="megha-dd-placeholder" href="#">' + _conBaseText + '</a><ul class="megha-dd-items">' + printOptions + '</ul></div>');
  });

  // drop down click event
  container.find('a.megha-dd-placeholder').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().toggleClass('in');
  });

  //click on a dropdown item
  $('.megha-dd-item').on('click', function(){
    //remove selected class from other and add it to this one
    $(this).addClass('selected').siblings().removeClass('selected');

    // store selected text and values in variables
    var selectedText  = $(this).text();
    var selectedVal   = $(this).val();

    $(this).closest('.megha-dd-items').siblings('.megha-dd-placeholder').text(selectedText);
  });

  $(document).click(function() {
    $(".megha-dd-wrapper").removeClass('in');
  });

}
