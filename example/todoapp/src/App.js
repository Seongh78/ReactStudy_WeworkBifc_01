import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      {/* Form */}
      <form className="form">
        <div className="form-row align-items-center">
          <div className="col-9">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="To do"
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-primary mb-2"
              style={{ width: '100%' }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* List */}
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <input type="checkbox" /> 두부 사기{' '}
          </li>
          <li class="list-group-item">
            <input type="checkbox" /> 방청소
          </li>
          <li class="list-group-item">
            <input type="checkbox" /> 공부하기
          </li>
          <li class="list-group-item">
            <input type="checkbox" /> 숙제하기
          </li>
        </ul>
      </div>

      {/* Delete Btn */}
      <div className="foot">
        <button className="btn btn-warning btn-sm">완료삭제</button>&nbsp;
        <button className="btn btn-danger btn-sm">모두삭제</button>
      </div>
    </div>
  );
}

export default App;
