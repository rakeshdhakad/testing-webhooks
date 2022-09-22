function sortableJs(){$("#sports_list").sortable({update:function(){updateSportsRankAjax()}})}function updateSportsRankAjax(){var s=$("#sports_list").sortable("toArray").filter(s=>""!=s);$.ajax({url:"/admin/sports/update_sports_rank",type:"PATCH",data:{sorted_ids:s},success:function(a){s.forEach(function(s,a){$("#rank_"+s).html(a+1)}),toastr.success(a.message)}})}function sportSearchAjax(s,a,t){$.ajax({url:"/admin/sports/search",type:"GET",data:a,success:function(){"search"==t?$("#sports_list").sortable("destroy"):sortableJs()}})}$(".update_sport_rank").on("click",function(){let s=$(this),a=`/admin/sports/${s.data("sport")}`,t=s.closest("tr").find(".rank").val();$.ajax({url:a,type:"PATCH",data:{rank:t},success:function(s){toastr.success(s.message)},error:function(s){toastr.error($.parseJSON(s.responseText).error)}})}),$(".btn-reset").click(()=>{$("#name").val(""),$("#kind").val(""),$("#enabled").val(""),sportSearchAjax("",{name:"",kind:"",enabled:""},"reset")}),$(".btn-search").on("click",function(){const s=$(".sport-filter-div");sportSearchAjax("",{name:s.find("#name").val(),kind:s.find("#kind").val(),enabled:s.find("#enabled").val()},"search")}),sortableJs();