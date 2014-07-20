var text = document.querySelector('article').innerHTML;
var words = text.split(/[.,;!?»«"'\s–]+/);
var longestWord = '';	// längstes Wort
var wordsLengthTotal = 0;	// Summe der Wortlängen (für Durchschnitt)

// Schleife: durchläuft alle Elemente des Arrays
for (var i = 0; i < words.length; i++) {
	wordsLengthTotal += words[i].length;
	if (words[i].length > longestWord.length) {
		console.log(i + ' ' + words[i] + ' (' + words[i].length + ')');
		longestWord = words[i];
	}
}

// Ausgabe des Ergebnisses
document.write('<p>Dieser Text hat eine Länge von <b>' + text.length + ' Zeichen</b>.</p>');
var wordLengthAverage = (wordsLengthTotal / words.length).toFixed(1);
document.write('<p>Das längste Wort lautet <b><q>' + longestWord + '</q></b> und hat eine Länge von <b>' + longestWord.length + ' Zeichen</b>. Die durchschnittliche Länge der insgesamt ' + words.length + ' Wörter beträgt <b>' + wordLengthAverage + ' Zeichen.</p>');
