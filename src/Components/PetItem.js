import { useState } from "react";

function PetItem({ pet, handleAdopt }) {
  const [petImg, setImage] = useState(pet.image);
  //

  const changeImg = () => {
    setImage(pet.image2);
  };
  // const passPet = () => {
  //
  // };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImg} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={changeImg}>
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => handleAdopt(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
