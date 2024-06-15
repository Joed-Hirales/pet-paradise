import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../css/StyleButtons.css';
function CardPet({ pet }) {
  const cardStyle = {
    width: '18rem',
    height: '24rem', // Ajusta la altura según sea necesario
  };

  const imgStyle = {
    height: '12rem', // Ajusta la altura según sea necesario
    objectFit: 'cover',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={`http://pet-paradise-three.vercel.app${pet.img}`} alt={pet.name} style={imgStyle} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{pet.breed}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted color">{pet.gender}</Card.Subtitle>
        <Card.Text>
          <br></br>
        </Card.Text>
        <Button className='ButtonColor' variant="dark" href={`/PageWithPet/${pet.id}`}> Mostrar informacion</Button>
      </Card.Body>
    </Card>
  );
}
export default CardPet;
