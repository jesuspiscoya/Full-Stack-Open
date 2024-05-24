export const Filter = ({ newFilter, handleFilterChange }) => (
  <div>
    filter shown with:
    <input
      placeholder="Type here"
      value={newFilter}
      onChange={handleFilterChange}
    />
  </div>
);
