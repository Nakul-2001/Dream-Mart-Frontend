import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
    flex:4;
    margin:3px;
    min-width:30%;
    height:70vh;
    position:relative;
`
const Image=styled.img`
    width:100%; 
    height:100%;
    /* 100percent of what space assign to it by flex 1 */
    object-fit:cover;
`
const Info=styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

`
const Title=styled.h1`
    color:white;
    margin-bottom:20px;
    
`
const Button=styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    
`

const CategoryItem = ({item}) => {  
    const [hover,setHover]=useState(false);
  return (
    <Container onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img} alt="image"/>
        <Info>
            <Title cat={item.cat}>{hover==0?item.title:item.cat.toUpperCase()}</Title>
            <Button> SHOP NOW </Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem
