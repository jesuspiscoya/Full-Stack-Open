export const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => (
  <form onSubmit={addPerson}>
    <div>
      name:
      <input
        placeholder="Type name here"
        value={newName}
        onChange={handleNameChange}
        required
      />
    </div>
    <div>
      number:
      <input
        type="tel"
        pattern="[0-9]{9}"
        placeholder="Type number here"
        value={newNumber}
        onChange={handleNumberChange}
        required
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);
