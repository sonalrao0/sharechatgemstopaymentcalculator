function calculatePayment() {
    const gemsInput = document.getElementById("gems");
    const paymentInput = document.getElementById("payment");
    const errorMessage = document.getElementById("errorMessage");
  
    const gems = gemsInput.value;
    let payment = 0;
  
    if (gems < 25000) {
      errorMessage.textContent = "Not eligible for payment";
      paymentInput.value = "";
      return;
    } else if (gems >= 25000 && gems < 50000) {
      payment = 250 + ((gems - 25000) / 10000) * 60;
    } else if (gems >= 50000 && gems < 100000) {
      payment = 500 + ((gems - 50000) / 10000) * 60;
    } else if (gems >= 100000 && gems < 150000) {
      payment = 1500 + 50 + ((gems - 150000) / 10000) * 60;
    } else if (gems >= 150000 && gems < 200000) {
      payment = 1900 + 50 + ((gems - 200000) / 10000) * 60;
    } else if (gems >= 200000 && gems < 250000) {
      payment = 2200 + 50 + ((gems - 250000) / 10000) * 60;
    } else if (gems >= 250000 && gems < 350000) {
      payment = 3100 + 200 + ((gems - 350000) / 10000) * 60;
    } else if (gems >= 350000 && gems < 400000) {
      payment = 3600 + 250 + ((gems - 400000) / 10000) * 60;
  } else if (gems >= 575000 && gems < 775000) {
      payment = 7050 + 500 + ((gems - 775000) / 10000) * 60;
  } else if (gems >= 775000 && gems < 1000000) {
      payment = 9100 + 650 + ((gems - 1000000) / 10000) * 60;
  } else if (gems >= 1000000 && gems < 1300000) {
      payment = 10500 + 1350 + ((gems - 1300000) / 10000) * 60;
  } else if (gems >= 1300000 && gems < 1500000) {
      payment = 12100 + 1600 + ((gems - 1500000) / 10000) * 60;
  } else if (gems >= 1500000 && gems < 1750000) {
      payment = 14000 + 1850 + ((gems - 1750000) / 10000) * 60;
  } else if (gems >= 1750000 && gems < 2200000) {
      payment = 17400 + 2300 + ((gems - 2200000) / 10000) * 60;
  } else if (gems >= 2200000 && gems < 2725000) {
      payment = 20000 + 3450 + ((gems - 2725000) / 10000) * 60;
  } else if (gems >= 2725000 && gems < 3225000) {
      payment = 24300 + 4050 + ((gems - 3225000) / 10000) * 60;
  } else if (gems >= 3225000 && gems < 3750000) {
      payment = 27900 + 4750 + ((gems - 3750000) / 10000) * 60;
  } else if (gems >= 3750000 && gems < 5450000) {
      payment = 40000 + 6900 + ((gems - 5450000) / 10000) * 60;
  } else if (gems >= 5450000 && gems < 7500000) {
      payment = 52900 + 9450 + ((gems - 7500000) / 10000) * 60;
  } else if (gems >= 7500000 && gems < 9525000) {
      payment = 66900 + 12050 + ((gems - 9525000) / 10000) * 60;
  } else if (gems >= 9525000 && gems < 13000000) {
      payment = 90500 + 16400 + ((gems - 13000000) / 10000) * 60;
  } else if (gems >= 13000000 && gems < 17000000) {
      payment = 121000 + 21450 + ((gems - 17000000) / 10000) * 60;
  } else if (gems >= 17000000 && gems < 20000000) {
      payment = 139800 + 21050 + ((gems - 20000000) / 10000) * 60;
  } else if (gems >= 20000000 && gems < 24000000) {
      payment = 170400 + 25250 + ((gems - 24000000) / 10000) * 60;
  } else if (gems >= 24000000 && gems < 34000000) {
      payment = 239600 + 35800 + ((gems - 34000000) / 10000) * 60;
  } else if (gems >= 34000000 && gems < 51000000) {
      payment = 392200 + 53700 + ((gems - 51000000) / 10000) * 60;
  } else if (gems >= 51000000 && gems < 68000000) {
      payment = 523000 + 28650 + ((gems - 68000000) / 10000) * 60;
  } else if (gems >= 68000000 && gems < 85000000) {
      payment = 653700 + 35800 + ((gems - 85000000) / 10000) * 60;
  } else if (gems >= 85000000 && gems < 102000000) {
      payment = 784400 + 42950 + ((gems - 102000000) / 10000) * 60;
  } else if (gems >= 102000000 && gems < 135000000) {
      payment = 1038200 + 56850 + ((gems - 135000000) / 10000) * 60;
  } else if (gems >= 135000000 && gems < 170000000) {
      payment = 1307400 + 71600 + ((gems - 170000000) / 10000) * 60;
  } else if (gems >= 170000000 && gems < 204000000) {
      payment = 1568900 + 85900 + ((gems - 204000000) / 10000) * 60;
  } else if (gems >= 204000000 && gems < 238000000) {
      payment = 1853900 + 100200 + ((gems - 238000000) / 10000) * 60;
  } else if (gems >= 238000000 && gems < 272000000) {
      payment = 2118700 + 114550 + ((gems - 272000000) / 10000) * 60;
  } else if (gems >= 272000000 && gems < 350000000) {
      payment = 2726300 + 147350 + ((gems - 350000000) / 10000) * 60;
  } else if (gems >= 350000000 && gems < 450000000) {
      payment = 3505300 + 189450 + ((gems - 450000000) / 10000) * 60;
  } else if (gems >= 450000000 && gems < 550000000) {
      payment = 4284200 + 231600 + ((gems - 550000000) / 10000) * 60;
  } else if (gems >= 550000000 && gems < 650000000) {
      payment = 5063200 + 273700 + ((gems - 650000000) / 10000) * 60;
  } else if (gems >= 650000000 && gems < 750000000) {
      payment = 5842105 + 315800 + ((gems - 750000000) / 10000) * 60;
  } else if (gems >= 750000000 && gems < 850000000) {
      payment = 6621053 + 357900 + ((gems - 850000000) / 10000) * 60;
  } else if (gems >= 850000000 && gems < 950000000) {
      payment = 7400000 + 400000 + ((gems - 950000000) / 10000) * 60;
  } else if (gems >= 950000000 && gems < 1050000000) {
      payment = 8178947 + 442100 + ((gems - 1050000000) / 10000) * 60;
  } else if (gems >= 1050000000 && gems < 1150000000) {
      payment = 8957895 + 484200 + ((gems - 1150000000) / 10000) * 60;
    } else {
      errorMessage.textContent = "Invalid input";
      paymentInput.value = "";
      return;
    }
  
    const tds = payment * 0.1;
    payment -= tds;
    paymentInput.value = payment;
    errorMessage.textContent = "";
  }

    <div class="footer">
        Created by Sonalrao
        
    </div>

</body>
</html>