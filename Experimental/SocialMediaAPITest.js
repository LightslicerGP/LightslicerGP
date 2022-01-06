/*
const APIKey = 'AIzaSyCVUJKYwvh_iNmRHSLDDKnVfTe7hWd9zeo'
const youtubeUser = 'UCiGIp50poRZRIAuRt604uRg'
*/
const youtubeTitle = document.getElementById('youtubetitle')
const youtubeThumbnail = document.getElementById('youtubethumbnail')
const youtubeLink = document.getElementById('youtubelink');

let getYoutubeInfo = () => {
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCiGIp50poRZRIAuRt604uRg&maxResults=3&order=date&type=video&key=AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      youtubeLink.href = "https://www.youtube.com/watch?v=" + data.items[0].id.videoId;
      youtubeTitle.innerHTML = data.items[0].snippet.title;
      youtubeThumbnail.src = data.items[0].snippet.thumbnails.high.url;
    })
}
getYoutubeInfo();