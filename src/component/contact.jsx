import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const url = "https://jsonplaceholder.typicode.com/users";

export function Contact() {
    const [userList, setUserList] = useState([]);

    const getUser = async() => {
        const users = await (await fetch(url)).json();
        return users;
    }

    useEffect(() =>{
        const users = getUser().then(data =>{setUserList(data)});
        console.log(userList)
        // setUserList(users);
    },[])

    return (
        <Container >
        <Row>
        {userList.map((user) =>{
            return (
                <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="d-inline-block" >
                    <Card.Body>
                        <p>{user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Company: {user.company.name}</p>
                    </Card.Body>
                </Card>
                </Col>
            )
        })}
        </Row>
        </Container>
    )
}