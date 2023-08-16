// Bum!!! @ivanilson aqui.
// Então aqui vamos nós. Que saudades meu caro JS.
// Que pena ver você sendo substituido por uma coisa mais bonita
// Sim, estou falando do seu primo TS. Acontece, o meu amigo tambem
// foi substituido pela namorada. 


//Primeiro eu ia substituir Constantes para Nomes de Itens colocando em uma constante ITEM_NAMES
//para evitar o uso direto de strings literais.
const ITEM_NAMES = {
  AGED_BRIE: 'Aged Brie',
  BACKSTAGE_PASSES: 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS: 'Sulfuras, Hand of Ragnaros'
};

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


  //E que bagunça de loop eu vi aqui anteriormente. Então, mudei 
  //para essa outra bagunça ai para iterar sobre os itens.
  updateQuality() {
    for (const item of this.items) {
      this.updateSingleItem(item);
    }
    return this.items;
  }

  //Depois viria nesse carinha aqui, Para trabalhar com Separação
  //de responsabilidades para atualizar um único item, assim
  //podemos separar a logica para cada tipo de item.
  //Por exemplo, podemos editar so a idade usando o {updateAgedBrie}
  updateSingleItem(item) {
    switch (item.name) {
      case ITEM_NAMES.AGED_BRIE:
        this.updateAgedBrie(item);
        break;
      case ITEM_NAMES.BACKSTAGE_PASSES:
        this.updateBackstagePasses(item);
        break;
      case ITEM_NAMES.SULFURAS:
        break; // Sulfuras não muda
      default:
        this.updateNormalItem(item);
    }

    this.updateSellIn(item);
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  updateBackstagePasses(item) {
    if (item.quality < 50) {
      item.quality++;

      if (item.sellIn < 11 && item.quality < 50) {
        item.quality++;
      }

      if (item.sellIn < 6 && item.quality < 50) {
        item.quality++;
      }
    }

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  //Ta ver aquela cena repetitiva para diminuir a qualidade? então, eu mudei assi:
  //{updateNormalItem} centralizando em um unico lugar.

  updateNormalItem(item) {
    if (item.quality > 0) {
      item.quality--;

      if (item.sellIn < 0 && item.quality > 0) {
        item.quality--;
      }
    }
  }

  //Criei tambem este metodo para atualizar o valor {sellIn} de um item
  //separando a logica.
  updateSellIn(item) {
    if (item.name !== ITEM_NAMES.SULFURAS) {
      item.sellIn--;
    }
  }
}

//Para testar...
const items = [new Item('Aged Brie', 5, 10), new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)];
const shop = new Shop(items);
shop.updateQuality();
console.log(shop.items);

//Se meu professor de Java visse isso ia ficar tãooo orgulhoso. Ou não nem... PROFESSORES :(
