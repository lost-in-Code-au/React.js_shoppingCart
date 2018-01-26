module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
      localStorage.clear();
      localStorage.setItem('product', JSON.stringify([
        {
          id: '0011001',
          name: 'PUNK IPA',
          image: 'https://www.brewdog.com/images/products/large/1502198090punk_bottle.jpg',
          description: "This 5.6% trans-atlantic fusion IPA is light golden in colour with tropical fruits and light caramel on the nose. The palate soon becomes assertive and resinous with the New Zealand hops balanced by the biscuit malt. The finish is aggressive and dry with the hops emerging over the warming alcohol. This fresh, full flavour natural beer is our tribute to the classic IPAs of yester-year. The post modern twist is the addition of amazing fruity hops giving an explosion of tropical fruit flavours and a sharp bitter finish.",
          variants: [
            {
              sku: '123123',
              type: '330ML BOTTLE',
              price: 1.80,
              inventory: 1
  
            },
            {
              sku: '123124',
              type: '3 X 330ML BOTTLES',
              price: 5.25,
              inventory: 3
            },
            {
              sku: '1231235',
              type: '6 X 330ML BOTTLES',
              price: 10.25,
              inventory: 6
            },
            {
              sku: '1231235',
              type: '12 X 330ML BOTTLES',
              price: 20.00,
              inventory: 12
            }
          ]
        },
        {
          id: '0011002',
          name: '5AM SAINT',
          image: 'https://www.brewdog.com/images/products/large/15022003875AM.jpg',
          description: 'T5AM Saint is The Holy Grail of red ales. We live in a world of disposable deities.Someone, somehow has managed to press that big, flashing moronic override button and we are hard wired straight into the pockets of false idols trying to make a quick buck. Sadly, for a lot of people the same mentality applies to beer. But who is to know what is worth worshiping when monolithic advertising budgets have you sucked down the rabbit hole in the blink of an eye? At BrewDog we are on a mission to open as many peoples eyes as possible. Cast away any aspersions and let the crook of BrewDog be your guide in a whirlwind of conformity and mediocrity. Once this ruby liquid forms a foamy halo around your glass, you will never want to look back.',
          variants: [
            {
              sku: '123133',
              type: '330ML BOTTLE',
              price: 1.80,
              inventory: 1
  
            },
            {
              sku: '123134',
              type: '3 X 330ML BOTTLES',
              price: 5.25,
              inventory: 3
            },
            {
              sku: '1231245',
              type: '6 X 330ML BOTTLES',
              price: 10.25,
              inventory: 6
            },
            {
              sku: '1231245',
              type: '12 X 330ML BOTTLES',
              price: 20.25,
              inventory: 12
            }
          ]
        }
      ]))
    }
  
}