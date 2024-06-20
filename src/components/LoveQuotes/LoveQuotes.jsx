import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import quotes from './quotes';

Modal.setAppElement('#root');  // Necessário para acessibilidade

const LoveQuotes = ({ open, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(open);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Sincronizar o estado do modal com a prop 'open'
    setModalIsOpen(open);
  }, [open]);

  // Lista de frases de amor

  useEffect(() => {
    // Função para calcular o dia do ano
    const getDayOfYear = (date) => {
      const startOfYear = new Date(date.getFullYear(), 0, 1);
      const diff = date - startOfYear;
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.floor(diff / oneDay);
    };

    const dayOfYear = getDayOfYear(new Date());
    const decadeOfYear = Math.floor(dayOfYear / 10);
    const quoteOfTheDecade = quotes[decadeOfYear % quotes.length];
    setQuote(quoteOfTheDecade);
  }, []);


  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Frase de Amor"
        style={customStyles}
      >
        <h2 className="font-bold text-xl mb-2">Frase de Amor do Dia 💘</h2>
        <p className='text-gray-700 text-base'>{quote}</p>
        <StyledCloseButton onClick={closeModal}>Fechar</StyledCloseButton>
      </Modal>
    </div>
  );
};


const StyledCloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #4AC5FA;
  color: white;
  margin-top: 20px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px'
  }
};

export default LoveQuotes;
