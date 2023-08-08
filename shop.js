
const ITEMS = {
  AGED_BRIE: 'Aged Brie',
  BACKSTAGE: 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS: 'Sulfuras, Hand of Ragnaros'
}

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === ITEMS.AGED_BRIE) {
        this.increaseQuality(item);
      } else if (item.name === ITEMS.BACKSTAGE) {
        this.increaseQuality(item);
        if (item.sellIn < 11) {
          this.increaseQuality(item);
        }
        if (item.sellIn < 6) {
          this.increaseQuality(item);
        }
      } else if (item.name !== ITEMS.SULFURAS) {
        this.decreaseQuality(item);
      }

      if (item.name !== ITEMS.SULFURAS) {
        item.sellIn -= 1;
      }

      if (item.sellIn < 0) {
        if (item.name === ITEMS.AGED_BRIE) {
          this.increaseQuality(item);
        } else if (item.name === ITEMS.BACKSTAGE) {
          item.quality = 0;
        } else if (item.name !== ITEMS.SULFURAS) {
          this.decreaseQuality(item);
        }
      }
    }

    return this.items;
  }
}
