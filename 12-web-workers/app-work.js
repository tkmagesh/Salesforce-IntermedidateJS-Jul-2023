
function doWork(){
    for(let i = 1; i <= 10000; i++){
        for (let j = 0; j < 5000; j++)
            for(let k = 0; k < 1000; k++){

            }
        if (i % 100 === 0){
            const percentCompleted = (i / 10000) * 100
            self.postMessage({ type :'progress', percentCompleted : percentCompleted })
        }
    }
        
}

self.addEventListener('message', function(evt){
    if (evt.data.type === 'start'){
        console.log('[worker] - starting...')
        doWork()
        self.postMessage({ type :'done' })
    }
})
console.log('app-work loaded!')