var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

/* 
1. sort
2. filter
3. map
4. reduce
*/

function useCase(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}
/* 
console.group("Initial List")
    console.table(products);
console.groupEnd(); 
*/

useCase("Initial List", () => {
    console.table(products);
});

// sort
useCase("Sorting", () => {
    useCase("Default sort - products by id", () => {
        function sortProductsById(){
            for (let i = 0; i < products.length-1; i++) {
                for (let j = i+1; j < products.length; j++) {
                    if(products[i].id > products[j].id){
                        [products[i], products[j]] = [products[j], products[i]]
                    }
                }
            }
        }
        sortProductsById()
        console.table(products)
    })

    function sort(list, by){
        let comparer;
        if (!(typeof by === "function" || typeof by === 'string')) return;
        if (typeof by === "function") comparer = by;
        if (typeof by === "string") {
            comparer = function(item1, item2){
                if (item1[by] < item2[by]) return -1;
                if (item1[by] > item2[by]) return 1;
                return 0
            }
        }
        for (let i = 0; i < list.length-1; i++) {
            for (let j = i+1; j < list.length; j++) {
                if(comparer(list[i], list[j]) > 0){
                    [list[i], list[j]] = [list[j], list[i]]
                }
            }
        }
    }
    useCase("Any list by any attribute", () => {
        /* 
        function sort(list, attrName){
            for (let i = 0; i < list.length-1; i++) {
                for (let j = i+1; j < list.length; j++) {
                    if(list[i][attrName] > list[j][attrName]){
                        [list[i], list[j]] = [list[j], list[i]]
                    }
                }
            }
        } 
        */
        useCase("Products by cost", () => {
            sort(products, "cost") // products by cost
            console.table(products)
        })

        useCase("Products by units", () => {
            sort(products, "units") // products by units
            console.table(products)
        })
    })

    useCase("Any list by any comparer", () => {
        /* 
        function sort(list, comparerFn){
            for (let i = 0; i < list.length-1; i++) {
                for (let j = i+1; j < list.length; j++) {
                    if(comparerFn(list[i], list[j]) > 0){
                        [list[i], list[j]] = [list[j], list[i]]
                    }
                }
            }
        } 
        */
        useCase("Products by value [cost * units]", () => {
            let productsComparerByValue = function(p1, p2){
                let p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2.p2Value) return 0;
                return 1;
            }
            sort(products, productsComparerByValue)
            console.table(products)
        })
    })
})

 useCase("Filter", () => {
    useCase("Filter products by category - stationary", () => {
        function filterProductsByCategory(category){
            let result = []
            for (let product of products){
                if (product.category === category) 
                    result.push(product)
            }
            return result
        }
        let stationaryProducts = filterProductsByCategory('stationary')
        console.table(stationaryProducts)
    })
    useCase("Filter any list any category", () => {
        function filter(list, predicate){
            let result = []
            for (let item of list){
                if (predicate(item)) 
                    result.push(item)
            }
            return result
        }

        function negate(predicate){
            return function(...args){
                return !predicate(...args)
            }
        }
        
        useCase("Products by cost", () => {
            let costlyProductPredicate = function(product){
                return product.cost > 50
            };
            useCase("costly products [cost > 50]", () => {
                let costlyProducts = filter(products, costlyProductPredicate)
                console.table(costlyProducts)
            
            })
            useCase("affordable products", () => {
                /* 
                let affordableProductPredicate = function(product){
                    return !costlyProductPredicate(product)
                }; 
                */
                let affordableProductPredicate = negate(costlyProductPredicate)
                let affordableProducts = filter(products, affordableProductPredicate)
                console.table(affordableProducts)
            })
        })

        useCase("Product by units", () => {
            let understockedProductPredicate = function(product){
                return product.units < 60
            }
            useCase("understocked products [units < 60]", () => {
                let understockedProducts = filter(products, understockedProductPredicate)
                console.table(understockedProducts)
            })

            useCase("well stocked products", () => {
                /* 
                let wellStockedProductPredicate = function(product){
                    return !understockedProductPredicate(product)
                } 
                */    
                let wellStockedProductPredicate = negate(understockedProductPredicate)
                let wellStockedProducts = filter(products, wellStockedProductPredicate)
                console.table(wellStockedProducts)
            
            })
        })
    })
}) 
