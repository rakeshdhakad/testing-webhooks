function sortableCountryJs(){$("#countries-sortable-body").sortable({update:function(){updateCountriesRankAjax()}})}function updateCountriesRankAjax(){var e=$("#countries-sortable-body").sortable("toArray").filter(e=>""!=e);$.ajax({url:"/admin/countries/update_countries_rank",type:"PATCH",data:{sorted_ids:e},success:function(t){e.forEach(function(e,t){0==t&&$(`#${e} td:last`).html(""),1==t&&$(`#${e} td:last`).html('<a class="countries_move_to_top" href="#"><span class="translation_missing" title="Move To Top">Move To Top</span></a>'),$("#rank_"+e).html(t+1)}),setTimeout(function(){alert(t.message)},300)}})}$(function(){$(".enabled_country").on("click",function(){elem=$(this),confirm("Are you sure?")?(id=elem.attr("data").split("_")[1],url="/admin/countries/"+id+"/change_status",enabled=elem.is(":checked"),$.ajax({url:url,type:"PATCH",data:{enabled:enabled,id:id},success:function(e){toastr.success(e.message)},error:function(e){elem.parent().hasClass("checked")?elem.prop("checked",!1):elem.prop("checked",!0),elem.iCheck("update"),alert($.parseJSON(e.responseText).error)}})):1==$(this).prop("checked")?$(this).prop("checked",!1):$(this).prop("checked",!0)}),$(".countries_move_to_top").on("click",function(){$(this).parent().parent().prependTo("#countries-sortable-body"),updateCountriesRankAjax()})});