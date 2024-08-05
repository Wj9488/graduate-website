const GradientLetterLeft = ({ LetterText, fromColour, toColour }) => {
  return (
    <p
      className={`bg-clip-text bg-gradient-to-br text-transparent ${fromColour} ${toColour} z-[-1] text-[15rem] lg:text-[17.5rem] xl:text-[25rem] 2xl:text-[30rem] 3xl:text-[35rem] leading-[.8] overflow-y-hidden pb-[1.5rem] font-medium"`} aria-hidden="true"
    >
      {LetterText}
    </p>
  );
};

export default GradientLetterLeft;
