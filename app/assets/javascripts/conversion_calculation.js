function industrySelect(){
    $("#industry_names li").click(function(){
    industryId = '#'+ $(this).attr("class");
    console.log(industryId);
    $(industryId).toggleClass("hidden");
  });
}

function inputCalculations(){
  $("tbody tr th input").click(function(){
    inputClass = '#'+ $(this).attr("class");
    console.log(inputClass);
    $(inputClass + '_view_input').keyup(function(e) {
      console.log(this)
      view_count = $(this).val();
      var view_count_number = Math.abs(view_count);
      console.log(view_count);
      var masConversionRate = .13;
      var masViewsConversions = eval(view_count_number)*masConversionRate;
      $(inputClass + '_mas_conversion_input').val(masViewsConversions);

      var industryConversionRate = $(inputClass + "_industry_conversion_rate").val();
      var industryViewsConversions = eval(view_count_number)*industryConversionRate;
      $(inputClass + '_industry_conversion_input').val(industryViewsConversions);
    });
  });
}

function runScript(){
  industrySelect();
  inputCalculations();
}

window.onload = runScript


