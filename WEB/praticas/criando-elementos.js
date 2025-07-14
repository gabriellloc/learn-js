const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")

guestName.textContent = "Gabriel"

newGuest.prepend(guestName)

guests.prepend(newGuest)
console.log(guests)