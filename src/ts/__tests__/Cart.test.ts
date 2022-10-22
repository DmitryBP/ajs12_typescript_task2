import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('addCard should add item to this_items', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(111, 'autumn', 'DDT', 150))

  expect(cart.items.length).toBe(cart.items.length + 1);
});
