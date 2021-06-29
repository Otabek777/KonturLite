const btnNum = document.querySelector('.number'),
      blockNum = document.querySelector('.number__block'),
      searchOpen = document.querySelector('#searchOpen'),
      searchBlock = document.querySelector('#searchBlock'),
      searchClose = document.querySelector('#searchClose'),
      body = document.querySelector('body');

body.addEventListener('click', function() {
    blockNum.classList.remove('active');
});

btnNum.addEventListener('click', function() {
    setTimeout(function() {
        blockNum.classList.add('active');
    }, 0001)
});

searchOpen.addEventListener('click', function() {
    searchBlock.classList.add('active');
});
searchClose.addEventListener('click', function() {
    searchBlock.classList.remove('active');
});

