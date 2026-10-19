import { ChevronDown, Plus, Minus, ArrowRight } from "lucide-react";

export default function AccordionItem({
  item,
  isOpen,
  onToggle,
  iconType,
  iconPosition,
  HeadingTag = "h3", // استقبال القيمة هنا
  animated,
}) {
  const renderIcon = () => {
    if (item.disabled) return <span className="icon-locked">Locked</span>;

    const iconProps = { size: 16, className: "accordion-icon" };

    if (iconType === "chevron") {
      return (
        <ChevronDown
          {...iconProps}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: animated ? "transform 0.2s ease" : "none",
          }}
        />
      );
    }
    if (iconType === "plus-minus") {
      return isOpen ? <Minus {...iconProps} /> : <Plus {...iconProps} />;
    }
    if (iconType === "arrow") {
      return (
        <ArrowRight
          {...iconProps}
          style={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: animated ? "transform 0.2s ease" : "none",
          }}
        />
      );
    }
  };

  // تحويل النص الوارد من الـ select إلى HTML Tag حقيقي وديناميكي في React
  const DynamicHeading = ["h2", "h3", "h4"].includes(HeadingTag) ? HeadingTag : "h3";

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""} ${item.disabled ? "disabled" : ""}`}>
      {/* استخدام التاج الديناميكي هنا */}
      <DynamicHeading style={{ margin: 0, padding: 0 }}>
        <button
          className={`accordion-trigger icon-pos-${iconPosition}`}
          onClick={onToggle}
          disabled={item.disabled}
          aria-expanded={isOpen}
        >
          {iconPosition === "start" && (
            <span className="icon-container icon-start">{renderIcon()}</span>
          )}
          
          <span className="trigger-content">{item.question}</span>

          {iconPosition === "end" && (
            <span className="icon-container icon-end">{renderIcon()}</span>
          )}
        </button>
      </DynamicHeading>

      <div
        style={{
          maxHeight: isOpen ? "150px" : "0px",
          overflow: "hidden",
          transition: animated ? "max-height 0.3s ease" : "none",
        }}
      >
        <div className="accordion-body">{item.answer}</div>
      </div>
    </div>
  );
}