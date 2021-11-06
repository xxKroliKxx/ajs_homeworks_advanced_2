import getSpecialAttacks from '../js/app';

test('sort1 test', () => {
  const r = getSpecialAttacks('id', 'name', 'description');
  const equal = [
    { id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон' },
    { id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно' },
  ];
  expect(r).toEqual(equal);
});
