import React from 'react';

import CustomParagraph from '../../../outer-library/CustomParagraph';


export default ({color}) => (
  <div className="main-wrapper">
    <div className="inner-container">
      <CustomParagraph >
        Paragraph component from outer library
      </CustomParagraph>
      <p>Innner black text</p>
      <span className="blue-text">Inner blue text</span>
      <p className="main-wrapper text-block">
        Bla-bla-bla-bla...
      </p>

      <div className="square-wrapper">
        <div className="square square-one">
          Dynamic color by props 1
        </div>

        <div className="square square-two">
          Dynamic color by props 2
        </div>
      </div>
    </div>

    <style jsx global>{`
      .inner-container {
        width: 80%;
        margin: 0 auto;
      }

      p {
        color: black;
        font-weight: 600;
      }

      .blue-text {
        color: blue;
        font-weight: normal;
      }

      .square-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }

      .square {
        margin: 20px 10px;
        width: 100px;
        height: 100px;
        text-align: center;
      }
    `}
    </style>

    <style jsx>{`
       .square-one {
         background-color: ${color ? "lightblue" : "lightgrey"};
       }

       .square-two {
         background-color: ${color ? "lightgrey" : "lightblue"};
       }
    `}
    </style>
  </div>
);

