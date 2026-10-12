import DecryptedText from './DecryptedText';

export default function SectionHeader({ title, titleStart, appendNode }) {
  return (
    <>
      <h1 className="mb-2 flex flex-wrap items-center gap-x-5 gap-y-3 text-5xl font-title md:text-5xl">
        <span className="bg-gradient-to-r from-title to-accent bg-clip-text text-transparent">
          <DecryptedText text={title} speed={32} revealDelay={2.4} startDelay={titleStart} />
        </span>
        {appendNode}
      </h1>
      <div className="pf-bar-x mb-4 h-2 w-44 bg-accent"></div>
    </>
  );
}