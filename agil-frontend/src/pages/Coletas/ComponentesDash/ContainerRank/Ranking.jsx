import React, { useState, useEffect } from 'react';
import RankItem from './RankItem';

const Ranking = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://665bdcdb3e4ac90a04d8207c.mockapi.io/ranking/ranking');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Data format error: expected an array');
        }
        setRankings(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div>
      {rankings.map((item, index) => (
        <RankItem
          key={item.id}
          posicao={index + 1}
          nome={item.name}
          porcentagem={item.score}
        />
      ))}
    </div>
  );
};

export default Ranking;
