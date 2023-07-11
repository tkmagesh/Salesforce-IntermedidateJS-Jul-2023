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
})()