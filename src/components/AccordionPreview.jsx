import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { Copy, Check } from "lucide-react";

export default function AccordionPreview({
  items,
  variant,
  iconType,
  iconPosition,
  headingTag, // تأكدي من استقبالها هنا
  allowMultiple,
  allowCollapseAll,
  animated,
}) {
  const [search, setSearch] = useState("");
  const [openIds, setOpenIds] = useState([1]);
  const [copied, setCopied] = useState(false);

  const filteredItems = items.filter((i) =>
    i.question.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (id, disabled) => {
    if (disabled) return;
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      if (openIds.includes(id)) {
        if (allowCollapseAll) setOpenIds([]);
      } else {
        setOpenIds([id]);
      }
    }
  };

  const handleCopy = () => {
    const code = `<Accordion variant="${variant}" iconType="${iconType}" headingTag="${headingTag}" allowMultiple={${allowMultiple}} />`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-box">
      <div className="preview-toolbar">
        <input
          type="text"
          className="search-input"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="toolbar-info">
          <span>
            Total: {filteredItems.length} | Open: {openIds.length}
          </span>
          <button className="btn-collapse" onClick={() => setOpenIds([])}>
            Collapse All
          </button>
        </div>
      </div>

      <div className={`accordion-container variant-${variant}`}>
        {filteredItems.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b", padding: "20px" }}>
            No results found.
          </p>
        ) : (
          filteredItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openIds.includes(item.id)}
              onToggle={() => handleToggle(item.id, item.disabled)}
              iconType={iconType}
              iconPosition={iconPosition}
              HeadingTag={headingTag} // تمريرها هنا بالاسم الصحيح لـ AccordionItem
              animated={animated}
            />
          ))
        )}
      </div>

      {/* Code Generator Box */}
      <div className="code-output">
        <div className="code-header">
          <span>Generated JSX</span>
          <button className="btn-copy" onClick={handleCopy}>
            {copied ? <Check size={12} /> : <Copy size={12} />}{" "}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="code-content">
          <code>{`<Accordion\n  variant="${variant}"\n  iconType="${iconType}"\n  iconPosition="${iconPosition}"\n  headingTag="${headingTag}"\n  allowMultiple={${allowMultiple}}\n/>`}</code>
        </pre>
      </div>
    </div>
  );
}