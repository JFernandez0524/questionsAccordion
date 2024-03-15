import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info, toggleAnswer, activeId }) => {
  const isActive = id === activeId;

  return (
    <div className='question' key={id}>
      <header>
        <h5>{title}</h5>
        <button
          type='button'
          className='btn question-btn'
          onClick={() => toggleAnswer(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </div>
  );
};

export default Question;
