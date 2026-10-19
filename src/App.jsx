import  { useState } from "react";
import AccordionPreview from "./components/AccordionPreview";
import PropsPanel from "./components/PropsPanel";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is the core difference between SSR and Client-Side Rendering?",
    answer: "Server-Side Rendering generates full HTML on the server for better SEO, while Client-Side Rendering loads a minimal shell and renders via JavaScript.",
  },
  {
    id: 2,
    question: "How does Zustand manage state differently from Context API?",
    answer: "Zustand uses an external store to prevent unnecessary component re-renders across the tree, avoiding Context provider-hell.",
  },
  {
    id: 3,
    question: "What are React Server Components (RSCs)?",
    answer: "RSCs execute entirely on the server, sending zero JavaScript bundle weight to the client and allowing direct backend access.",
  },
  {
    id: 4,
    question: "Why is Vite preferred over traditional Webpack bundlers?",
    answer: "Vite leverages native ES modules and Esbuild for blazing-fast cold starts and instant Hot Module Replacement.",
  },
  {
    id: 5,
    question: "Can this specific accordion question be modified or disabled?",
    answer: "This is a disabled demonstration question to showcase restricted UI states.",
    disabled: true,
  },
];

const defaultConfig = {
  itemCount: 4,
  variant: "separated",
  iconType: "chevron",
  iconPosition: "end",
  headingTag: "h3",
  allowMultiple: false,
  allowCollapseAll: true,
  animated: true,
};

export default function App() {
  const [config, setConfig] = useState(defaultConfig);

  const activeItems = FAQ_DATA.slice(0, config.itemCount);

  return (
    <div className="playground-wrapper">
      <header className="playground-header">
        <h1>Accordion Playground</h1>
        <p>Interactive component customizer & live preview</p>
      </header>

      <div className="playground-grid">
        <AccordionPreview
          items={activeItems}
          variant={config.variant}
          iconType={config.iconType}
          iconPosition={config.iconPosition}
          headingTag={config.headingTag}
          allowMultiple={config.allowMultiple}
          allowCollapseAll={config.allowCollapseAll}
          animated={config.animated}
        />

        <PropsPanel
          config={config}
          setConfig={setConfig}
          onReset={() => setConfig(defaultConfig)}
        />
      </div>
    </div>
  );
}