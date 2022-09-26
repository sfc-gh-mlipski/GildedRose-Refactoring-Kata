import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([ new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);

    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();

    expect(items).toEqual([{
      "name": "+5 Dexterity Vest",
      "quality": 18,
      "sellIn": 8
    },
      {
        "name": "Aged Brie",
        "quality": 2,
        "sellIn": 0
      },
      {
        "name": "Elixir of the Mongoose",
        "quality": 5,
        "sellIn": 3
      },
      {
        "name": "Sulfuras, Hand of Ragnaros",
        "quality": 80,
        "sellIn": 0
      },
      {
        "name": "Sulfuras, Hand of Ragnaros",
        "quality": 80,
        "sellIn": -1
      },
      {
        "name": "Backstage passes to a TAFKAL80ETC concert",
        "quality": 22,
        "sellIn": 13
      },
      {
        "name": "Backstage passes to a TAFKAL80ETC concert",
        "quality": 50,
        "sellIn": 8
      },
      {
        "name": "Backstage passes to a TAFKAL80ETC concert",
        "quality": 50,
        "sellIn": 3
      }])
  });
});
