var nowPlayingTimeout;
var nowPlaying;

function loadNowPlaying() {
    $.ajax({
        cache: false,
        dataType: "json",
        url: 'https://139.177.182.196/api/nowplaying/gone',
        success: function(np) {
            // Do something with the Now Playing data.
            nowPlaying = np;
            $('#nowplaying').text(np.now_playing.song.text);
            $('#listeners').text(np.listeners.current);
            nowPlayingTimeout = setTimeout(loadNowPlaying, 15000);
        }
    }).fail(function() {
        nowPlayingTimeout = setTimeout(loadNowPlaying, 30000);
    });
}

$(function() {
    loadNowPlaying();
});