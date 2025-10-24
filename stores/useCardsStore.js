// /stores/useCardsStore.js
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: [
      {
        id: 1,
        text: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        oldPrice: "$794",
        newPrice: "$963",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 2,
        text: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        oldPrice: "$247",
        newPrice: "$454",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 3,
        text: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        oldPrice: "$136",
        newPrice: "$658",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 4,
        text: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        oldPrice: "$763",
        newPrice: "$622",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 5,
        text: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        oldPrice: "$721",
        newPrice: "$712",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 6,
        text: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        oldPrice: "$517",
        newPrice: "$780",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 7,
        text: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        oldPrice: "$214",
        newPrice: "$286",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 8,
        text: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        oldPrice: "$655",
        newPrice: "$827",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 9,
        text: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        oldPrice: "$660",
        newPrice: "$663",
        imageUrl: "/card_1.jpg"
      },
      {
        id: 10,
        text: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        oldPrice: "$915",
        newPrice: "$510",
        imageUrl: "/card_1.jpg"
      }
    ]
  }),

  getters: {
    allCards: (state) => state.cards
  }
})
