var nowPlayingTimeout;
var nowPlaying;

function loadNowPlaying() {
    $.ajax({
        cache: false,
        dataType: "json",
        url: 'http://admin-radio.niprobin.com/api/nowplaying/gone',
        success: function(np) {
            // Do something with the Now Playing data.
            nowPlaying = np;
            $('#nowplaying-song').text(np.now_playing.song.text);
            nowPlayingTimeout = setTimeout(loadNowPlaying, 15000);
        }
    }).fail(function() {
        nowPlayingTimeout = setTimeout(loadNowPlaying, 30000);
    });
}

$(function() {
    loadNowPlaying();
});