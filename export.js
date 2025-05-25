async function preloadHeroImages() {
    const imgs = document.querySelectorAll('.hero');
    const promises = [];

    imgs.forEach(img => {
        const p = new Promise((resolve) => {
            if (img.complete) resolve();
            else {
                img.onload = resolve;
                img.onerror = resolve;
            }
        });
        promises.push(p);
    });

    await Promise.all(promises);
}

document.getElementById('download-btn').addEventListener('click', async () => {
    await document.fonts.ready;
    await preloadHeroImages();

    html2canvas(document.getElementById('lineup-container'), {
        scale: 4,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'lineup.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});