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

$('.navPages-item').mouseenter(() => {
    $('#ey-overlay').show();
});
$('.navPages-item').mouseleave(() => {
    $('#ey-overlay').hide();
});
$('.about-fact-icons').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 980,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoint: 551,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            },
        },
    ],
});

$('.image.img01').click(() => {
    $('.map-wrapper').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0589815504427!2d-118.00094338471249!3d33.65563358071573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd216a79ba99d5%3A0xf422e57c200d048f!2sMahogany+Smoked+Meats!5e0!3m2!1sen!2sus!4v1492092094235" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('.locations-wrapper .image').addClass('soHotRightNow');
    $('.locations-wrapper .image.img01').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location.loc03').addClass('soHotRightNow');
});

$('.loc03 .location-clicker').click(() => {
    $('.map-wrapper').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0589815504427!2d-118.00094338471249!3d33.65563358071573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd216a79ba99d5%3A0xf422e57c200d048f!2sMahogany+Smoked+Meats!5e0!3m2!1sen!2sus!4v1492092094235" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('.locations-wrapper .image').addClass('soHotRightNow');
    $('.locations-wrapper .image.img01').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location.loc03').addClass('soHotRightNow');
});

$('.image.img02').click(() => {
    $('.map-wrapper').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.581501660732!2d-118.41989158461472!3d37.3760781798341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be163e36754563%3A0x1ece2cfc305c2564!2sMahogany+Smoked+Meats!5e0!3m2!1sen!2sus!4v1492092376803" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('.locations-wrapper .image').addClass('soHotRightNow');
    $('.locations-wrapper .image.img02').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location.loc01').addClass('soHotRightNow');
});

$('.loc01 .location-clicker').click(() => {
    $('.map-wrapper').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.581501660732!2d-118.41989158461472!3d37.3760781798341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be163e36754563%3A0x1ece2cfc305c2564!2sMahogany+Smoked+Meats!5e0!3m2!1sen!2sus!4v1492092376803" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('.locations-wrapper .image').addClass('soHotRightNow');
    $('.locations-wrapper .image.img02').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location.loc01').addClass('soHotRightNow');
});

$('.image.img03').click(() => {
    $('.map-wrapper').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.479536162411!2d-119.9448844845704!3d38.9587169795613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8099907629470f6d%3A0xde49a526826f8bdf!2sMahogany+Smoked+Meats!5e0!3m2!1sen!2sus!4v1492092597397" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('.locations-wrapper .image').addClass('soHotRightNow');
    $('.locations-wrapper .image.img03').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location.loc02').addClass('soHotRightNow');
});

$('.loc02 .location-clicker').click(() => {
    $('.map-wrapper').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.479536162411!2d-119.9448844845704!3d38.9587169795613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8099907629470f6d%3A0xde49a526826f8bdf!2sMahogany+Smoked+Meats!5e0!3m2!1sen!2sus!4v1492092597397" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
    $('.locations-wrapper .image').addClass('soHotRightNow');
    $('.locations-wrapper .image.img03').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location').removeClass('soHotRightNow');
    $('.locations-wrapper .loc-wrapper .location.loc02').addClass('soHotRightNow');
});
