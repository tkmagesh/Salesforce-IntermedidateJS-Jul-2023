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
})()