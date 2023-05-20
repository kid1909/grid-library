import styles from "./styles.css";
import gridstyle from "../styles/grid.css";

function Grid() {
  return (
    // <div className="grid wide">
    //   <div className="row">
    //     <div className="col l-2 m-0 c-0">
    //       <div className="item">Catgory</div>
    //     </div>
    //     <div className="col l-10 m-12">
    //       <div className="content">
    //         Something
    //         <div className="row">
    //           <div className="col l-2-4 m-4 c-12 m-4 c-12">
    //             <div className="item">Item 1</div>
    //           </div>
    //           <div className="col l-2-4 m-4 c-12 m-4 c-12">
    //             <div className="item">Item 2</div>
    //           </div>
    //           <div className="col l-2-4 m-4 c-12 m-4 c-12">
    //             <div className="item">Item 3</div>
    //           </div>
    //           <div className="col l-2-4 m-4 c-12 m-4 c-12">
    //             <div className="item">Item 4</div>
    //           </div>
    //           <div className="col l-2-4 m-4 c-12 m-4 c-12">
    //             <div className="item">Item 5</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div id="toast">
      {/* Success */}
      <div className="toast toast--success">
        <div className="toast__icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="toast__body">
          <h3 className="toast__title">Success</h3>
          <p className="toast__msg">
            Computer connected to Ubuntu Computer connected to Ubuntu
          </p>
        </div>
        <div className="toast__close">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="animation">
        <h1>Animate</h1>
        <h2>CSS</h2>
      </div>
    </div>
  );
}

export default Grid;
