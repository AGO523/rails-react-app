import React, { ComponentProps } from 'react';
import 'App.css';
import 'animate.css/animate.css'
import data from "data.json"

import MainImage from "components/MainImage/MainImage"
import Card from "components/Card/Card"

export const Root = () => {
  return (
    <div className="App">
      <MainImage />
      <div className="card">
        {data.map((item: ComponentProps<typeof Card>, index: number) => {
          return (
            <Card title={item.title} description={item.description} imagePath={item.imagePath} key={index} />
          )
        })}
      </div>
      <div className="module--spacing--small"></div>
    </div>
  );
}

export default Root;
