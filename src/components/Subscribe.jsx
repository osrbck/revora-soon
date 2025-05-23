import React, { useState } from "react";
import emailjs from "emailjs-com";

const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to open/close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    //Reset the states
    setEmail("");
    setSubmitted(false);
    setError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to validate email and handle submission
  const handleSubscribe = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Geçerli bir email adresi giriniz.");
    } else {
      setIsLoading(true); // Yüklemeyi başlat
      // EmailJS ile gönder
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          { email: email },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setSubmitted(true);
          setError("");
        })
        .catch(() => {
          setError("Bir hata oluştu. Lütfen tekrar deneyin.");
        })
        .finally(() => {
          setIsLoading(false); // Yüklemeyi bitir
        });
    }
  };

  // Function to close modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      toggleModal();
    }
  };

  return (
    <div>
      <button onClick={toggleModal} className="button sub-button">
        Kaydol
      </button>

      {/* Modal (Conditional rendering) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            {!submitted ? (
              <>
                <h2 className="modal-title">Bültenimize Abone Olun</h2>

                <input
                  type="email"
                  placeholder="Email Giriniz"
                  className="input-field"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p className="error-message">{error}</p>}

                <button
                  className="modal-subscribe-button"
                  onClick={handleSubscribe}
                  disabled={isLoading}
                >
                  <div className="button-content">
                    {isLoading ? (
                      <>
                        <span>Gönderiliyor...</span>
                        <div className="spinner"></div>
                      </>
                    ) : (
                      'Gönder'
                    )}
                  </div>
                </button>
              </>
            ) : (
              <p className="success-message">Teşekkürler!</p>
            )}

            <button onClick={toggleModal} className="close-button">
              Çıkış
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
