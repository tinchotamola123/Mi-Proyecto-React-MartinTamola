const products = [
    {id: 1, title:'Vapo1', description:'Electronico', price:100 , stock:20 , pictureUrl:'http://rosariovapeshop.com/wp-content/uploads/2020/09/vaporesso-revenger-x-kit_black.jpg'},
    {id: 2, title:'Vapo2', description:'Mecanico', price:100 , stock:20 , pictureUrl:'https://vapeomex.com/wp-content/uploads/2019/02/blackcamo_standing-min.png'},
    {id: 3, title:'Vapo3', description:'Kit de Inicio', price:100 , stock:20 , pictureUrl:'https://www.momo-once.com.ar/wp-content/uploads/2018/06/vape-kits-smoktech-stick-v8-kit-with-tfv8-big-baby-beast-tank-1_grande.jpg'}
]

export const getProducts = () =>{
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            return resolve(products);
        },2000)    
    })

    return promise
}

export const getProduct = (id) =>{
    const promise = new Promise((resolve) => {
        const product = products.find((product) => product.id === id) 
        setTimeout(()=>{
            return resolve(product);
        })    
    })

    return promise
}
