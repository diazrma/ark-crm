$('#registerCustomerButton').on('click',()=>{
    loading(300);
    $('#registerCustomerCard').removeClass('d-none');
    $('#importCustomerCard').addClass('d-none');
});

$('#importCustomerButton').on('click',()=>{
    loading(300);
    $('#importCustomerCard').removeClass('d-none');
    $('#registerCustomerCard').addClass('d-none');
});