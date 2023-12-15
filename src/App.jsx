import { useState } from 'react';
import './App.css';

const cardData = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  // Agrega más tarjetas según sea necesario
];

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard === cardData.length - 1 ? 0 : prevCard + 1));
  };

  const prevCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? cardData.length - 1 : prevCard - 1));
  };

  return (
    <div className="card-slider">
      <button onClick={prevCard}>Anterior</button>
      <div className="card prev">{cardData[currentCard === 0 ? cardData.length - 1 : currentCard - 1].text}</div>
      <div className="card current">{cardData[currentCard].text}</div>
      <div className="card next">{cardData[currentCard === cardData.length - 1 ? 0 : currentCard + 1].text}</div>
      <button onClick={nextCard}>Siguiente</button>
    </div>
  );
};

export default App;
