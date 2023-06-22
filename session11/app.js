function joinString() {
    let array = ["Hello", "Rikkei", "Academy"];
    console.log(array.join(' '));
}

function reverseAndJoinString() {
    let array = ["Academy", "Rikkei", "Chao", "Xin"];
    array.reverse();
    console.log(array.join(' '));
}

function deleteBySplice() {
    let array = ["Hello","World", "Rikkei", "Academy"];
    array.splice(1, 1);
    console.log(array.join(' '));
}

function deleteByShift() {
    let array = ["Hello","World", "Rikkei", "Academy"];
    let Hello = array.shift();
    array.shift();
    array.unshift(Hello);
    console.log(array.join(' '));
}

function arraySum() {
    let array = [1,2,3,4,5];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(`Tong cac phan tu la: ${sum}`);
}