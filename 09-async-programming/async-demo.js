(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        let result = x + y;
        console.log(`   [@Service] returning result`)
        return result;
    }

    function addSyncClient(){
        console.log("[@Client] triggering addSync")
        let result = addSync(40,50)
        console.log(`[@Client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    //Errors
    function divideSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        if ( y === 0){
            throw new Error("Cannot divide by zero")
        }
        let result = x / y;
        console.log(`   [@Service] returning result`)
        return result;
    }

    function divideSyncClient(){
        try {
            console.log("[@Client] triggering divideSync")
            let result = divideSync(40,0)
            console.log(`[@Client] result = ${result}`)
        } catch(e){
            console.log(`something went wrong: ${e.message}`)
        }
    }

    window['divideSyncClient'] = divideSyncClient;

    function addAsyncCallback(x,y, callbackFn){
        console.log(`   [@Service] processing ${x} and ${y}`)
        setTimeout(function(){
            let result = x + y;
            console.log(`   [@Service] returning result`)
            callbackFn(result);
        }, 4000)
    }

    function addAsyncCallbackClient(){
        console.log("[@Client] triggering addAsync")
        addAsyncCallback(40,50, function(result){
            console.log(`[@Client] result = ${result}`)
        })
    }

    window['addAsyncCallbackClient'] = addAsyncCallbackClient;

    //Error
    function divideAsyncCallback(x,y, callbackFn){
        console.log(`   [@Service] processing ${x} and ${y}`)
        setTimeout(function(){
            if ( y === 0){
                let e = new Error("Cannot divide by zero")
                callbackFn(e, null)
                return;
            }
            let result = x / y;
            console.log(`   [@Service] returning result`)
            callbackFn(null, result);
        }, 4000)
    }

    function divideAsyncCallbackClient(){
        console.log("[@Client] triggering divideAsync")
        divideAsyncCallback(40,0, function(err, result){
            if (err){
                console.log(`[@Client] something went wrong: ${err.message}`)
                return;
            }
            console.log(`[@Client] result = ${result}`)
        })
    }

    window['divideAsyncCallbackClient'] = divideAsyncCallbackClient;


    // promise
    function addAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        let p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y;
                console.log(`   [@Service] returning result`)
                resolveFn(result);
            }, 4000)
        })
        return p;
    }

    /* 
    function addAsyncPromiseClient(){
        console.log("[@Client] triggering addAsyncPromise")
        let p = addAsyncPromise(100,200)
        // p.then(fn), p.catch(fn) 
        p.then(function(result){
            console.log(`[@Client] result = ${result}`)
        })
    } 
    */

    //async await
    async function addAsyncPromiseClient(){
        console.log("[@Client] triggering addAsyncPromise")
        let result = await addAsyncPromise(100,200)
        console.log(`[@Client] result = ${result}`)
        return result * 2
        // a promise is returned by default
    }
   
    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

    //Parallel execution
    async function asyncAwaitClient(){
        /* 
        const addResult = await addAsyncPromise(100,200)
        const divideResult = await divideAsyncPromise(100,2)
        console.log(`addResult = ${addResult}`)
        console.log(`divideResult = ${divideResult}`) 
        */

        const addPromise = addAsyncPromise(100,200)
        const dividePromise = divideAsyncPromise(100,2)
        /* 
        Promise.all([addPromise, dividePromise])
            .then(function([addResult, divideResult]){
                console.log(`addResult = ${addResult}`)
                console.log(`divideResult = ${divideResult}`) 
            }) 
        */
       const [addResult, divideResult] = await Promise.all([addPromise, dividePromise])
       console.log(`addResult = ${addResult}`)
       console.log(`divideResult = ${divideResult}`)
    }
    
    window['asyncAwaitClient'] = asyncAwaitClient;
    
    

    // async (promise) - ERROR
    function divideAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        return new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if ( y === 0){
                    let e = new Error("Cannot divide by zero")
                    return rejectFn(e)
                }
                let result = x / y;
                console.log(`   [@Service] returning result`)
                resolveFn(result);
            }, 4000)
        })
        
    }

    /* 
    function divideAsyncPromiseClient(){
        console.log("[@Client] triggering divideAsync")
        const p = divideAsyncPromise(40,0)
        p.then(function(result){
            console.log(`[@Client] result = ${result}`)
        })
        p.catch(function(err){
            console.log(`[@Client] something went wrong: ${err.message}`)
        });
        
        // divideAsyncPromise(40,0)
        //     .then(function(result){
        //         console.log(`[@Client] result = ${result}`)
        //     })
        //     .catch(function(err){
        //         console.log(`[@Client] something went wrong: ${err.message}`)
        //     }); 
        
    } 
    */

    async function divideAsyncPromiseClient(){
        try {
            console.log("[@Client] triggering divideAsync")
            const result = await divideAsyncPromise(40,0)
            console.log(`[@Client] result = ${result}`)
        } catch (err) {
            console.log(`[@Client] something went wrong: ${err.message}`)
        }   
    }
    window['divideAsyncPromiseClient'] = divideAsyncPromiseClient;
})()



/* 
//Promise Chaining
// Follow up - async operation - 1
function multiply(n1, n2){
    return new Promise(function(resolveFn, rejectFn){
        setTimeout(function(){
            resolveFn(n1 * n2);
        },5000)
    })
}

console.log("[@Client] triggering addAsyncPromise")
let p = addAsyncPromise(100,200)
// p.then(fn), p.catch(fn) 
let p2 = p.then(function(result){
    console.log(`[@Client] result = ${result}`)
    let p2 = multiply(result, 2);
    return p2;
});
p2.then(function(doubleResult){
    console.log(`doubleResult = ${doubleResult}`);
})


// Follow up - sync operation - 1
console.log("[@Client] triggering addAsyncPromise")
let p = addAsyncPromise(100,200)
// p.then(fn), p.catch(fn) 
let p2 = p.then(function(result){
    console.log(`[@Client] result = ${result}`)
    const doubleResult = result * 2;
    return new Promise(function(resolveFn, rejectFn){
        resolveFn(doubleResult);
    })
});
p2.then(function(doubleResult){
    console.log(`doubleResult = ${doubleResult}`);
})


// Follow up - sync operation - 2
console.log("[@Client] triggering addAsyncPromise")
let p = addAsyncPromise(100,200)
// p.then(fn), p.catch(fn) 
let p2 = p.then(function(result){
    console.log(`[@Client] result = ${result}`)
    const doubleResult = result * 2;
    return Promise.resolve(doubleResult)
});
p2.then(function(doubleResult){
    console.log(`doubleResult = ${doubleResult}`);
})

// Follow up - sync operation - 3
console.log("[@Client] triggering addAsyncPromise")
let p = addAsyncPromise(100,200)
// p.then(fn), p.catch(fn) 
let p2 = p.then(function(result){
    console.log(`[@Client] result = ${result}`)
    const doubleResult = result * 2;
    return doubleResult;
});
p2.then(function(doubleResult){
    console.log(`doubleResult = ${doubleResult}`);
})

*/