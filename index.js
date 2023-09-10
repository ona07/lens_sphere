const texts = [
    {
        "item": "About us",
        "value": "value"
    },
    {
        "item": "example1",
        "value": "value1"
    },
    {
        "item": "example2",
        "value": "value2"
    },
    {
        "item": "example3",
        "value": "value3"
    },
    {
        "item": "example4",
        "value": "value4"
    },
]

window.addEventListener('load', function() {
    start();
});

function start(){
    const mainList = document.querySelector('.main-list ul');

    // texts 配列から item プロパティを取り出して、リストアイテムを生成
    for (let i = 0; i < texts.length; i++) {
        const li = document.createElement('li');
        li.textContent = texts[i].item;
        li.id = i;
        li.addEventListener('mouseover', function () {
            over(this.id);
        });
        li.addEventListener('mouseleave', function () {
            leave(this);
        });
        mainList.appendChild(li);
    }

}

function over(num) {
    var mainTitle = document.querySelector('.main-title');
    var mainText = document.querySelector('.main-text');

    mainTitle.innerHTML = '';
    mainText.innerHTML = '';
    
    var pElementItem = document.createElement('p');
    pElementItem.textContent = texts[num].item;
    pElementItem.classList.add('fade-in'); // フェードインアニメーションのクラスを追加
    mainTitle.appendChild(pElementItem);

    var pElementValue = document.createElement('p');
    pElementValue.textContent = texts[num].value;
    pElementValue.classList.add('fade-in'); // フェードインアニメーションのクラスを追加
    mainText.appendChild(pElementValue);
}

function leave() {
    var mainTitle = document.querySelector('.main-title');
    var mainText = document.querySelector('.main-text');

    mainTitle.innerHTML = ''; 
    mainText.innerHTML = ''; 
}