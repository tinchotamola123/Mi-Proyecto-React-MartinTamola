const MyComponent = (props) =>{
    console.log(props);
    console.log(props.value);
    return(
        <h1>Este es mi primer componente {props.name}</h1>
    )
}

export default MyComponent;