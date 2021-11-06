const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function GetSpecialAttacks(...args) {
  const result = [];
  for (const special of character.special) {
    const obj = {};
    for (const property of args) {
      obj[property] = special.hasOwnProperty(property) ? special[property] : 'Описание недоступно';
    }
    result.push(obj);
  }
  return result;
}

GetSpecialAttacks('id', 'name', 'description');
