import React, { useEffect, useState, FC } from "react";
import axios from "axios";
import NavComp from "./components/Navbar";
import CardComp from "./components/Card";
import { RickAndMortyDataType, Result } from "./types";

const App: FC = () => {
  const [mainData, setMainData] = useState<Result[]>([]);

  const getMainData = async () => {
    try {
      const { data } = await axios.get<RickAndMortyDataType>(
        "https://rickandmortyapi.com/api/character"
      );
      setMainData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMainData();
  }, []);

  return (
    <div>
      <NavComp />
      <div className='container text-center'>
        <div className='row justify-content-start'>
          {mainData.map((item, idx) => (
            <CardComp character={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
