
export default function PropsPanel({ config, setConfig, onReset }) {
  return (
    <div className="card-box props-panel">
      <h3>Props Configurator</h3>
      
<div className="control-group">
  <label>Items Count: {config.itemCount}</label>
  <input
    type="range"
    min="1"
    max="5"
    value={config.itemCount}
    onChange={(e) => setConfig({ ...config, itemCount: Number(e.target.value) })}
  />
</div>

      <div className="control-group">
        <label>Style Variant</label>
        <select
          value={config.variant}
          onChange={(e) => setConfig({ ...config, variant: e.target.value })}
        >
          <option value="separated">Separated Cards</option>
          <option value="bordered">Bordered Group</option>
          <option value="flush">Flush Underlines</option>
        </select>
      </div>

      <div className="control-group">
        <label>Icon Type</label>
        <select
          value={config.iconType}
          onChange={(e) => setConfig({ ...config, iconType: e.target.value })}
        >
          <option value="chevron">Chevron</option>
          <option value="plus-minus">Plus / Minus</option>
          <option value="arrow">Arrow</option>
        </select>
      </div>

      <div className="control-group">
        <label>Icon Position</label>
        <select
          value={config.iconPosition}
          onChange={(e) => setConfig({ ...config, iconPosition: e.target.value })}
        >
          <option value="end">End (Right)</option>
          <option value="start">Start (Left)</option>
        </select>
      </div>

      <div className="control-group">
        <label>Heading HTML Tag</label>
        <select
          value={config.headingTag}
          onChange={(e) => setConfig({ ...config, headingTag: e.target.value })}
        >
          <option value="h2">h2</option>
          <option value="h3">h3</option>
          <option value="h4">h4</option>
        </select>
      </div>

      <div className="switches-box">
        <label className="switch-label">
          <input
            type="checkbox"
            checked={config.allowMultiple}
            onChange={(e) => setConfig({ ...config, allowMultiple: e.target.checked })}
          />
          Allow Multiple Open
        </label>

        <label className="switch-label">
          <input
            type="checkbox"
            checked={config.allowCollapseAll}
            onChange={(e) => setConfig({ ...config, allowCollapseAll: e.target.checked })}
          />
          Allow Collapse All
        </label>

        <label className="switch-label">
          <input
            type="checkbox"
            checked={config.animated}
            onChange={(e) => setConfig({ ...config, animated: e.target.checked })}
          />
          Smooth Animation
        </label>
      </div>

      <button className="btn-reset" onClick={onReset}>
        Reset Defaults
      </button>
    </div>
  );
}