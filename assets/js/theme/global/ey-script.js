import $ from 'jquery';

$('.navPages-close').click(() => {
    $('#menu').removeClass('is-open');
    $('body').removeClass('has-activeNavPages');
});

$('.mobile-search-toggle').click((event) => {
    $(event.currentTarget).toggleClass('active');
    $('.navPages-quickSearch').slideToggle();
});

$('.footer-info-heading.links').click((event) => {
    $(event.currentTarget).toggleClass('active');
    $(event.currentTarget).parent().find('ul').slideToggle();
});

$('.navPages-item > .navPages-action.desk').mouseenter(() => {
    $('#ey-overlay').show();
});
$('.navPages-item > .navPages-action.desk').mouseleave(() => {
    $('#ey-overlay').hide();
});
