$('#registerCustomerButton').on('click',()=>{
    loading(300);
    $('#reports').addClass('d-none');
    $('#registerCustomerCard').removeClass('d-none');
    $('#importCustomerCard').addClass('d-none');
    $('#listCustomerCard').addClass('d-none');
    
});

$('#importCustomerButton').on('click',()=>{
    loading(300);
    $('#reports').addClass('d-none');
    $('#importCustomerCard').removeClass('d-none');
    $('#registerCustomerCard').addClass('d-none');
    $('#listCustomerCard').removeClass('d-none');
});