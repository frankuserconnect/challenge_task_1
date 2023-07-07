import Button from "../components/Button";
import Title from "../components/Title";

const Root = () => {
  return (
    <>
      <Title title={"root"} />
      <Button link={"/about"} title={"about"} />
    </>
  );
};

export default Root;
