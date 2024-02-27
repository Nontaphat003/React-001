import Contact from "./assets/Contact"
import Hello from "./assets/Hello"
import Counter from "./assets/Counter";

function App() {

  const helloData = [
    {name: "Mike", message: "Brow"},
    {name: "Bob", message: "Swagger"}
  ];

  return (
    <div className='App'>
        < Counter />
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message}/>
        ))}

        <Contact email="Anirach@gmail.com" phone ="0817320731"/>
    </div>
  );
}

export default App

