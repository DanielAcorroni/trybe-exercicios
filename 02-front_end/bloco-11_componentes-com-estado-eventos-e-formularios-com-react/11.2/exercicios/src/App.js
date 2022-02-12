import './App.css';
import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';

function App() {
  return (
    <div className="App">
      <fieldset>
        <PersonalForm />
      </fieldset>
      <fieldset>
        <ProfessionalForm />
      </fieldset>
    </div>
  );
}

export default App;
