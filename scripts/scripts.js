const $aButton = document.querySelector('#a-button');
const $bButton = document.querySelector('#b-button');
const $cButton = document.querySelector('#c-button');
const $dButton = document.querySelector('#d-button');
const $eButton = document.querySelector('#e-button');
const $fButton = document.querySelector('#f-button');
const $gButton = document.querySelector('#g-button');
const $hButton = document.querySelector('#h-button');
const $iButton = document.querySelector('#i-button');
const $jButton = document.querySelector('#j-button');
const $kButton = document.querySelector('#k-button');
const $lButton = document.querySelector('#l-button');
const $mButton = document.querySelector('#m-button');
const $nButton = document.querySelector('#n-button');
const $oButton = document.querySelector('#o-button');
const $pButton = document.querySelector('#p-button');
const $qButton = document.querySelector('#q-button');
const $rButton = document.querySelector('#r-button');
const $sButton = document.querySelector('#s-button');
const $tButton = document.querySelector('#t-button');
const $uButton = document.querySelector('#u-button');
const $vButton = document.querySelector('#v-button');
const $wButton = document.querySelector('#w-button');
const $xButton = document.querySelector('#x-button');
const $yButton = document.querySelector('#y-button');
const $zButton = document.querySelector('#z-button');

const $letterWrapper = document.querySelector('.word-wrapper');

function displayGuessLetters(word) {
    $letterWrapper.innerHTML = '';

    for (let i = 0; i < word.length; i++) {
        const $li = document.createElement('li');
        $letterWrapper.appendChild($li);
    }
}

const colors = [
    'red',
    'green',
    'white',
];

let words = [
    'arbre',
    'maison',
    'tirelire',
    'enceinte',
    'camera',
    'stylo',
    'ordinateur',
    'telephone',
    'trousse',

];

function randomWords() {
    const rand = Math.random();
    const index = Math.floor(rand * words.length);

    return words[index];
}

const selectedWord = randomWords();

displayGuessLetters(selectedWord);

$aButton.addEventListener('click', () => {
    $aButton.style.backgroundColor = colors[0];
});

$bButton.addEventListener('click', () => {
    $bButton.style.backgroundColor = colors[0];
});

$cButton.addEventListener('click', () => {
    $cButton.style.backgroundColor = colors[0];
});

$dButton.addEventListener('click', () => {
    $dButton.style.backgroundColor = colors[0];
});

$eButton.addEventListener('click', () => {
    $eButton.style.backgroundColor = colors[0];
});

$fButton.addEventListener('click', () => {
    $fButton.style.backgroundColor = colors[0];
});

$gButton.addEventListener('click', () => {
    $gButton.style.backgroundColor = colors[0];
});

$hButton.addEventListener('click', () => {
    $hButton.style.backgroundColor = colors[0];
});

$iButton.addEventListener('click', () => {
    $iButton.style.backgroundColor = colors[0];
});

$jButton.addEventListener('click', () => {
    $jButton.style.backgroundColor = colors[0];
});

$kButton.addEventListener('click', () => {
    $kButton.style.backgroundColor = colors[0];
});

$lButton.addEventListener('click', () => {
    $lButton.style.backgroundColor = colors[0];
});

$mButton.addEventListener('click', () => {
    $mButton.style.backgroundColor = colors[0];
});

$nButton.addEventListener('click', () => {
    $nButton.style.backgroundColor = colors[0];
});

$oButton.addEventListener('click', () => {
    $oButton.style.backgroundColor = colors[0];
});

$pButton.addEventListener('click', () => {
    $pButton.style.backgroundColor = colors[0];
});

$qButton.addEventListener('click', () => {
    $qButton.style.backgroundColor = colors[0];
});

$rButton.addEventListener('click', () => {
    $rButton.style.backgroundColor = colors[0];
});

$sButton.addEventListener('click', () => {
    $sButton.style.backgroundColor = colors[0];
});

$tButton.addEventListener('click', () => {
    $tButton.style.backgroundColor = colors[0];
});

$uButton.addEventListener('click', () => {
    $uButton.style.backgroundColor = colors[0];
});

$vButton.addEventListener('click', () => {
    $vButton.style.backgroundColor = colors[0];
});

$wButton.addEventListener('click', () => {
    $wButton.style.backgroundColor = colors[0];
});

$xButton.addEventListener('click', () => {
    $xButton.style.backgroundColor = colors[0];
});

$yButton.addEventListener('click', () => {
    $yButton.style.backgroundColor = colors[0];
});

$zButton.addEventListener('click', () => {
    $zButton.style.backgroundColor = colors[0];
});

function isLetterExists(){
    // Si la lettre existe dans le mot (!== null) alors afficher en vert. Sinon, (=== null) laisser en rouge
    // if ($letterButton !== null) {
    //     $letterButton.style.backgroundColor = colors[1];
    // }
}

// Pour barrer les lettres, balise html <strike></strike> autour de la lettre, mais comment l'insérer là où on veut depuis js ?
// .insertBefore ?

// Pour barrer les lettres, <strike> en html est obsolète
// Nouvelle version :
// <s></s>




