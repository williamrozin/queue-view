const Queue = function(i) {
    var array = R.repeat(null, i || 20);
    var head = 0;
    var tail = 0;
    var size = 0;

    this.size = function () {
        return size;
    };

    this.isEmpty = function() {
        return this.size() === 0;
    };

    this.isFull = function() {
        return tail === array.length;
    };

    this.front = function() {
        return array[head];
    };

    this.enqueue = function(n) {
        if (!this.isFull() && !R.isEmpty(n)) {
            array[tail] = n;

            if(array.length > 1) {
                tail++;
            }
            
            size++;
        }
    };

    this.dequeue = function() {
        if (!this.isEmpty()) {
            const aux = array[head];
            array[head] = null;

            if (array.length > 1) {
                head++;
            }

            size--;
            return aux;
        }
    };

    this.view = function() {
        return array;
    };
};
