/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Table } from "antd";
import api from "../api";
import { useGlobalState } from "../components/UserContext";
import Column from "antd/es/table/Column";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useGlobalState("user");
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/patients/${user.id}`)
      .then((res) => {
        setData([res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mt-5 mx-8 shadow-md">
        <Table
          loading={loading}
          dataSource={data}
          rowKey="id"
          pagination={false}
          style={{ overflowX: "auto" }}
        >
          <Column
            title="Name"
            dataIndex="name"
            render={(name, record) => {
              return <div>{user.name}</div>;
            }}
          ></Column>
          <Column title="Message" dataIndex="message"></Column>
          <Column
            title="Fall Detection"
            dataIndex="fall_detection"
            render={(fall, record) => {
              return <div>{fall === true ? "True" : "False"}</div>;
            }}
          ></Column>
          <Column
            title="Urine Detection"
            dataIndex="urine_detection"
            render={(urine, record) => {
              return <div>{urine === true ? "True" : "False"}</div>;
            }}
          ></Column>
          <Column title="ECG" dataIndex="ecg"></Column>
        </Table>
      </div>
    </div>
  );
};

export default Home;
