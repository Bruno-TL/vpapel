export const PapelariaData = () => {
  const papelaria = [
    {
      id: '1',
      name: 'Bíblia anote + Mini devocional',
      cor: 'Variada',
      customizable: true,
      description: 'Capas personalizadas a sua escolha',
      description1: false,
      description2: false,
      description3: false,
      description4: false,
      description5: false,
      price: '70,00',
      available: true,
      size: false,
      url: '/issets/imageProdutos/bibliaMini/bibliaMini.png',
      minimumOrder: false,
    },
    {
      id: '2',
      name: 'Caderneta de Saúde',
      cor: 'Variada',
      customizable: true,
      description: 'Caderneta de vacinação personalizada - 112 páginas',
      description1: '- Caderneta de saúde (vacina)',
      description2: '- Capa dura',
      description3: '- Laminação FOSCA',
      description4: '- elástico ( 7mm )',
      description5: '- wire-o',
      price: '35,00',
      available: true,
      size: false,
      url: '/issets/imageProdutos/caderneta/caderneta.png',
      minimumOrder: false,
    },
  ];

  return papelaria;
};
