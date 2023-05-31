import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";
import Search from "./Search";
import Type from "./Type";

function PetsList() {
  const [query, setQuery] = useState("");
  //filter after changing and searching
  const [type, setType] = useState("");
  //filter the pets array by name and see wether it matches the query text field input or not
  // then it filter by type
  const [adopt, setPet] = useState(pets);
  let handleAdopt = (petId) => {
    setPet(adopt.filter((pet) => pet.id !== petId));
  };
  const petList = adopt
    .filter((pet) => pet.name.toUpperCase().includes(query.toUpperCase()))
    .filter((pet) => pet.type.includes(type))
    .map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt} />);

  let handChange = (event) => {
    console.log(event);
    setQuery(event.target.value);
    // console.log(event.target.value);
  };
  //Filter Pets by specie

  let typeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <br />
              <Search search={handChange} />
              Type:
              <Type type={typeChange} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
