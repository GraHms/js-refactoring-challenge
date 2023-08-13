const DEFAULT_NAME = {
  AGED_BRIE: 'Aged Brie',
  BACKSTAGE_PASSES: 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS: 'Sulfuras, Hand of Ragnaros',
}

class Item {
  constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
      this.items = items;
  }
  updateQuality() {
      for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].name != DEFAULT_NAME.SULFURAS) {
              this.items[i].sellIn -= 1;
              if (this.items[i].name != DEFAULT_NAME.BACKSTAGE_PASSES && this.items[i].name != DEFAULT_NAME.AGED_BRIE) {
                  if (this.items[i].quality > 0) {
                      this.items[i].quality -= 1;
                  }
              } else {
                  if (this.items[i].quality < 50) {
                      this.items[i].quality += 1;
                      if (this.items[i].name == DEFAULT_NAME.BACKSTAGE_PASSES) {
                          if (this.items[i].sellIn < 11) {
                              this.items[i].quality += 1;
                          }
                          if (this.items[i].sellIn < 6) {
                              this.items[i].quality += 1;
                          }
                      }
                      if (this.items[i].name === DEFAULT_NAME.AGED_BRIE) {
                          if (this.items[i].sellIn < 0) {
                              this.items[i].quality += 1;
                          }
                      }
                  }
                  if (this.items[i].name == DEFAULT_NAME.BACKSTAGE_PASSES && this.items[i].sellIn < 0) {
                      this.items[i].quality = 0;
                  }
              }
          }
      }
      return this.items;
  }
}
