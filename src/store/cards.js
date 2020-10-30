import { writable } from "svelte/store";

export const cards = writable({
  0: { code: "Animal", clickable: true, flipped: false, couple: 2 },
  1: { code: "Forest", clickable: true, flipped: false, couple: 3 },
  2: { code: "Animal", clickable: true, flipped: false, couple: 0 },
  3: { code: "Forest", clickable: true, flipped: false, couple: 1 },
});
const flippedCards = writable([])

export const fnCards = {
  resetCards() {
    cards.set({
      0: { code: "Animal", clickable: true, flipped: false, couple: 2 },
      1: { code: "Forest", clickable: true, flipped: false, couple: 3 },
      2: { code: "Animal", clickable: true, flipped: false, couple: 0 },
      3: { code: "Forest", clickable: true, flipped: false, couple: 1 },
    })
  },
  updateCards(idx) {
    cards.update(deck => {
      flippedCards.update(set => {
        set.push(idx)
        if(set.length === 2) {
          if(deck[set[0]].code !== deck[set[1]].code) {
            set.forEach(key => {
              deck[key].clickable = true
              deck[key].flipped = false
            })
          }
          return []
        }
        return set
      })

      return {...deck}
    })
  },
  checkState() {
    let needReset = true
    cards.update(set => {
      Object.keys(set).forEach(key => {
        if(!set[key].flipped) needReset = false
      })
      return set
    })
    return needReset
  }
}