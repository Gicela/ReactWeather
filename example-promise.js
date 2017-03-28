//all way of creating a callback
function getTemCallBack(location, callback){
    callback(undefined, 12 );
    callback('City not found');
}

getTemCallBack('London', function(err, temp){
    if(err){
        console.log(err);
    } else {
        console.log('sucess', temp);
    }
})

//using promises for callbacks
//create the promise
function getTemPromise(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        resolve(12);
        reject('City not found')
        }, 1000);    
    });
}
//call the promise
getTemPromise('London').then(function(temp){
    console.log('promise success', temp);
}), function(err){
    console.log('Promise error', err);
}

//creates a promise
function addPromise(a,b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('a and b need to be numbers');

        }
        
    });
}

//call the promise
addPromise(6,7).then(function(sum){
    console.log('Promise success, the sum is :' , sum);
    }, function(err){
         console.log('Error', err);
    });

addPromise('gicela', 8).then(function(sum){
    console.log('this should not be valid!');
}, function(err){
    console.log('characters are not allowed', err);
});