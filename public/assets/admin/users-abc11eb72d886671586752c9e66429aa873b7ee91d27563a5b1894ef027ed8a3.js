function userAjaxCall(a,e){$.ajax({url:`/admin/users/${a}/update_sport_visibility`,type:"PATCH",data:e,success:function(a){toastr.success(a.message)},error:function(a){elem.parent().hasClass("checked")?elem.prop("checked",!1):elem.prop("checked",!0),elem.iCheck("update"),alert($.parseJSON(a.responseText).error)}})}$(".search").on("click",()=>{const a="/admin/users/search",e={reseller_user_id:$("#reseller_user_id").val(),registration_date:$("#registration_date").val(),reg_start_date:$("#reg_start_date").val(),reg_end_date:$("#reg_end_date").val(),query:$("#query").val(),id:$("#id").val(),last_sign_in_at:$("#last_sign_in_at").val(),last_sign_in_start_date:$("#last_sign_in_start_date").val(),last_sign_in_end_date:$("#last_sign_in_end_date").val(),currency:$("#currency").val(),phone:$("#phone_no").val(),min_amt:$("#min_amt").val(),max_amt:$("#max_amt").val(),country:$("#country").val(),city:$("#city").val()};getAjaxLoad(a,e,"#users_list")}),$(".reset").on("click",()=>{$("#registration_date").val(""),$("#reg_start_date").val(""),$("#reg_end_date").val(""),$("#query").val(""),$("#id").val(""),$("#last_sign_in_at").val(""),$("#last_sign_in_start_date").val(""),$("#last_sign_in_end_date").val(""),$("#currency").val(""),$("#phone_no").val(""),$("#min_amt").val(""),$("#max_amt").val(""),$("#country").val(""),$("#city").val(""),$("#reseller_user_id").val(""),$(".select-2").trigger("change"),$(".search").trigger("click")});