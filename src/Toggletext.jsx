import { useState } from 'react';

function Toggletext() {
    const [isvisible, setIsvisible] = useState(false);
  return (
    <div>
        <button onClick={()=>setIsvisible(!isvisible)}>{isvisible ? "❤️ Liked": "🤍 Like"}</button>
    </div>
  )
}

export default Toggletext