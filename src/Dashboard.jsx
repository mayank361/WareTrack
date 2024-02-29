import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Dashboard.css';
import kart from'./kart.png';
import inr from './inr.png';
import kartFull from './kartfull.png';
import category from './category.png';
import del from './del.png';
import view from './view.png';
import edit from './edit.png';



function Dashboard(){
    const [stats, setStats] = useState({
        products: 0,
        value: 0,
        stockout: 0,
        categories: 0
      });
      const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('Error fetching inventory stats:', error);
      });
    axios.get('/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching inventory items:', error);
      });
  }, []);

    return(
        <div className="containerdb">
      <Navbar />
      <div className="dbcon">
        <div className="sideBoxdb">
          <div className="statsdb">Inventory Stats</div>
          <div className="box1db">
            <img className='icondb' src={kart} alt="" />
            <div className="textdb">Total Products</div>
            <div className="valuesdb">{stats.products}</div>
          </div>
          <div className="box2db">
            <img className='icondb' src={inr} alt="" />
            <div className="textdb">Total Store Value</div>
            <div className="valuesdb">{stats.value}</div>
          </div>
          <div className="box3db">
            <img className='icondb' src={kartFull} alt="" />
            <div className="textdb">Out of Stock</div>
            <div className="valuesdb">{stats.stockout}</div>
          </div>
          <div className="box4db">
            <img className='icondb' src={category} alt="" />
            <div className="textdb">All Categories</div>
            <div className="valuesdb">{stats.categories}</div>
          </div>
        </div>
        <div className="contentdb">
          <div className="tittledb">
            <h1>Inventory Items</h1>
          </div>
          <div>
            <input className='searchbardb' type="text" placeholder="Search by name" />
            <table border="1">
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.value}</td>
                    <td>
                      <button className='buttondb'><img src={view} alt="View" /></button>
                      <button className='buttondb'><img src={edit} alt="Edit" /></button>
                      <button className='buttondb'><img src={del} alt="Delete" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;