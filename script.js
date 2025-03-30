
/* document.addEventListener("scroll", () => {
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
}); */


document.addEventListener("scroll", () => {
    const scrollingDiv = document.querySelector(".scrolling-div");
    if (!scrollingDiv) return;

    const scrollPosition = window.scrollY;
    const media = [
        { loading:"early", type: "video", src: "media/opening_video.mp4" },
        { type: "image", src: "media/image2.png" },
        { type: "image", src: "media/image3.png" },
        { type: "image", src: "media/image4.png" },
        { type: "image", src: "media/image5.png" },
        { type: "image", src: "media/image6.png" },
        { type: "image", src: "media/image7.png" },
        { type: "image", src: "media/image7.png" }
    ];

    const index = Math.min(Math.floor(scrollPosition / window.innerHeight), media.length - 1);
    const currentMedia = media[index];

    if (currentMedia.type === "video") {
        scrollingDiv.innerHTML = `<video autoplay loop muted playsinline>
        <source src="${currentMedia.src}" type="video/mp4"></video>`;
    } else {
        scrollingDiv.style.backgroundImage = `url('${currentMedia.src}')`;
        scrollingDiv.innerHTML = ""; // Clear video if switching to an image
    }
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


gsap.to("#wr1 h1", {
    y: "-150%",
    opacity: 0,
    scrollTrigger: {
        trigger: "#wr1 h1",
        scroll:".content",
        start: "top 72%",
        end: "top 68.5%",
        scrub: 1
    }
});

gsap.to("#wr2 h1", {
    y: "-150%",
    opacity: 0,
    scrollTrigger: {
        trigger: "#wr2 h1",
        scroll:".content",
        start: "top 72%",
        end: "top 69.5%",
        scrub: 1
    }
});

gsap.to("#wr3 h1", {
    y: "-150%",
    opacity: 0,
    scrollTrigger: {
        trigger: "#wr3 h1",
        scroll:".content",
        start: "top 72%",
        end: "top 68.5%",
        scrub: 1
    }
});

gsap.to("#wr4 h1", {
    y: "-150%",
    opacity: 0,
    scrollTrigger: {
        trigger: "#wr4 h1",
        scroll:".content",
        start: "top 72%",
        end: "top 68.5%",
        scrub: 1
    }
});

gsap.to("#wr5 h1", {
    y: "-150%",
    opacity: 0,
    scrollTrigger: {
        trigger: "#wr5 h1",
        scroll:".content",
        start: "top 72%",
        end: "top 68.5%",
        scrub: 1
    }
});

gsap.to("#wr6 h1", {
    y: "-150%",
    opacity: 0,
    scrollTrigger: {
        trigger: "#wr6 h1",
        scroll:".content",
        start: "top 45%",
        end: "top 38.5%",
        scrub: 1
    }
});





