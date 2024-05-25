 import React from 'react'
 
 const Reports = () => {
   return (
     <div style={{ display: "flex"  }}>
        {/*MIDEBAR*/}
  <section
    className="midbar"
    style={{
      maxWidth: "20rem",
      width: "50%",
      borderRight: "0.0625rem solid rgb(234, 236, 240)",
      background: "rgb(249, 250, 251)"
    }}
  >
    <div className="header">
      <div className="leftpanel">Reports</div>
      <div className="rightpanel">{/* Right Pane Content */}</div>
    </div>
    <div className="slect">
      <div className="butx">
        <select className="form-control">
          <option value="select">All</option>
          <option value="PARTIES REPORTS">PARTIES REPORTS</option>
          <option value=" BILLS REPORTS">BILLS REPORTS</option>
          <option value="GST REPORTS">GST REPORTS</option>
          <option value="DAYWISE REPORTS">DAYWISE REPORTS</option>
        </select>
      </div>
    </div>
    <div className="scrollparty">
      <div className="partiesr">
        <div>PARTIES REPORTS</div>
      </div>
      <div className="pr">
        <div className="boxx">
          <img src="/assets/img/pr.svg" alt="" />
        </div>
        <div className="tr">
          <div className="tr-text">Transaction Report</div>
          <div className="csal">All customer ,All Transactions</div>
        </div>
      </div>
      <div className="billsr">BILLS REPORTS</div>
      <div className="salesr">
        <div className="boxsvgs">
          <img src="/assets/img/slr.svg" alt="" />
        </div>
        <div className="sr"> Sales Report</div>
      </div>
      <div className="purchase">
        <div className="boxsvgs">
          <img src="/assets/img/purchase.svg" alt="" />
        </div>
        <div className="purchasetxt">Purchase Report</div>
      </div>
      <div className="cashbookr">
        <div className="boxsvgs">
          <img src="/assets/img/chk.svg" alt="" />
        </div>
        <div className="cashbooktxt">Cashbook Report</div>
      </div>
      <div className="daywise"> DAYWISE REPORTS</div>
      <div className="salesday">
        <div className="boxsvgs">
          {" "}
          <img src="/assets/img/day.svg" alt="" />
        </div>
        <div className="salesdaytxt">
          Sales Day-wise Report <br />
          <p> Summary of all day-wise</p>
        </div>
      </div>
      <div className="salesday">
        <div className="boxsvgs">
          {" "}
          <img src="/assets/img/purchase.svg" alt="" />
        </div>
        <div className="salesdaytxt">
          Purchase Day-wise Report <br />
          <p> Summary of all day-wise</p>
        </div>
      </div>
      <div className="GST"> GST REPORTS</div>
      <div className="gst1">
        <div className="boxsvgs">
          {" "}
          <img src="/assets/img/gst.svg" alt="" />
        </div>
        <div className="gst1txt">GSTR-1</div>
      </div>
      <div className="gst2">
        <div className="boxsvgs">
          {" "}
          <img src="/assets/img/gst.svg" alt="" />
        </div>
        <div className="gst2txt">GSTR-2</div>
      </div>
      <div className="gst3b">
        <div className="boxsvgs">
          {" "}
          <img src="/assets/img/gst.svg" alt="" />
        </div>
        <div className="gst3btxt">GSTR-3B</div>
      </div>
    </div>
  </section>
  {/*end bar*/}
  <section className="endbar">
    <div className="rightsidereport">
      <div className="header">
        <div className="prs">
          <div className="boxx">
            <img src="/assets/img/pr.svg" alt="" />
          </div>
          <div className="txt">
            {" "}
            <strong>Transactions Reports</strong>
          </div>
        </div>
        <div className="buttn-hs">
          <div className="dpdf" style={{ marginRight: 20 }}>
            <button
              className="form-control"
              style={{ color: "rgba(0, 0, 0, 0.26)" }}
            >
              <img src="/assets/img/pdf.svg" alt="" /> Download PDF
            </button>{" "}
          </div>
          <div className="dxde" style={{ marginRight: 10 }}>
            <button
              className="form-control"
              style={{ color: "rgba(0, 0, 0, 0.26)" }}
            >
              <img src="/assets/img/excel.svg" alt="" /> Download Excel
            </button>
          </div>
        </div>
      </div>
      <div className="filtter">
        <button className="cn">
          Customers <div style={{ paddingLeft: 10 }}>0</div>
        </button>
      </div>
      <div className="ff">
        <div className="cusn">
          <label htmlFor="customer name">Customer name</label>
          <br />
          <input type="search" className="form-control" placeholder="Search" />
        </div>
        <div className="period">
          <label htmlFor="period">period</label>
          <br />
          <select className="form-control">
            <option value="custom date">Custom date</option>
            <option value="This month">This month</option>
            <option value=" Last Month"> Last Month</option>
            <option value="This week">This week</option>
            <option value=" Yesterday">Yesterday</option>
            <option value="Today">Today</option>
          </select>
        </div>
        <div className="start">
          <label htmlFor="start_date" className="form-label">
            Start
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            className="form-control"
          />
        </div>
        <div className="End">
          <label htmlFor="End" className="form-label">
            End
          </label>
          <input
            type="date"
            id="End_date"
            name="End_date"
            className="form-control"
          />
        </div>
      </div>
      <div className="totalentries">
        <p>Total 0 entries</p>
      </div>
      <div className="amchk">
        <div className="yougive">
          <h4 className="gysx"> ₹0.0</h4>
          <h4 className="yg">You Gave</h4>
        </div>
        <div className="yougote">
          <h4
            className="gysxs"
            style={{
              wordBreak: "break-word",
              fontSize: 23,
              color: "rgb(66, 66, 66)"
            }}
          >
            {" "}
            ₹0.0
          </h4>
          <h4
            style={{
              color: "rgb(22, 124, 78)",
              marginTop: "0.3rem",
              fontSize: 14
            }}
          >
            You Got
          </h4>
        </div>
        <div
          className=" ssr"
          style={{
            display: "flex",
            marginLeft: "1rem",
            marginTop: "1rem",
            height: 65,
            minWidth: 160,
            background: "rgb(243, 244, 245)",
            padding: "1rem",
            borderRadius: 12,
            flexDirection: "column",
            WebkitBoxAlign: "start",
            alignItems: "start",
            WebkitBoxPack: "center",
            justifyContent: "center"
          }}
        >
          <h4
            className="nts"
            style={{
              wordBreak: "break-word",
              fontSize: 23,
              color: "rgb(179, 35, 24)"
            }}
          >
            {" "}
            ₹0.0
          </h4>
          <h4
            className="nbal"
            style={{
              color: "rgb(102, 112, 133)",
              marginTop: "0.3rem",
              fontSize: 14
            }}
          >
            Net Balance
          </h4>
        </div>
      </div>
      <div className="nora">
        <div className="imgsrc" style={{ margin: "13%", marginLeft: "30%" }}>
          <img src="/assets/img/trans.svg" alt="" style={{ paddingLeft: 40 }} />{" "}
          <p
            style={{
              marginTop: "0.75rem",
              maxWidth: "15rem",
              textAlign: "center",
              color: "rgb(81, 81, 94)",
              overflow: "unset",
              whiteSpace: "break-spaces"
            }}
          >
            No transactions available to generate reports
          </p>
        </div>
      </div>
    </div>
  </section>
 
     </div>
   )
 }
 
 export default Reports
 