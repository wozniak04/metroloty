import React from "react";

const Platnosc = () => {
  return (
    <div id="paypal-donate-button-container">
      <div id="paypal-donate-button">
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="8JB9AWCMFRZ94" />
          <input
            type="image"
            src="https://www.paypalobjects.com/pl_PL/PL/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Przekaż darowiznę za pomocą przycisku PayPal"
          />
          <input type="hidden" name="return" value="http://localhost:3000/" />
        </form>
      </div>
    </div>
  );
};

export default Platnosc;
