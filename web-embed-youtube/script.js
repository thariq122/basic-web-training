function changeVideo(videoId) {
    let youtubeFrame = document.getElementById("youtubeVideo");
    youtubeFrame.src = `https://www.youtube.com/embed/${videoId}`;
}