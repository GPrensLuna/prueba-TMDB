import dynamic from "next/dynamic";
const FromAuth = dynamic(() => import("./components/FromSignUp"), {
  ssr: false,
});

const PageSignIn = (): JSX.Element => {
  return <FromAuth />;
};

export default PageSignIn;
