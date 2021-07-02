const btnNum = document.querySelector('.number'),
      blockNum = document.querySelector('.number__block'),
      searchOpen = document.querySelector('#searchOpen'),
      searchBlock = document.querySelector('#searchBlock'),
      searchClose = document.querySelector('#searchClose'),
      body = document.querySelector('body');

// body.addEventListener('click', function() {
//     blockNum.classList.remove('active');
// });

btnNum.addEventListener('click', function() {
    setTimeout(function() {
        blockNum.classList.toggle('active');
    }, 0)
});

searchOpen.addEventListener('click', function() {
    searchBlock.classList.add('active');
});
searchClose.addEventListener('click', function() {
    searchBlock.classList.remove('active');
});

document.querySelector('.header__burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.aside__nav').classList.toggle('active');
});