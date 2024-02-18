let availableSeatnum;
let discount;
let grandTotal;
let reservedSeats = [];
const ticketPrice = 550;
let totalPrice;
const coupons = [
  {
    code: "NEW15",
    discount: 15,
  },
  {
    code: "Couple 20",
    discount: 20,
  },
];

const couponInput = document.getElementById("coupon-input");
let couponValue;
const couponButton = document.getElementById("coupon-button");

// console.log(coupons[0]);

const totalContent = document.querySelector(".total");
const grandTotalContent = document.querySelector(".grand-total");
// console.log(totalContents);

const availableSeatText = document.querySelector(".available-seat");

const seatsContainer = document.querySelector(".dynamic-ticket");
// console.log(seatsContainer);
const seatNumText = document.querySelector(".seat-num");

const availableSeats = document.querySelectorAll(".seat");
availableSeatnum = availableSeats.length;

//getting coupon code
couponButton.addEventListener("click", function (e) {
  e.preventDefault();
  couponValue = couponInput.value;
  //checking coupon value
  coupons.forEach((coupon) => {
    if (coupon.code.toLowerCase() === couponValue.toLowerCase()) {
      console.log(couponValue);
      // calculating grand total
      console.log(totalPrice);
      discount = coupon.discount;
      grandTotal = totalPrice - (totalPrice * discount) / 100;
      grandTotalContent.textContent = `BDT ${grandTotal}`;
    }
  });
});

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

      // handling total price
      totalPrice = reservedSeats.length * ticketPrice;
      // console.log(totalPrice);

      totalContent.textContent = `BDT ${totalPrice}`;
      seatNumText.textContent = `${reservedSeats.length}`;
    }
  });
});
