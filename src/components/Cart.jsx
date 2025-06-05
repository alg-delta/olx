import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
export default function Cart({cartItems, add, remove}) {
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.price*product.number, 0
  )

  const buy = () =>{
    alert("Дякую за замовлення")
  }
  return (
    <Alert variant="success">
    <Alert.Heading>Корзина</Alert.Heading>
    {/* {cartItems.length === 0 && <р>Корзина порожня</р>} */}
<table>
<tr>
<td width="25%" >назва</td>
<td width="25%" >кількість</td>
<td width="25%" >ціна</td>
<td width="25%" >всього</td>
</tr>
{cartItems.map ((product) => (
<tr>
<td width="25%">{product.name}</td>
<td width="25%"><Button onClick={()=>remove(product)} variant="danger">-</Button>{product.number}<Button onClick={()=>add(product)}  variant="success">+</Button>
</td>
<td width="25%" >{product.price}
</td>
<td width="25%">{product.price * product.number}</td>
</tr>
))}
</ table>
    <hr />
    <p className="mb-0">
      Сума до сплати {totalPrice}
    </p>

    
{cartItems.length > 0 && <Button onClick={()=>buy(alert)}>Сплатити</Button>}
  </Alert>
);
}
