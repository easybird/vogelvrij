import React from 'react';

const SocialMediaLinks = ({ isWeb }) =>
    <p>
        <a href={ isWeb ? "https://www.instagram.com/atelier.vogelvrij/" : "instagram://user?username=atelier.vogelvrij"} target="_blank">
          <img
            src="//images.ctfassets.net/m9id7be8gm8y/5P4fIxQDEAMQakyakUU8UG/3aadc47c0fc7a9ec6d104c9a65e3f65f/icons8-instagram-old-50.png"
            alt="Instagram icon"
            style={{width: "2em", marginRight: "0.5em"}}
          />
        </a>
        <a href="https://www.facebook.com/AtelierVogelVrij/" target="_blank">
          <img
            src="//images.ctfassets.net/m9id7be8gm8y/6rHhQsUNWgM604Us6oMk2U/c44a4c6a8a6703f5083d9bbd67688b43/icons8-facebook-50.png"
            alt="Facebook icon"
            style={{width: "2em", marginRight: "0.5em"}}
          />
        </a>
        <a href="https://www.messenger.com/t/AtelierVogelVrij" target="_blank">
          <img
            src="//images.ctfassets.net/m9id7be8gm8y/6P3sCjmQlayqCG4ImsQqAa/8c1a2bcd0456ac87e1e4ad16ca8df94e/icons8-facebook-messenger-50.png"
            alt="Messenger icon"
            style={{width: "2em", marginRight: "0.5em"}}
          />
        </a>
        <a href="https://www.pinterest.com/ateliervogelvrij/" target="_blank">
          <img
            src="//images.ctfassets.net/m9id7be8gm8y/3laKEWzC3mCCmaAAomasgc/cd4029d686b5186e5154274e71b9ea2f/Pinterest-512.png"
            alt="Pinterest icon"
            style={{width: "2em", marginRight: "0.5em"}}
          />
        </a>
      </p>

export default SocialMediaLinks;