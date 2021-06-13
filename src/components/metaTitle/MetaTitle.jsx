import { Helmet } from "react-helmet";

const MetaTitle = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title ? `${props.title}` : "Cameo"}</title>
      </Helmet>
    </>
  );
};

export default MetaTitle;
