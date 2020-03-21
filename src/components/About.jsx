import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/lab69-b3182.appspot.com/o/XNX.jpg?alt=media&token=f88f190d-cd5f-446a-92c2-64aca07d7586'} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Thanasiri Premasathira (610610607)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
