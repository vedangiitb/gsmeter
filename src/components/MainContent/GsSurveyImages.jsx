import React from "react";

function GsSurveyImages({ titles, plots, responses }) {
  const images = titles.map((titles, index) => ({
    title: titles,
    url: plots[index],
    response: responses[index],
  }));
  return (
    <div>
      <DisplayImages images={images} />
    </div>
  );
}

function DisplayImages({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <h2>{image.title}</h2>
          <p style={{ fontWeight: "600" }}>Total Responses: {image.response}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image.url}
              alt={image.title}
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GsSurveyImages;
