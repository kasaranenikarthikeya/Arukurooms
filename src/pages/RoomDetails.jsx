import React, { useState } from 'react'
import ROOMS from '../data/rooms'
import { useCart } from '../context/CartContext'


export default function RoomDetails(){
const { id } = useParams()
const room = ROOMS.find(r=> r.id===id)
const [nights, setNights] = useState(1)
const { add } = useCart()
const nav = useNavigate()


if(!room) return <div className="card">Room not found</div>


function handleBook(){
add({ id: room.id, title: room.title, price: room.price, nights })
nav('/cart')
}


return (
<div>
<div className="card grid" style={{gridTemplateColumns:'1fr 360px', gap:20}}>
<div>
<img className="room-img" src={room.images[0]} alt="" />
<h2>{room.title}</h2>
<p className="small">{room.description}</p>
<h4>Amenities</h4>
<ul>
{room.amenities.map(a=> <li key={a} className="small">• {a}</li>)}
</ul>
</div>
<div className="card">
<div className="hstack" style={{justifyContent:'space-between'}}>
<div>
<div className="small">Price / night</div>
<div style={{fontWeight:700}}>₹{room.price}</div>
</div>
<div>
<label className="small">Nights</label>
<input className="input" type="number" min={1} value={nights} onChange={e=>setNights(Number(e.target.value))} />
</div>
</div>
<div style={{marginTop:12}}>
<div className="small">Total</div>
<div style={{fontSize:18,fontWeight:700}}>₹{room.price * nights}</div>
</div>
<button className="btn" style={{width:'100%',marginTop:12}} onClick={handleBook}>Add to Cart</button>
</div>
</div>
</div>
)
}