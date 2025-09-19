import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'


export default function CartPage(){
const { cart, remove, updateQty, total } = useCart()
const nav = useNavigate()


if(cart.length===0) return (
<div className="card">Your cart is empty. <Link to="/rooms">Browse rooms</Link></div>
)


return (
<div>
<h2>Your Booking Cart</h2>
<div className="card">
{cart.map(item => (
<div key={item.id} className="hstack" style={{justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #eef'}}>
<div>
<div style={{fontWeight:700}}>{item.title}</div>
<div className="small">₹{item.price} / night</div>
</div>
<div className="hstack">
<input className="input" type="number" min={1} value={item.nights} onChange={e=> updateQty(item.id, Number(e.target.value))} />
<div style={{width:12}} />
<button className="input" onClick={()=>remove(item.id)}>Remove</button>
</div>
<div style={{fontWeight:700}}>₹{item.price * item.nights}</div>
</div>
))}


<div className="hstack" style={{justifyContent:'space-between',marginTop:12}}>
<div style={{fontWeight:700}}>Total</div>
<div style={{fontWeight:700}}>₹{total}</div>
</div>


<div style={{marginTop:12}}>
<button className="btn" onClick={()=> nav('/checkout')}>Proceed to Checkout</button>
</div>
</div>
</div>
)
}