$("#formImportCustomer").submit(function () {
  const data = new FormData($("#formImportCustomer")[0]);
  $.ajax({
    url: "/v1/customers/import",
    type: "POST",
    contentType: false,
    processData: false,
    cache: false,
    data: data,
    success: function (res) {
      loading(200);
      reloadTableCustomer();
    },
    error: function () {
      console.log("errou");
    },
  });
});
$(document).ready(() => {
  reloadTableCustomer();
});
var table = $("#tableCustomer").DataTable({
  language: { url: "//cdn.datatables.net/plug-ins/1.11.0/i18n/pt_br.json" },
  columns: [{ data: "id" }, { data: "name" }, { data: "email" }],
});

const reloadTableCustomer = () => {
  $.ajax({
    url: "/v1/customers",
    dataType: "json",
    success: function (json) {
      table.rows.add(json).draw();
      $('#tableCustomer_length').append('<button id="exportExcel" type="button" class="btn btn-export btn-primary btn-sm">Excel</button>')
      $("#exportExcel").click(function () {
        $("table").table2excel({
          filename: "clientes.xls",
        });
      });
    },
  });
};


