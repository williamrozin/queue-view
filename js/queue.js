const Queue = function(q) {
    var length = q || 20;
    var array = R.repeat(null, length);
    var head = 0;
    var tail = 0;
    var size = 0;

    this.getSize = function () {
        return size;
    };

    this.isEmpty = function() {
        return this.getSize() === 0;
    };

    this.isFull = function() {
        return this.getSize() === array.length;
    };

    this.front = function() {
        return array[head];
    };

    this.enqueue = function(n) {
        if(!R.isEmpty(n)){
            if (this.isFull()) {
                var temp = R.repeat(null, length * 2);
                var i = 0;
                
                for (i = 0; i < array.length; i++) {
                    temp[i] = array[head];
                    head = (head + 1) % array.length;
                }

                head = 0;
                tail = array.length;
                array = temp;
            }

            array[tail] = n;
            tail = (tail + 1) % array.length;
            size++;
        }
    };

    this.dequeue = function() {
        if (!this.isEmpty()) {
            const aux = array[head];
            array[head] = null;

            head = (head + 1) % array.length;

            size--;
            return aux;
        }
    };

    this.view = function() {
        return array;
    };
};
