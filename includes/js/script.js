function showPage(page) {
    $('#homeLink').removeClass('active');
    $('#home2Link').removeClass('active');
    $('#summerLink').removeClass('active');
    $('#summerCoachingLink').removeClass('active');
    $('#summerSalesLink').removeClass('active');
    $('#winterLink').removeClass('active');
    $('#aboutLink').removeClass('active');
    $('#eventsLink').removeClass('active');
    $('#' + page + 'Link').addClass('active');

    $('#home').addClass('d-none');
    $('#home2').addClass('d-none');
    $('#summer').addClass('d-none');
    $('#summerCoaching').addClass('d-none');
    $('#summerSales').addClass('d-none');
    $('#winter').addClass('d-none');
    $('#about').addClass('d-none');
    $('#events').addClass('d-none');
    $('#' + page).removeClass('d-none');
}
