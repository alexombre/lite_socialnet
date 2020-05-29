import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, List } from 'antd';
import Cookies from 'js-cookie';

const User = () => {
  let { id } = useParams(); 
  const [username, setUsername] = useState('');   
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState(''); 
  const [data, setData ]= useState([]);
  
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-minireseausocial.mathis-dyk.fr/posts?user.id='+id, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`, 
            'Content-Type': 'application/json'
          }
          
        });
        const text = await response.json();
        
        setData(text.filter((obj) => {
            return obj.user !== null && Object.keys(obj.user).length > 0;
        }).map((obj) => obj.text ));
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-minireseausocial.mathis-dyk.fr/users/' + id, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`, 
          'Content-Type': 'application/json'
        }
        
      });
      const text = await response.json();
        setUsername(text.username);
        setEmail(text.email);
        setDescription(text.description)
    }
    fetchData();
  }, []);
  
  return (
    <>
    <Row>
      <Col span={12}>
        <div className="site-card-border-less-wrapper">
          <Card title={username} bordered={false} extra={id} style={{ width: 300 }}>
            <p>Email: {email}</p>
            <p>{description}</p>
    
          </Card>
        </div>
      </Col>
      <Col span={12}>
        <List
          size="large"
          header={<div>All posts</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Col>
    </Row>
    
    
    
    </>
  )
}

export default User