import React from 'react'

import { Card } from 'react-bootstrap'

const TodoItem = ({title, content}) => (
    <Card style={{ width: '18rem'}}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            {content}
        </Card.Body>
    </Card>
)

export default TodoItem;