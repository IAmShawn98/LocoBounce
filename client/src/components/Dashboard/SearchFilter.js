import $ from "jquery";

$(document).ready(function () {
    $("#FilterWidgetData").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#WidgetsTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});