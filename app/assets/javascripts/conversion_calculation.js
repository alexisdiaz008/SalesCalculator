
    function industrySelect(){
        $("#industry_names").change(function(){
        industryId = '#' + $(this).val();
        console.log(industryId);
        $(industryId).removeClass("hidden");
        // $(industryId).toggleClass("hidden");
        $(industryId + '_view_input').keyup(function(e) {
          view_count = $(this).val();
          var view_count_number = Math.abs(view_count);
          console.log(view_count);
          var masConversionRate = .13;
          var masViewsConversions = eval(view_count_number)*masConversionRate;
          $(industryId + '_mas_conversion_input').val(masViewsConversions);

          var industryConversionRate = $("#industry_conversion_rate").val();
          var industryViewsConversions = eval(view_count_number)*industryConversionRate;
          $(industryId + '_industry_conversion_input').val(industryViewsConversions);
        });
      });
    }
    // $("#cep").on("change", hi);
    $("#industry_names").change("change", industrySelect);

    window.onload = industrySelect


