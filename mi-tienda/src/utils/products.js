const products = [
    {id: 1, title:'Vapo 1', category:'vapos' , description:'Electronico', price:100 , stock:20 , pictureUrl:'http://rosariovapeshop.com/wp-content/uploads/2020/09/vaporesso-revenger-x-kit_black.jpg'},
    {id: 2, title:'Vapo 2', category:'vapos' , description:'Mecanico', price:100 , stock:20 , pictureUrl:'https://vapeomex.com/wp-content/uploads/2019/02/blackcamo_standing-min.png'},
    {id: 3, title:'Vapo 3', category:'vapos' , description:'Kit de Inicio', price:100 , stock:20 , pictureUrl:'https://www.momo-once.com.ar/wp-content/uploads/2018/06/vape-kits-smoktech-stick-v8-kit-with-tfv8-big-baby-beast-tank-1_grande.jpg'},
    {id: 4, title:'Resi 1', category:'resis' , description:'Resistencia Comercial', price:50 , stock:20 , pictureUrl:'https://d2r9epyceweg5n.cloudfront.net/stores/001/601/775/products/resis-pen1-8f3e6f7d3755ffd7b316166577945694-1024-1024.png'},
    {id: 5, title:'Resi 2', category:'resis' , description:'Resistencia de Nicrom', price:50 , stock:20 , pictureUrl:'https://cdn.shopify.com/s/files/1/0306/6983/2327/products/AlienMech_600x.jpg?v=1596134435'},
    {id: 6, title:'Resi 3', category:'resis' , description:'Resistencia de Malla', price:50 , stock:20 , pictureUrl:'https://jaquevape.com/wp-content/uploads/2019/01/OFRF-nexMesh-Replacement-Mesh-Coils-kit_1024x1024@2x.jpg'},
]

export const getAllProducts = () =>{
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            return resolve(products);
        },2000)    
    })
    return promise

}

export const getProduct = (id) =>{
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id)) 
        setTimeout(()=>{
            return resolve(result);
        }, 2000)    
    })

    return promise
}

export const getProductsByCategory = (categoryId) =>{
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(()=>{
            return resolve(results);
        },2000)    
    })

    return promise
}
