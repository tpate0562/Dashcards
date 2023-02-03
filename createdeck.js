function downloadDeck(setTerms, setName) {
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(setTerms));
    a.setAttribute('download', setName);

    a.style.display = 'none';
    document.body.appendChild(a);  
    a.click();
    document.body.removeChild(a);
}