import React from "react";

function ImageComponent() {
    return (
        
        <div className="container">
        <h2 className="H2">About React</h2>
        <p className="P">React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, state management, and so on.</p>
        <div className="image-container">
            <img src="/assets/img/photo-1633356122102-3fe601e05bd2.avif" alt="Reactimg" className="image" />
            <img src="/assets/img/photo-1633356122544-f134324a6cee.avif" alt="Reactimg2" className="image" />
            <img src="/assets/img/photo-1461749280684-dccba630e2f6.avif" alt="Reactimg2" className="image" />
        </div>
    </div>
);
}

export default ImageComponent;
