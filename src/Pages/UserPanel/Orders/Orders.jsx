import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const select = useSelector((store)=> store.courseInfo.courseId)
  
  useEffect(()=>{
    setOrders(orders.concat(select))
  } ,[])

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/v1/orders`, {
  //     headers: {
  //       Authorization: `Bearer ${
  //         JSON.parse(localStorage.getItem("user")).token
  //       }`,
  //     },
  //   })
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setOrders(data);
  //     })
  //     .catch(err => console.log(err))
  // }, []);

  return (
    <div>
      <div className="order">
        <table className="order__table">
          <thead className="order__table-header">
            <tr className="order__table-header-list">
              <th className="order__table-header-item">شناسه</th>
              <th className="order__table-header-item">وضعیت</th>
              <th className="order__table-header-item">دوره</th>
              <th className="order__table-header-item">مبلغ</th>
              <th className="order__table-header-item">عملیات ها</th>
            </tr>
          </thead>
          <tbody className="order__table-body">
            {orders.map((order, index) => (
              <tr key={order._id} className="order__table-body-list">
                <td className="order__table-body-item">
                  <a href="#" className="order__table-body-link">
                    {index + 1}
                  </a>
                </td>
                <td className="order__table-body-item">
                  {order.isComplete === 0 ? 'در حال برگزاری' : 'تکمیل شده'}
                </td>
                <td className="order__table-body-item">
                 {order.name}
                </td>
                <td className="order__table-body-item">
                 {order.price}
                </td>
                <td className="order__table-body-item">
                  <a className="order__table-body-btn" href="#">
                    نمایش
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}