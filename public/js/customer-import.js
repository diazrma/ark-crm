const listCustomers = () => {
  $.ajax({
    url: "/v1/customers/",
    type: "get",
    contentType: false,
    processData: false,
    cache: false,
    success: function (res) {
      res.forEach((d) => {
        $("#tableCustomer  > tbody:last-child").append(`<tr><td>${d.id}</td>
        <td>${d.name}</td>
        <td>${d.email}</td></tr>`);
      });
    },
    error: function () {
      console.log("errou");
    },
  });
};
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
      console.log(res);
      listCustomers();
    },
    error: function () {
      console.log("errou");
    },
  });
});
