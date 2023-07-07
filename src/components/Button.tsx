import { useRouter } from "../hooks/useRouter";

interface ButtonProps {
  link: string;
  title: string;
}

const Button = ({ link, title }: ButtonProps) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(link);
  };

  return <button onClick={handleClick}>{title}</button>;
};

export default Button;
