import { useState } from "react";
import styles from "./Pay.module.css";

function Pay() {
  const [pay, setPay] = useState("");
  const [show, setShow] = useState("");

  function HandlePay() {
    // Basic validation
    if (pay.trim() === "") {
      setShow("⚠️ Please enter your M-Pesa number*");
      return;
    }

    // Check if the number matches Kenyan M-Pesa format
    const phonePattern = /^(?:254|\+254|0)?7\d{8}$/;
    if (!phonePattern.test(pay)) {
      setShow("❌ Please enter a valid M-Pesa number (e.g. 0712345678)");
      return;
    }

    // Reset message and show payment alert
    setShow("");
    alert("✅ You will receive an M-Pesa prompt to complete the payment.");
    setPay("");
  }

  return (
    <>
      <div>
        <h2>💰 Pay Here</h2>
        <div className={styles.payDiv}>
          {show && <p className={styles.errorText}>{show}</p>}

          <input
            type="tel"
            placeholder="Enter M-Pesa number"
            name="pay"
            value={pay}
            onChange={(e) => setPay(e.target.value)}
            required
          />

          <button
            className={styles.payButton}
            onClick={HandlePay}
          >
            Initiate Payment
          </button>
        </div>
      </div>
    </>
  );
}

export default Pay;
