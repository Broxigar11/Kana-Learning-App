const charset = [
    {hiragana: "あ", katakana: "ア", romaji: "a"}, 	  {hiragana: "い", katakana: "イ", romaji: "i"}, 
    {hiragana: "う", katakana: "ウ", romaji: "u"}, 	  {hiragana: "え", katakana: "エ", romaji: "e"}, 
    {hiragana: "お", katakana: "オ", romaji: "o"}, 	  {hiragana: "か", katakana: "カ", romaji: "ka"}, 
    {hiragana: "き", katakana: "キ", romaji: "ki"},   {hiragana: "く", katakana: "ク", romaji: "ku"},  
    {hiragana: "け", katakana: "ケ", romaji: "ke"},   {hiragana: "こ", katakana: "コ", romaji: "ko"},
    {hiragana: "さ", katakana: "サ", romaji: "sa"},   {hiragana: "し", katakana: "シ", romaji: "shi"}, 
    {hiragana: "す", katakana: "ス", romaji: "su"},   {hiragana: "せ", katakana: "セ", romaji: "se"}, 
    {hiragana: "そ", katakana: "ソ", romaji: "so"},   {hiragana: "た", katakana: "タ", romaji: "ta"}, 
    {hiragana: "ち", katakana: "チ", romaji: "chi"},  {hiragana: "つ", katakana: "ツ", romaji: "tsu"}, 
    {hiragana: "て", katakana: "テ", romaji: "te"},   {hiragana: "と", katakana: "ト", romaji: "to"},
    {hiragana: "な", katakana: "ナ", romaji: "na"},   {hiragana: "に", katakana: "ニ", romaji: "ni"},  
    {hiragana: "ぬ", katakana: "ヌ", romaji: "nu"},   {hiragana: "ね", katakana: "ネ", romaji: "ne"}, 
    {hiragana: "の", katakana: "ノ", romaji: "no"},   {hiragana: "は", katakana: "ハ", romaji: "ha"}, 
    {hiragana: "ひ", katakana: "ヒ", romaji: "hi"},   {hiragana: "ふ", katakana: "フ", romaji: "fu"},  
    {hiragana: "へ", katakana: "ヘ", romaji: "he"},   {hiragana: "ほ", katakana: "ホ", romaji: "ho"},
    {hiragana: "ま", katakana: "マ", romaji: "ma"},   {hiragana: "み", katakana: "ミ", romaji: "mi"},  
    {hiragana: "む", katakana: "ム", romaji: "mu"},   {hiragana: "め", katakana: "メ", romaji: "me"}, 
    {hiragana: "も", katakana: "モ", romaji: "mo"},   {hiragana: "や", katakana: "ヤ", romaji: "ya"}, 
    {hiragana: "ゆ", katakana: "ユ", romaji: "yu"},   {hiragana: "よ", katakana: "ヨ", romaji: "yo"},
    {hiragana: "ら", katakana: "ラ", romaji: "ra"},   {hiragana: "り", katakana: "リ", romaji: "ri"},  
    {hiragana: "る", katakana: "ル", romaji: "ru"},   {hiragana: "れ", katakana: "レ", romaji: "re"}, 
    {hiragana: "ろ", katakana: "ロ", romaji: "ro"},   {hiragana: "わ", katakana: "ワ", romaji: "wa"}, 
    {hiragana: "を", katakana: "ヲ", romaji: "wo"},   {hiragana: "ん", katakana: "ン", romaji: "n"},
	
	{hiragana: "が", katakana: "ガ", romaji: "ga"},   {hiragana: "ぎ", katakana: "ギ", romaji: "gi"},   
	{hiragana: "ぐ", katakana: "グ", romaji: "gu"},   {hiragana: "げ", katakana: "ゲ", romaji: "ge"},   
	{hiragana: "ご", katakana: "ゴ", romaji: "go"},   {hiragana: "ざ", katakana: "ザ", romaji: "za"},
	{hiragana: "じ", katakana: "ジ", romaji: "ji"},   {hiragana: "ず", katakana: "ズ", romaji: "zu"},   
	{hiragana: "ぜ", katakana: "ゼ", romaji: "ze"},   {hiragana: "ぞ", katakana: "ゾ", romaji: "zo"},   
	{hiragana: "だ", katakana: "ダ", romaji: "da"},   {hiragana: "ぢ", katakana: "ヂ", romaji: "dzi"},   
	{hiragana: "づ", katakana: "ヅ", romaji: "dzu"},  {hiragana: "で", katakana: "デ", romaji: "de"},   
	{hiragana: "ど", katakana: "ド", romaji: "do"},   {hiragana: "ば", katakana: "バ", romaji: "ba"},   
	{hiragana: "び", katakana: "ビ", romaji: "bi"},   {hiragana: "ぶ", katakana: "ブ", romaji: "bu"},   
	{hiragana: "べ", katakana: "ベ", romaji: "be"},   {hiragana: "ぼ", katakana: "ボ", romaji: "bo"},   
	{hiragana: "ぱ", katakana: "パ", romaji: "pa"},   {hiragana: "ぴ", katakana: "ピ", romaji: "pi"},   
	{hiragana: "ぷ", katakana: "プ", romaji: "pu"},   {hiragana: "ぺ", katakana: "ペ", romaji: "pe"},   
	{hiragana: "ぽ", katakana: "ポ", romaji: "po"},   
    
    {hiragana: "きゃ", katakana: "キャ", romaji: "kya"},  {hiragana: "きゅ", katakana: "キュ", romaji: "kyu"}, 
    {hiragana: "きぇ", katakana: "キェ", romaji: "kye"},  {hiragana: "きょ", katakana: "キョ", romaji: "kyo"},  
	{hiragana: "しゃ", katakana: "シャ", romaji: "sha"},  {hiragana: "しゅ", katakana: "シュ", romaji: "shu"},
	{hiragana: "しぇ", katakana: "シェ", romaji: "she"},  {hiragana: "しょ", katakana: "ショ", romaji: "sho"},
	{hiragana: "ちゃ", katakana: "チャ", romaji: "cha"},  {hiragana: "ちゅ", katakana: "チュ", romaji: "chu"}, 
    {hiragana: "ちぇ", katakana: "チェ", romaji: "che"},  {hiragana: "ちょ", katakana: "チョ", romaji: "cho"},
	{hiragana: "にゃ", katakana: "ニャ", romaji: "nya"},  {hiragana: "にゅ", katakana: "ニュ", romaji: "nyu"}, 
    {hiragana: "にぇ", katakana: "ニェ", romaji: "nye"},  {hiragana: "にょ", katakana: "ニョ", romaji: "nyo"},
	{hiragana: "ひゃ", katakana: "ヒャ", romaji: "hya"},  {hiragana: "ひゅ", katakana: "ヒュ", romaji: "hyu"},  
	{hiragana: "ひぇ", katakana: "ヒェ", romaji: "hye"},  {hiragana: "ひょ", katakana: "ヒョ", romaji: "hyo"},
	{hiragana: "みゃ", katakana: "ミャ", romaji: "mya"},  {hiragana: "みゅ", katakana: "ミュ", romaji: "myu"}, 
    {hiragana: "みぇ", katakana: "ミェ", romaji: "mye"},  {hiragana: "みょ", katakana: "ミョ", romaji: "myo"},
	{hiragana: "りゃ", katakana: "リャ", romaji: "rya"},  {hiragana: "りゅ", katakana: "リュ", romaji: "ryu"},  
	{hiragana: "りぇ", katakana: "リェ", romaji: "rye"},  {hiragana: "りょ", katakana: "リョ", romaji: "ryo"},
	{hiragana: "ぎゃ", katakana: "ギャ", romaji: "gya"},  {hiragana: "ぎゅ", katakana: "ギュ", romaji: "gyu"},  
	{hiragana: "ぎぇ", katakana: "ギェ", romaji: "gye"},  {hiragana: "ぎょ", katakana: "ギョ", romaji: "gyo"},
    {hiragana: "じゃ", katakana: "ジャ", romaji: "jya"},  {hiragana: "じゅ", katakana: "ジュ", romaji: "jyu"}, 
    {hiragana: "じぇ", katakana: "ジェ", romaji: "jye"},  {hiragana: "じょ", katakana: "ジョ", romaji: "jyo"},
	{hiragana: "ぢゃ", katakana: "ヂャ", romaji: "dzya"}, {hiragana: "ぢゅ", katakana: "ヂュ", romaji: "dzyu"}, 
    {hiragana: "ぢぇ", katakana: "ヂェ", romaji: "dzye"}, {hiragana: "ぢょ", katakana: "ヂョ", romaji: "dzyo"},
    {hiragana: "びゃ", katakana: "ビャ", romaji: "bya"},  {hiragana: "びゅ", katakana: "ビュ", romaji: "byu"}, 
    {hiragana: "びぇ", katakana: "ビェ", romaji: "bye"},  {hiragana: "びょ", katakana: "ビョ", romaji: "byo"},  
	{hiragana: "ぴゃ", katakana: "ピャ", romaji: "pya"},  {hiragana: "ぴゅ", katakana: "ピュ", romaji: "pyu"},  
	{hiragana: "ぴぇ", katakana: "ピェ", romaji: "pye"},  {hiragana: "ぴょ", katakana: "ピョ", romaji: "pyo"}
];

const weights = [];

const currentState = {index: 0, key: "hiragana"};

initializeEventListeners();
resetWeights();
resetScoreCounter();
nextKanaEvent();

function initializeEventListeners() {
	document.getElementById("hiragana_button").addEventListener("click", onTabClickEvent);
	document.getElementById("katakana_button").addEventListener("click", onTabClickEvent);
	document.getElementById("skip_button").addEventListener("click", nextKanaEvent);
	document.getElementById("next_button").addEventListener("click", evaluateInputEvent);
	document.getElementById("input").addEventListener("keypress", keyDownEvent);
}

function onTabClickEvent() {
	if (this.classList.contains("active") && getActiveTabsCount() <= 1) {
		return;
	}

	if (this.classList.contains("active")) {
		this.classList.remove("active");
	} else {
		this.classList.add("active");
	}
	
	resetWeights();
	resetScoreCounter();
	nextKanaEvent();
}

function keyDownEvent(e) {
	if (e.keyCode == "13") {
		next_button.dispatchEvent(new Event("click"));
	}
}

function nextKanaEvent() {
	var input = document.getElementById("input");
	var kana = document.getElementById("kana");
	var next_button = document.getElementById("next_button");
	var correction = document.getElementById("correction");

	randomizer();
	
	if (this != undefined && this === next_button) {
		this.removeEventListener("click", nextKanaEvent);
		this.addEventListener("click", evaluateInputEvent);
	}

	input.value = "";
	kana.innerHTML = charset[currentState["index"]][currentState["key"]];
	correction.style.display = "none";
	correction.innerHTML = "";
}

function evaluateInputEvent() {
	var input = document.getElementById("input");
	var correct = document.getElementById("correct");
	var incorrect = document.getElementById("incorrect");
	var correction = document.getElementById("correction");

	if (input.value === "") {
		return;
	}

	if (input.value.toLowerCase() === charset[currentState["index"]]["romaji"]) {
		weights[currentState["index"]][currentState["key"]] = Math.ceil(weights[currentState["index"]][currentState["key"]] / 2);
		correct.value = Number(correct.value) + 1;

		nextKanaEvent();
	} else {
		weights[currentState["index"]][currentState["key"]] = 100;
		incorrect.value = Number(incorrect.value) + 1;
		correction.style.display = "block";
		correction.innerHTML = charset[currentState["index"]]["romaji"];

		this.removeEventListener("click", evaluateInputEvent);
		this.addEventListener("click", nextKanaEvent);
	}
}

function resetScoreCounter() {
	document.getElementById("correct").value = 0;
	document.getElementById("incorrect").value = 0;
} 

function resetWeights() {
	weights.length = 0;
	for (var i = 0; i < charset.length; i++) {
		weights.push({hiragana: 100, katakana: 100});
	}
}

function randomizer() {
	currentState["key"] = chooseKey();
	currentState["index"] = chooseIndex();

	console.log(weights);
	console.log(currentState);
}

function chooseKey() {
	var katakana_button = document.getElementById("katakana_button");
	var key = "hiragana";

	if (getActiveTabsCount() > 1) {
		key = (Math.floor(Math.random() * 2) === 0 ? "hiragana" : "katakana")
	} else if (katakana_button.classList.contains("active")) {
		key = "katakana";
	}

	return key;
}

function chooseIndex() {
	var sumOfWeights = 0;

	weights.forEach((element) => sumOfWeights += element[currentState["key"]]);

	var rnd = Math.floor(Math.random() * sumOfWeights);
	
	for (var i = 0; i < weights.length; i++) {
		if (rnd < weights[i][[currentState["key"]]])
			return i;
		rnd -= weights[i][currentState["key"]];
	}

	return 0;
}

function getActiveTabsCount() {
	return document.getElementsByTagName("body")[0].getElementsByTagName("header")[0]
		.getElementsByClassName("active").length;
}