type TitleProps = {
  headline: string,
};

function Title({ headline }:TitleProps) {
  return (
    <h1 className="text-4xl font-bold text-center text-emerald-400">{headline}</h1>
  );
}

export default Title;
