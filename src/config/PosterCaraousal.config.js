const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                InitialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
    ],
};

export default settings;