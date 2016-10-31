$(document).ready(function(){
    function industrySelect(){
        $("#industry_names").change(function(){
        industryId = '#' + $(this).val();
        console.log(industryId);
        $(industryId).removeClass("hidden");
        // $(industryId).toggleClass("visible");
      });
    }
    // $("#cep").on("change", hi);
    $("#industry_names").on("change", industrySelect);

    $('#view_input').keyup(function(e) {
      view_count = $(this).val();
      // console.log(view_count);
      var view_count_number = Math.abs(view_count);
      var masConversionRate = .13;
      var masViewsConversions = eval(view_count_number)*masConversionRate;

      var industryConversionRate = $("#industry_conversion_rate").val();
      var industryViewsConversions = eval(view_count_number)*industryConversionRate;
      
      document.getElementById('industry_conversion_input').value = industryViewsConversions;
      // document.getElementById("mas_conversion_rate").innerHTML = masConvsersions;
      document.getElementById('mas_conversion_input').value = masViewsConversions;
      // var industryConversionsRate = document.getElementById("industry_conversion_rate")
      // console.log(industryConversionsRate);
      // var industryConversionsNumber = Math.abs(industryConversionsRate);
      // var industryConvsersions = eval(view_count_number)*industryConversionsNumber;
      // document.getElementById("industry_conversion_rate").innerHTML = industryConvsersions;
    });
});

$(function IndustrySelectFunction(e){

  console.log(e);
    // view_count = $(this).val();
    // console.log(view_count);
});