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
            /* fill in the blanks */
        }
        sortProductsById()
        console.table(products)
    })

    useCase("Any list by any attribute", () => {
        function sort(/*  */){
            /* fill in the blanks */
        }
        useCase("Products by cost", () => {
            sort(/* .... */) // products by cost
            console.table(products)
        })

        useCase("Products by units", () => {
            sort(/* .... */) // products by units
            console.table(products)
        })
    })
})

/* useCase("Filter", () => {
    useCase("Filter by category - stationary", () => {
        console.table(products)
    })
}) */
