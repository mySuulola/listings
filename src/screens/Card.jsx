import React from "react";

const Card = ({ detail,  }) => {
  const { name, serverCount, votesCount, description, tags } = detail;
  return (
    <div className="class_shadow mb-3 mx-3 pt-3">
      <div className="px-3">
        <div className="d-flex justify-content-start">
          <img
            src="https://i.pinimg.com/236x/dc/f6/b9/dcf6b9e53927a1eeebcf2e91118c5cc5--anime-neko-anime-art.jpg"
            alt="anime display"
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <div className="mx-3">
            <h5 className="text-white small_font">{name}</h5>
            <div className="d-flex justify-content-start mb-1">
              <img
                src="https://www.colourbox.com/preview/28494936-dog-paw-with-heart-outline-icon.jpg"
                style={{ width: 20, height: 20 }}
                alt="trophy"
              />
              <p className="mx-3 text-grey mb-0 small_font">
                {" "}
                {serverCount} servers
              </p>
            </div>
            <div className="d-flex justify-content-start">
              <img
                src="https://www.colourbox.com/preview/28494936-dog-paw-with-heart-outline-icon.jpg"
                style={{ width: 20, height: 20 }}
                alt="trophy"
              />
              <p className="mx-3 text-grey mb-0 small_font">
                {votesCount} votes
              </p>
            </div>
          </div>
        </div>
        <p className="text-grey mt-1">{description}</p>
        <div className="d-flex flex-wrap">
          {tags.map((item) => (
            <p className="px-2 mx-2 badge_container text-white small_font">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="d-flex w-100">
        <button class="w-50 btn style_button ">View Bot</button>
        <button class="w-50 btn style_button border-left-0">
          Quick Invite
        </button>
      </div>
    </div>
  );
};

export default Card;
