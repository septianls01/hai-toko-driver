export const provinces = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/provinces');
  const dataProvinces = await res.json();

  return {
    props: { provinces: dataProvinces },
  };
};

const index = ({ provinces }) => {
  return (
    <div>
      <h1>data provisi</h1>
      {provinces.map((province) => (
        <div key={province.id}>
          <a>
            <h3>{province.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default index;
