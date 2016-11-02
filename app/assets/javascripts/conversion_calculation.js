function industrySelect(){

    $("#industry_names li").click(function(){
    industryId = '#'+ $(this).attr("class");
    console.log(industryId);
    $(industryId).toggleClass("hidden");
    $(industryId + '_view_input').keyup(function(e) {
      view_count = $(this).val();
      var view_count_number = Math.abs(view_count);
      console.log(view_count);
      var masConversionRate = .13;
      var masViewsConversions = eval(view_count_number)*masConversionRate;
      $(industryId + '_mas_conversion_input').val(masViewsConversions);

      var industryConversionRate = $(industryId + "_industry_conversion_rate").val();
      var industryViewsConversions = eval(view_count_number)*industryConversionRate;
      $(industryId + '_industry_conversion_input').val(industryViewsConversions);
    });
  });
}

window.onload = industrySelect


