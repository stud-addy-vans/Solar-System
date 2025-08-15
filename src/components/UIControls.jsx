const UIControls = ({ toggleScaleMode, scaleMode }) => {
  return (
    <div className="ui-controls">
      <button onClick={toggleScaleMode}>
        Toggle Scale Mode ({scaleMode})
      </button>
    </div>
  );
};

export default UIControls;
