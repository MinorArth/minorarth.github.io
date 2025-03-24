const isUrl = s => s && s.includes && s.includes("://");

const audioPlayer = document.querySelector("audio#audioPlayer");
const hiddenPlayer = document.querySelector("audio#hiddenPlayer");
const playlistLinks = document.querySelector("#playlist-links");
const playlists = document.querySelectorAll("p.playlist-text");
var playlist = document.querySelector("p.playlist-text");
var playlistName = "all";
var imageList = document.querySelector("p.images");
var trackList = document.querySelector("p.tracks");
const playerImage = document.querySelector(".player-image");
const playerLabel = document.querySelector(".player-label");
const linkContainer = document.querySelector(".links");
const logoLinks = document.querySelectorAll("a.logo");
const logoImages = document.querySelectorAll(".logo img");
const repeater = document.querySelector("div.repeater");
const albumTitle = document.querySelector(".album-title");
const albumDescription = document.querySelector(".album-description");
const albumLinks = document.querySelectorAll(".album-link");
const totalDuration = document.querySelector(".total-duration");
const viewMode = document.querySelector("select#view-mode");
const categoryTemplate = document.querySelector(".category-template");

var template;
var currentItem = null;
var currentItemElement = null;
var currentItemIndex = null;

var allPlaylists = {}; // Array.isArray(items) ? { all: items} : items;

albumTitle.innerText = ALBUM_ARTIST ? ALBUM_ARTIST + " - " + ALBUM_TITLE : ALBUM_TITLE;
albumDescription.innerHTML = ALBUM_DESCRIPTION;
albumLinks.forEach(a => a.href = ALBUM_LINK);

if(!LOGO_IMAGE)
	logoLinks.forEach(l => l.remove())
else {
	logoImages.forEach(i => setImage(i, LOGO_IMAGE));
	logoLinks.forEach(l => l.href = LOGO_LINK);
}

displayLinks(linkContainer);

// Audio has ended when this function is executed
audioPlayer.addEventListener('ended', playNext, false);

audioPlayer.addEventListener('loadedmetadata', () => {
	if(currentItem.duration) return;

	currentItem.duration  = audioPlayer.duration;

	if(currentItem.duration && currentItemElement && currentItemElement.querySelector(".duration"))	
		currentItemElement.querySelector(".duration").innerHTML = formatTime(currentItem.duration);
		
	console.log("audioPlayer loadedmetadata", currentItem.n, currentItem.duration);
});

hiddenPlayer.addEventListener('loadedmetadata', () => {
	if(currentItem.duration) return;

	currentItem.duration  = hiddenPlayer.duration;	
	console.log("hiddenPlayer loadedmetadata", currentItem.n, currentItem.duration);
});

//window.onresize = () => albumTitle.innerText = innerWidth + " px / ";
//onresize();

const USE_REMOTE_FILES = isUrl(AUDIO_PATH);
const USE_LOCAL_FILES = !USE_REMOTE_FILES;

function loadPlaylist()
{
	if(!Array.isArray(items))
	{
		allPlaylists.all = [];
		for(var key in items) {
			allPlaylists[key] = items[key];
			items[key].forEach(makeLocalPlaylistItem);
			allPlaylists.all.push({ type: "category", title: key });
			allPlaylists.all = allPlaylists.all.concat(items[key]);
		}
	}
	else if(items.length)
	{
		items.forEach(makeLocalPlaylistItem);
		allPlaylists.all = items;
		refreshList();
	}
	else {
		var pl = Array.from(playlists).map(makePlaylist);

		if(pl.length > 1) {
			allPlaylists.all = [].concat(...pl);
			allPlaylists.all.id = "all";
			allPlaylists.all.title = "All";
		}

		pl.forEach((p, i) => allPlaylists[p.title || p.id] = p);
	}

	if(!producers){
		producers = allPlaylists.all.map(i => i.author || i.producer).filter(p => p && !p.includes("&")).sort();
		producers = new Set(producers);
	}

	if(producers.length > 1)
		producers.forEach(p => { 
			allPlaylists[p] = allPlaylists.all.filter(i => (i.author || i.producer || "").includes(p));
			allPlaylists[p].title = p;
		});

	Object.keys(allPlaylists).forEach(makePlaylistLink);

	setPlaylist();
	setImage(playerImage, PLAYER_IMAGE);
}

function setImage(img, src) {
	if(!img || !src) return;
	return img.src = (isUrl(src) || src.includes("/")) ? src : IMAGE_PATH + src;
}

function setPlaylist(index) {
	// console.log("setPlaylist", index);
	if(!index) index = Object.keys(allPlaylists)[0];
	if(index >= playlists.length - 1) index = "all";
	playlistName = index;

	if(PLAYER_IMAGE) {
		playerImage.style.display = "inline";
		setImage(playerImage, PLAYER_IMAGE);
		hideBrokenImage(playerImage);
	}

	if(playlists && playlists.length)
		playlist = playlists[index];

	items = allPlaylists[index];
	refreshList();
	return items;
}

function makePlaylist(playlist) {
	var items = playlist? playlist.innerText.trim().split("\n\n") : [];
	if(items.length == 1) items = playlist.innerText.trim().split("\n");
	items = items.filter(l => l && l.length);
	items = items.map(makePlaylistItem);
	items.id = playlist.id;
	items.title = playlist.title;
	items.unshift({title: playlist.title});
	return items;
}

function hideBrokenImages() {
	document.querySelectorAll("img.artwork").forEach(hideBrokenImage);
}

function hideBrokenImage(img) {
	img.onerror = () => PLAYER_IMAGE ? img.src = setImage(playerImage, PLAYER_IMAGE) : img.style.display = "none";
}

function shuffle() {
	items = items.filter (i => i.file);
	items.sort(i => Math.random() - .5);
	refreshList();
	return items;
}

function reverse() {
	items = items.slice().sort(i => -1);
	refreshList();
	return items;
}

function reorder() {
	return setPlaylist(playlistName);
}

function substringBefore(s, sub, last, stringOrEmpty, include, ignoreCase)
{
	if(!s) return s;

	var lstr = s;
	var lsub = sub;
	if(ignoreCase) {
		lstr = lstr.toLowerCase();
		lsub = lsub.toLowerCase();
	}

	var pos = last ? lstr.lastIndexOf(lsub) : lstr.indexOf(lsub);
	if(pos < 0)
		return stringOrEmpty ? "" : s;

	if(include)
		pos += sub.length;
	return s.substring(0, pos);
}

function substringAfter(s, sub, last, stringOrEmpty, include, ignoreCase)
{
	if(!s) return s;

	var lstr = s;
	var lsub = sub;
	if(ignoreCase) {
		lstr = lstr.toLowerCase();
		lsub = lsub.toLowerCase();
	}

	var pos = last ? lstr.lastIndexOf(lsub) : lstr.indexOf(lsub);
	if(pos < 0)
		return stringOrEmpty ? s : "";

	if(!include)
		pos += sub.length;

	return s.substring(pos);
}

function displayLinks(container)
{
	var linkTemplate = document.querySelector("a.link-template");
	if(links)
		for(var key in links) {
			var link = cloneTemplate(linkTemplate, container);
			link.innerText = key;
			link.href = links[key];
			//link.target = "link";
		}
}

function makePlaylistLink(pl, i) {
	if(!pl) return;
	var linkTemplate = document.querySelector("a.play-link-template");
	var link = cloneTemplate(linkTemplate, playlistLinks);
	link.innerText = pl;
	link.onclick = () => setPlaylist(pl);
}

function refreshList() {
	repeater.innerHTML = "";
	template = document.querySelector("div." + viewMode.value);
	items.forEach(displayPlaylistItem);
	var total = getTotalDuration(items);
	totalDuration.innerText = total ?  "Total: " + formatTime(total) : "";
}

function makeLocalPlaylistItem(item, i) {
	item.n = i + 1;
	if(item.localFile && !item.image) item.image = item.localFile + IMAGE_TYPE;
	if(USE_LOCAL_FILES && item.localFile && !item.file)  item.file  = item.localFile + AUDIO_TYPE;
}

function makePlaylistItem(item, i) {
	var lines = item.split("\n").filter(l => l && l.length);
	var item = {};
	item.n = i + 1;
	item.title = lines.shift().trim();
	item.image = item.title + IMAGE_TYPE;
	item.file = item.title + AUDIO_TYPE;
	item.sources = lines;

	var n = Number(substringBefore(item.title, " - "));
	if(n && !isNaN(n)) {
		item.n = n;
		item.title = substringAfter(item.title, " - ");
	}

	var parts = item.title.split(" - ");
	item.songTitle = parts.pop() || "";
	item.songTitle = item.songTitle.replace(" -- ", " | ");
	if(!ALBUM_ARTIST) item.producer = parts.shift();
	item.artists = parts.join(" / ");

	if(!item.artists && item.songTitle.includes("(")) {
		item.artists = substringAfter(item.songTitle, "(", true);
		item.artists = substringBefore(item.artists, ")", true);
	}

	return item;
}

function displayPlaylistItem(item, i) {
	//if(!item.n) item.n = i + 1;

	el = cloneTemplate(item.type == "category" ? categoryTemplate : template, repeater);
	if(el.querySelector(".number"))
		el.querySelector(".number").innerHTML = item.n;
	el.onclick = () => playFile(i);

	var title = el.querySelector(".title");
	var separator = viewMode.value == "playlist-template0" ? "  -  " : "\n";
	var itemTitle = [ item.artists, item.songTitle || item.title, item.author || item.producer ].filter(s => s).join(separator);
	if(title) title.innerHTML = itemTitle;

	var img = el.querySelector("img.artwork");
	if(img && item.image) {
		hideBrokenImage(img);
		img.title = itemTitle;
		setImage(img, item.image);
	}

	//highlight current item
	if(item == currentItem) {
		el.classList.add("active");
		currentItemIndex = items.indexOf(currentItem);
		currentItemElement = repeater.childNodes[currentItemIndex];
	}
	else if(!item.file)
		el.classList.add("inactive");

	if(item.duration && el.querySelector(".duration"))
		el.querySelector(".duration").innerHTML = formatTime(item.duration);
	if(item.sources)
		item.sources.forEach( (s, j) => isUrl(s) && (item.video = s) );

	if(item.sources && el.querySelector(".sources"))
		item.sources.forEach( (s, j) => el.querySelector(".sources").innerHTML += isUrl(s)? "" : (j ? "\n+ " : "= ") + s );

	if(title && item.video)
		title.innerHTML += '\n<a onclick="stopPropagation(event)" target="video" href="' + item.video + '">VIDEO</a>';

	if(title && item.links)
		for(var key in item.links)
			title.innerHTML += '\n<a onclick="stopPropagation(event)" target="video" href="' + item.links[key] + '">'+ key +'</a>';

	var trackLink = el.querySelector("a.remix-audio");
	if(trackLink && item.id)
		trackLink.href = TRACK_LINK_PATH + item.id;
	else if(trackLink)
		trackLink.remove();
}

function formatTime(duration)
{
	duration = Math.round(duration); 
	var hour = Math.floor(duration / 3600);
	var min = Math.floor(duration / 60) % 60;
	if(hour > 0 && min < 10) min = "0" + min;
	var sec = duration % 60;
	if(sec < 10) sec = "0" + sec;
	return hour > 0 ?  hour + ":" + min + ":" + sec : min + ":" + sec;
}

function cloneTemplate(node, parent)
{
	var clone = node.cloneNode();
	clone.innerHTML = node.innerHTML;
	if(parent) parent.append(clone);
	return clone;
}

function playFile(item)
{
	if(typeof item == "number") {
		currentItemIndex = item;
		item = items[item];
	}
	if(!item) return;
	if(!item.file) return playNext();

	currentItem = item;
	playerImage.style.display = "inline";
	setImage(playerImage, item.image);
	playerLabel.innerText = playerImage.title = [item.artists,  item.songTitle || item.title, item.author || item.producer].filter(s => s).join("\n");
	var subdir = playlist ? playlist.dataset.path || playlist.getAttribute("path") : "";
	subdir = subdir ? subdir = subdir + "/" : "";
	audioPlayer.src = AUDIO_PATH + subdir + item.file;
	audioPlayer.controls = true;
	audioPlayer.play();

	//highlight current playlist item
	if(currentItemElement)
		currentItemElement.classList.remove("active");
	currentItemElement = repeater.childNodes[currentItemIndex];
	if(currentItemElement)
		currentItemElement.classList.add("active");
	if(item.duration && currentItemElement.querySelector(".duration"))	currentItemElement.querySelector(".duration").innerHTML = formatTime(item.duration);
	return currentItem;
}

//load audio file metadata without playing
function preloadFile(item)
{
	if(!item || !item.file) return;

	currentItem = item;
	var subdir = playlist ? playlist.dataset.path || playlist.getAttribute("path") : "";
	subdir = subdir ? subdir = subdir + "/" : "";
	hiddenPlayer.src = AUDIO_PATH + subdir + item.file;
}

function playNext(evt) {
	// console.log("playNext", evt);
	if(currentItemIndex === null) currentItemIndex = -1;
	return playFile(++currentItemIndex % items.length || 0);
}

function playPrevious() {
	if(currentItemIndex === null) currentItemIndex = 0;
	var previousIndex = (--currentItemIndex + items.length) % items.length || 0;
	return playFile(previousIndex);
}

function loadDurations()
{
	var i = 0;
	var inter = setInterval(() => {
		currentItem = items[i++];
		if(i > items.length) {
			clearInterval(inter);
			refreshList();
		}
		else if(currentItem && !currentItem.duration)
			preloadFile(currentItem);
	}, 400);
}

function getTotalDuration(items)
{
	return items.reduce( (a,i) => a += i.duration || 0, 0);
}

function stopPropagation(event) {
	event.stopPropagation();
}

function playlistToText(num) {
	var format = num ? (i => (i.n < 10 ? " " : "") + i.n + ". " + i.file) : i => i.file ;
	return items.map(format).join("\n").replace(/\.mp3/g, "");
}

function m3uPlaylist()
{
	return "#EXTM3U\n" + items.map(i => i.file).join("\n");
}

function fetchJsonData(url, variable, funct) {
	fetch(url)
		.then(response => {
			if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
			return response.json();
		})
		.then(data => {
			console.log(data);
			if(variable) window[variable] = data;
			if(funct) funct(data);
		})
		.catch(error => console.error('Failed to fetch data:', error)); 
}
