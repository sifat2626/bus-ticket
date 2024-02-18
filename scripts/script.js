let availableSeatnum;
let reservedSeats = [];

const availableSeatText = document.querySelector(".available-seat");

const seatsContainer = document.querySelector(".dynamic-ticket");
console.log(seatsContainer);

const availableSeats = document.querySelectorAll(".seat");
availableSeatnum = availableSeats.length;

availableSeats.forEach((seat, i) => {
  seat.addEventListener("click", function () {
    if (reservedSeats.length < 2) {
      reservedSeats.push(seat);
      seat.classList.add("bg-green-500");
      availableSeatnum--;
      availableSeatText.textContent = `${availableSeatnum} seats left`;

      // Append the new line of HTML to the seats container
      seatsContainer.innerHTML += `
        <div class="grid grid-cols-12 mt-2">
          <div class="col-span-4">
            <p class="font-inter text-light-black opacity-60">${seat.id}</p>
          </div>
          <div class="col-span-4">
            <p class="font-inter text-light-black opacity-60">Economy</p>
          </div>
          <div class="col-span-4 ml-auto">
            <p class="font-inter text-light-black opacity-60">550</p>
          </div>
        </div>
      `;
    }
  });
});
