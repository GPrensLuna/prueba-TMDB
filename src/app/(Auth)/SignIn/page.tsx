import dynamic from "next/dynamic";

const FromSignIn = dynamic(() => import("./components/FromSignIn"), {
  ssr: false,
});
const PageSignIn = (): JSX.Element => {
  return <FromSignIn />;
};

export default PageSignIn;
