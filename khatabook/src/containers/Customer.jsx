 
import React, { useState } from 'react';


const Customer = () => {



  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    amount: ''
  });
  const [parties, setParties] = useState([]);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formatAmount = (event) => {
    const { name, value } = event.target;
    const formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    setFormValues({ ...formValues, [name]: formattedValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setParties([...parties, formValues]);
    setFormValues({ name: '', email: '', phone: '', amount: '' });
    closeForm();
  };







  return (
    <div style={{ display: "flex" }} >


      {/*MIDBAR*/}

      <section className="midbar">
        <div className="list_left">
          <div className="top-bar_left">
            <div className="give">
              <div className="__type"> You'll Give :</div>
              <div className="rupee">₹ 0</div>
              <div className="arrow">
                <img src="/assets/img/profitarrow.svg" alt="svg" />
              </div>
            </div>
          </div>
          <div className="get">
            <div className="__type"> You 'll Get :</div>
            <div className="rupee">₹ 0</div>
            <div className="arrow">
              <img src="/assets/img/lossarrow.svg" alt="" />
            </div>
          </div>
          <div className="view-report">
            <button className="viewr">
              <span className="repicon">
                <img src="/assets/img/viewreport.svg" alt="" />
              </span>
              View Report
            </button>
          </div>
        </div>

        <div className="filltercheck">
          <div className="form-wrapper">
            <form action="">
              <div className="form-body">
                <div className="box1">
                  <label
                    htmlFor=""
                    className="styleText"
                    style={{ color: "rgb(81, 81, 94)" }}
                  >
                    Search for customers
                  </label>{" "}
                  <br />
                  <input
                    className="search-input"
                    type="text"
                    name="n"
                    placeholder="Name or phone number"
                    required=""
                  />
                </div>
                <div className="box2">
                  <label
                    htmlFor=""
                    className="styleText"
                    style={{ color: "rgb(81, 81, 94)" }}
                  >
                    Filter By
                  </label>{" "}
                  <br />
                  <select className="filtericon">
                    <option value="select" style={{ color: "rgb(81, 81, 94)" }}>
                      Select
                    </option>
                    <option value="All">All</option>
                    <option value="You'll give">You'll give</option>
                    <option value="You'll get">You'll get</option>
                    <option value="Settled">Settled</option>
                  </select>
                </div>
                <div className="box3">
                  <label
                    htmlFor=""
                    className="styleText"
                    style={{ color: "rgb(81, 81, 94)" }}
                  >
                    Sort By
                  </label>
                  <br />
                  <select className="sorticon">
                    <option value="select">Select</option>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Highest Amount">Highest Amount</option>
                    <option value="Least Amount">Least Amount</option>
                    <option value="By Name">By Name</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>{" "}
              {/*form-body-end*/}
            </form>
          </div>
          {/*shaukarimg */}
          {parties.length > 0 ? (
        <ol style={{ display: 'flex', flexDirection: 'column' }} id="partiesList">
          {parties.map((party, index) => (
            <li key={index}>
              {`name-${party.name} - email-${party.email} - phone-${party.phone} - amount-${party.amount}`}
            </li>
          ))}
        </ol>
      ) : (
        <div className="shaukarimg">
          <img src="/assets/img/shaukar.svg" alt="" />
          <div className="zero-state__component-text">
            <div className="MuiTypography-root MuiTypography-h4 css-w66vjk" />
            <div className="MuiTypography-root MuiTypography-subtitle1 css-xs2tpr">
              No party data available for applied filters
            </div>
          </div>
        </div>
      )}
          {/*buttton add customer*/}
          <div className="card">
            <div className="card-footer" >
              <input
                type="button" className="addcst"  onClick={openForm} defaultValue="+Add customer"/>

          {isOpen && (
        <div className="popup-container">
          <div className="overlay" onClick={closeForm}></div>

          <div className="popup-form">
            <span className="close-btn" onClick={closeForm}>&times;</span>
            <h2>Add New Party</h2>
            <hr />
            <form id="myForm" onSubmit={handleSubmit}>
              <label htmlFor="name">Party Name</label><br />
              <input
                style={{ margin: '10px', borderRadius: '10px', width: '100%', height: '35px' }}
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Enter Party Name"
              /><br />
              <label htmlFor="email">Email:</label><br />
              <input
                style={{ margin: '10px', borderRadius: '10px', width: '100%', height: '35px' }}
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter Email"
              /><br />
              <label htmlFor="phone">Phone Number</label><br />
              <input
                style={{ margin: '10px', borderRadius: '10px', width: '100%', height: '35px' }}
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
              /><br />
              <label htmlFor="amount">Opening Balance</label><br />
              <input
                style={{ margin: '10px', borderRadius: '10px', width: '100%', height: '35px' }}
                type="text"
                id="amount"
                name="amount"
                value={formValues.amount}
                onChange={formatAmount}
                placeholder="Enter Amount"
              /><br /><br />
              <input
                style={{ margin: '10px', borderRadius: '10px', width: '50%', height: '35px', backgroundColor: '#008CBA', color: '#fff' }}
                type="submit"
                value="Add Customer"
              />
            </form>
          </div>
        </div>
      )}
    



            </div>
          </div>
        </div>
      </section>
      <section className="endbar"  >
        <div className="reportcustomer">
          <div className="imgcustomerright">
            <img src="/assets/img/customerright.svg" alt="" />
          </div>
          <div className="statetext"> No customer selected</div>
        </div>
      </section>

    </div>
  )
}

export default Customer
