import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Row, Col, Table, Card } from 'antd';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {postCreate} from "../redux/post/postActions.js"

const Home = () => {
  
  const [username, setUsername] = useState('');   
  const [data, setData ]= useState([]);
  const [text, setText ]= useState("");
  const [id, setId ]= useState("");
  const dispatch = useDispatch();
    
    
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-minireseausocial.mathis-dyk.fr/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
          
        });
        const text = await response.json();
        
        setData(text.filter((obj) => {
            return obj.user !== null && Object.keys(obj.user).length > 0;
        }).map((obj) => {return {post: obj.text, username: obj.user }}));
        console.log(text.filter((obj) => {
            return obj.user !== null && Object.keys(obj.user).length > 0;
        }).map((obj) => {return {post: obj.text, username: obj.user }}));
    }
    fetchData();
  }, []);  
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`, 
            'Content-Type': 'application/json'
          }
          
        });
        const text = await response.json();
        setId(text.id);

    }
    fetchData();
  }, []); 
    
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <Link to={`/user/` + text.id}>{text.username}</Link>
    },
    {
      title: 'Post',
      dataIndex: 'post',
      key: 'post',
    }
    
  ];
  return (
    <>
    <h1>Home Page !</h1>
    <Row>
      <Col span={12}>
        <div className="site-card-border-less-wrapper">
          <Card title="Publie un post !" bordered={false} style={{ width: 300 }}>

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => { dispatch(postCreate(text, id)); } }>Post !</button>
          </Card>
        </div>
      </Col>
      <Col span={12}>
        <Table dataSource={data} columns={columns} />;
      </Col>
    </Row>
    </>
  )
}

export default Home