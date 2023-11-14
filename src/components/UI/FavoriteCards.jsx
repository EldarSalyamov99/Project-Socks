import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function FavoriteCards({ card })
{

    return (
    < div >
<Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.design} />
            <Card.Body>
              <Card.Title>{card.color}</Card.Title>
              <Card.Text>
              {card.img}
              </Card.Text>
            </Card.Body>
<div>
<Button type="submit"  href={`/cards/${card.id}`} variant="primary" size="sm">
 В корзину
</Button>{' '}
<Button   variant="danger" size="sm">
 Удалить
</Button>
</div>
          </Card>
        </Col>
      ))}
    </Row>

</div>

  )
}

// onclick={submitDelBasketHandler()}
// onClick={submitAddBasketHandler()} 




