const metas = Array.from(document.getElementsByTagName('meta'));
var meta = {};
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
const linkContainers = document.querySelectorAll(".links");
const logoLinks = document.querySelectorAll("a.logo");
const logoImages = document.querySelectorAll(".logo img");
const repeater = document.querySelector("div.repeater");
const albumTitle = document.querySelector(".album-title");
const albumDescription = document.querySelector(".album-description");
const albumLinks = document.querySelectorAll(".album-link");
const totalDuration = document.querySelector(".total-duration");
const viewMode = document.querySelector("select#view-mode");
const categoryTemplate = document.querySelector(".category-template");
const icons = document.querySelectorAll("img.icon");
var ICON_PATH = "../img/";

var template;
var currentItem = preloadItem = null;
var currentItemElement = null;
var currentItemIndex = preloadItemIndex = null;
var allPlaylists = {};
var producers = [];

//window.onresize = () => albumTitle.innerText = innerWidth + " px / ";
//onresize();

const isUrl = s => s && s.includes && s.includes("://");
const useRemoteAudioFiles = () =>  isUrl(AUDIO_PATH);
const useLocalAudioFiles  = () => !isUrl(AUDIO_PATH);

function loadPlaylist()
{
	albumTitle.innerText = ALBUM_ARTIST ? ALBUM_ARTIST + " - " + ALBUM_TITLE : ALBUM_TITLE;
	albumDescription.innerHTML = ALBUM_DESCRIPTION;
	albumLinks.forEach(a => a.href = ALBUM_LINK);
	displayIcons();
	
	if(!LOGO_IMAGE)
		logoLinks.forEach(l => l.remove())
	else {
		logoImages.forEach(i => setImage(i, LOGO_IMAGE));
		if(LOGO_TITLE) logoLinks.forEach(l => l.title = LOGO_TITLE);
		logoLinks.forEach(l => l.href = LOGO_LINK);
	}
	
	displayLinks(linkContainers);
	
	// Audio has ended when this function is executed
	audioPlayer?.addEventListener('ended', playNext, false);
	
	audioPlayer?.addEventListener('loadedmetadata', () => {
		if(currentItem.duration) return;
	
		currentItem.duration = audioPlayer.duration;
	
		if(currentItem.duration && currentItemElement && currentItemElement.querySelector(".duration"))	
			currentItemElement.querySelector(".duration").innerHTML = formatTime(currentItem.duration);
			
		console.log("audioPlayer loadedmetadata", currentItem.n, currentItem.duration);
	});
	
	hiddenPlayer?.addEventListener('loadedmetadata', () => {
		if(!preloadItem) return;
		preloadItem.duration = hiddenPlayer.duration;	
		console.log("hiddenPlayer loadedmetadata", preloadItem.n, preloadItem.duration);
		if(preloadItemIndex < items.length)	preloadFile(items[preloadItemIndex++]);
		else refreshList();
	});

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

	var plLinks = Object.keys(allPlaylists);
	if(plLinks.length > 1)
		plLinks.forEach(makePlaylistLink);

	setPlaylist();
	setImage(playerImage, PLAYER_IMAGE);
	if(playerImage) playerImage.onclick = togglePlay;
}

function getMeta(key)
{
	if(!meta) meta = {};
	metas.forEach(m => { if(m.attributes.length > 1) meta[m.attributes[0].value.replace(/[-:]/g,"_") ] = m.attributes[1].value });
	return key ? meta[key] || "" : meta;
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

	if(playerImage && PLAYER_IMAGE) {
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
	items = items.filter(i => i.file);
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

const isEmpty = arr => !arr || !arr.length;
const isNotEmpty = arr => arr && arr.length;

function distinct(arr, field)
{
	if(isEmpty(arr)) return [];
	var values = arr.filter(i => i[field]).map(i => i[field]);
	return Array.from(new Set(values));
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

function displayIcons()
{
	if(isNotEmpty(icons) && isNotEmpty(window.ICON_PATH))
		icons.forEach(i  => i.src = ICON_PATH + substringAfter(i.src, "/", true, true));	
}

function displayLinks(containers)
{
	var linkTemplate = document.querySelector("a.link-template");
	if(links && containers && containers.length)
		containers.forEach( container => { 
			for(var key in links) {
				var link = cloneTemplate(linkTemplate, container);
				link.innerText = key;
				link.href = links[key];
			}
		});
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
	if(totalDuration) {
		var total = getTotalDuration(items);
		totalDuration.innerText = total ?  "Total: " + formatTime(total) : "";
	}
}

function makeLocalPlaylistItem(item, i) {
	item.n = i + 1;
	if(item.localFile && !item.image) item.image = item.localFile + IMAGE_TYPE;
	if(useLocalAudioFiles() && item.localFile)  item.file  = item.localFile + AUDIO_TYPE;
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
	if(window.audioPlayer)
		el.onclick = () => playFile(i);

	var title = el.querySelector(".title");
	var separator = viewMode.value == "playlist-template0" ? "  -  " : "\n";
	var producer = item.author || item.producer;
	if(producer == ALBUM_ARTIST) producer = "";
	var itemTitle = [ item.artists, item.songTitle || item.title, producer ].filter(s => s).join(separator);
	if(title) title.innerHTML = itemTitle;

	var description = el.querySelector(".description");
	var itemDescription = [ item.description, item.release + " | " + item.nbTracks + " tracks" ].filter(s => s).join(separator);
	if(description) description.innerHTML = itemDescription;

	var link = el.querySelectorAll("a.url");
	if(link && item.url) link.forEach(l => l.href = item.url);

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

function togglePlay()
{
	if(!currentItem) playNext();
	else if(audioPlayer.paused) audioPlayer.play()
	else audioPlayer.pause();
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
	var producer = item.author || item.producer;
	if(producer == ALBUM_ARTIST) producer = "";
	playerLabel.innerText = playerImage.title = [item.artists,  item.songTitle || item.title, producer].filter(s => s).join("\n");

	if(isUrl(item.file) || item.file.includes("/"))
		audioPlayer.src = item.file;
	else {
		var subdir = playlist ? playlist.dataset.path || playlist.getAttribute("path") : "";
		subdir = subdir ? subdir = subdir + "/" : "";
		audioPlayer.src = AUDIO_PATH + subdir + item.file;
	}

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

function playNext() {
	if(currentItemIndex === null) currentItemIndex = -1;
	return playFile(++currentItemIndex % items.length || 0);
}

function playPrevious() {
	if(currentItemIndex === null) currentItemIndex = 0;
	var previousIndex = (--currentItemIndex + items.length) % items.length || 0;
	return playFile(previousIndex);
}

//load audio file metadata without playing
function preloadFile(item)
{
	if(!item) return refreshList();
	if(!item.file) return preloadFile(items[preloadItemIndex++]);

	preloadItem = item;
	var subdir = playlist ? playlist.dataset.path || playlist.getAttribute("path") : "";
	subdir = subdir ? subdir = subdir + "/" : "";
	hiddenPlayer.src = AUDIO_PATH + subdir + item.file;
}

function loadDurations()
{
	preloadItemIndex = 0;
	preloadFile(items[preloadItemIndex]);
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
