import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [list, setList] = React.useState([
    {
      id: 1,
      title: '두부 사기',
    },
    {
      id: 2,
      title: '방청소',
    },
    {
      id: 3,
      title: '공부',
    },
    {
      id: 4,
      title: '자전거타기',
    },
  ]);
  const [background, setColor] = React.useState('blue');
  const [newTitle, setNewTitle] = React.useState('');

  /**
   * 리스트 추가함수
   * --
   */
  const handleAddList = () => {
    if (!newTitle) {
      alert('내용을 입력해 주세요');
      return;
    }
    const newObject = {
      id: list.lenght < 1 ? 1 : list[list.length - 1].id + 1,
      title: newTitle,
    };
    setList([...list, newObject]);
    setNewTitle('');
  };

  /**
   * 할일 텍스트 변경 함수
   * --
   */
  const handleChangeNewTitle = (event) => {
    setNewTitle(event.target.value);
  };

  /* RENDER */
  return (
    <div>
      <Navbar background={background} />

      {/* Form */}
      <form className="form">
        <div className="form-row align-items-center">
          <div className="col-9">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="할 일"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary mb-2"
              style={{ width: '100%', background: background }}
              onClick={() => handleAddList()}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* List */}
      <div>
        <ul class="list-group list-group-flush">
          {list.map((item) => (
            <li class="list-group-item">
              <input type="checkbox" /> {item.title}{' '}
            </li>
          ))}
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
