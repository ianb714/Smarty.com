document.querySelector(".btn").addEventListener("click", function () {
    alert("Booking feature coming soon!");
});
// Booking form submission
document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault(); // Prevent page reload
    alert("Thank you! Your booking has been received.");
    // Clear form
    document.getElementById("bookingForm").reset();
});
// Buy Now buttons
document.querySelectorAll(".shop .btn").forEach(function(button){
    button.addEventListener("click", function(){
        alert("Thank you for your interest! Contact us to complete the purchase.");
    });
});
// Buy Now buttons - WhatsApp method
document.querySelectorAll(".shop .btn").forEach(function(button, index){
    button.addEventListener("click", function(){
        let productNames = [
            "Luxury Facial Cream",
            "Matte Lipstick",
            "Glow Serum"
        ];
        let product = productNames[index];
        let phone = "254700123456"; // replace with your business number
        let message = `Hello! I want to buy: ${product}`;
        // Open WhatsApp chat
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    });
});
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <!-- PayPal product details here -->
    <input type="hidden" name="item_name" value="Luxury Facial Cream">
    <input type="hidden" name="amount" value="1500">
    <input type="submit" class="btn" value="Buy Now">
</form>