export function delay(time, message) {
    let delayPromise = new Promise(function (resolve, reject) {
        if(time > 0 && message != null){
            window.setTimeout(function(){
                resolve(message);
            }, time)
        } else {
            reject("Error!")
        }
    });
    return delayPromise;
  }