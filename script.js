document.addEventListener("scroll", () => {
    const scrollingDiv = document.querySelector(".scrolling-div");
    if (!scrollingDiv) return;
    
    const scrollPosition = window.scrollY;
    const images = [
        "media/image1.png",
        "media/image2.png",
        "media/image3.png",
        "media/image4.png",
        "media/image5.png",
        "media/image6.png",
        "media/image7.png",
        "media/image7.png"
    ];

    const index = Math.min(Math.floor(scrollPosition / window.innerHeight), images.length - 1);
    scrollingDiv.style.backgroundImage = `url('${images[index]}')`;
});

// GSAP Animation for #wr8 Image
gsap.from("#wr8 img", {
    y: "50%",
    opacity: 0,
    scrollTrigger: {
        trigger: "#wr8 img",
        start: "top 110%",
        end: "top 80%",
        scrub: 1
    }
});


gsap.from(".wrm h1", {
    y: "50%",
    opacity: 0,
    scrollTrigger: {
        trigger: ".wrm h1",
        scroll:".content",
        markers: true,
        start: "top 50%",
        end: "top 20%",
        scrub: 1
    }
});