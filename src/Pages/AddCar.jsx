import { useNavigate } from "react-router-dom";

export function AddCar() {
  return (
    <>
      <h1>Add a car</h1>
      <form>
        <label>
          Make:
          <input type="text" name="make" />
        </label>
        <label>
          Model:
          <input type="text" name="model" />
        </label>
        <label>
          Year:
          <input type="number" name="year" />
        </label>
        <label>
          Price:
          <input type="number" name="price" />
        </label>
        <button type="submit">Add car</button>
      </form>
    </>
  );
}
