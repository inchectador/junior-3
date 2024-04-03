import React from 'react'
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';

function Mobiliario() {

    const {VITE_HOST} = import.meta.env;
    const [productos, setProductos] = useState([]);


    
    useEffect(()=>{
        const controller = new AbortController();
        const options = {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            signal:controller.signal
        }


        fetch( VITE_HOST + 'Mobiliario' , options)
        .then(res => res.json())
        .then(data =>{
          setProductos(data.producto);
          console.log(data);
        })
        .catch(err => console.log(err)) 
        .finally(()=>controller.abort())
        
    },[])



    const primerProducto = productos[0];

  return (
    <>
  
    <div className='mobiliario'>
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[0].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[0].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[0].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[1].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[1].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[1].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[2].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[2].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[2].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[3].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[3].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[3].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
    </div>
      <div className='mobiliario2'>
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[4].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[4].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[4].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[5].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[5].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[5].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[6].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[6].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[6].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
      { primerProducto &&
       <Card className='mobiliario__card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{productos[7].Nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{productos[7].Precio}</Card.Subtitle>
          <Card.Text>
            {productos[7].Descripcion}
          </Card.Text>
          <Card.Link href="#">Todos los derechos reservados</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card> 
      }
















    </div>
  

    </>
  )
}

// de alguna manera lo que esta pasando aquí es que he intentado renderizar los productos a la misma vez que pedirlos
// así lo que consigo es ponerlos de manera ordenada. No sé exactamente como funciona, pero sirve

export default Mobiliario