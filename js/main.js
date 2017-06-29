var queue;

function getById(id) {
	return document.getElementById(id);
};

function setContent(id, content) {
	getById(id).innerHTML = content;
}

function getValue(id) {
	return getById(id).value;
};

function setValue(id, value) {
	getById(id).value = value;
};

function renderQueue() {
	if (R.has('view', queue)) {
		const queueItems = queue.view();

		setContent('queue-view', R.join('', queueItems.map(renderItem)));
	}
}

function renderItem(item) {
	return R.isNil(item)
		? '<div class="queue-item empty">Vazio</div>'
		: `<div class="queue-item">${ item }</div>`;
}

function init() {
    const size = getValue('input-init');

    queue = new Queue(size);
    renderQueue();
}

function addItem() {
    const element = getValue('input-enqueue');

    queue.enqueue(element);
    setValue('input-enqueue', '');
    getById('input-enqueue').focus();
    renderQueue();
}

getById('init').addEventListener("click", function(){
	init();
});

getById('enqueue').addEventListener("click", function(){
	addItem();
});

getById('dequeue').addEventListener("click", function(){
    setValue('input-dequeue', queue.dequeue());
    renderQueue();
});

getById('front').addEventListener("click", function(){
    setValue('input-front', queue.front());
});

getById('input-init').addEventListener("keypress", function(event){
	if (event.which === 13) {
    	init();
	}
});

getById('input-enqueue').addEventListener("keypress", function(event){
	if (event.which === 13) {
    	addItem();
	}
});