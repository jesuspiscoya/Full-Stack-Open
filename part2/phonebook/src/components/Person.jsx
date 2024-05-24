import personsService from "../services/persons";

export const Person = ({ persons, newFilter, setPersons, setAlert }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const deletePerson = (currentPerson) => {
    if (window.confirm("Do you really want to delete this person?")) {
      personsService
        .remove(currentPerson.id)
        .then(() => {
          setAlert({
            message: `Deleted ${currentPerson.name}`,
            type: "success",
          });
        })
        .catch(() => {
          setAlert({
            message: `Information of ${currentPerson.name} has already been removed from server`,
            type: "error",
          });
        });

      setPersons(persons.filter((person) => person.id !== currentPerson.id));
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  return filteredPersons.map((person) => (
    <div key={person.name}>
      {person.name} {person.number}
      <button onClick={() => deletePerson(person)}>delete</button>
    </div>
  ));
};
