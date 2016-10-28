$(function(){
	$("#industry_names").change(function(){
		industryId = '#' + $(this).val();
		console.log(industryId);
		$(industryId).removeClass("hidden");
	});
});