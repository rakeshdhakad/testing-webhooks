$(function(){var a=$(".date-range").data("time-picker")?"DD-MM-YYYY HH:mm:ss":"DD-MM-YYYY";$("[data-behavior=daterangepicker]").daterangepicker({timePicker24Hour:!!$(".date-range").data("time-picker"),timePickerSeconds:!0,autoUpdateInput:!1,locale:{format:a},cancelLabel:"Clear"}),$("[data-behavior=daterangepicker]").on("apply.daterangepicker",function(e,t){start_date=t.startDate.format(a),end_date=t.endDate.format(a),$(this).parent().find(".start-date").val(start_date),$(this).parent().find(".end-date").val(end_date),$(this).val(`${start_date} - ${end_date}`)}),$("[data-behavior=daterangepicker]").on("cancel.daterangepicker",function(){$(this).val(" ")})});